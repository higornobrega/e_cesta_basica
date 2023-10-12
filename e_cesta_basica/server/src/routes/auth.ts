import { FastifyInstance } from "fastify"
import { z } from "zod"
import { prisma } from "../lib/prisma"
import { authenticate } from "../plugins/authenticate"

export async function authRoutes(fastify: FastifyInstance) {
  fastify.get('/me', {
    onRequest: [authenticate]
  }, async (request) => {
    return { user: request.user };
  });

  
  fastify.post('/users', async (request) => {
    const createUserBody = z.object({
      access_token: z.string(),
    })

    const { access_token } = createUserBody.parse(request.body)

    const userResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${access_token}`,
      }
    })

    const userData = await userResponse.json()

    const userInfoSchema = z.object({
      id: z.string(),
      email: z.string().email(),
      name: z.string(),
      picture: z.string().url(),
    })

    const userInfo = userInfoSchema.parse(userData)

    let user = await prisma.user.findUnique({
      where: {
        googleId: userInfo.id,
      }
    })

    if (!user) {
      user = await prisma.user.create({
        data: {
            googleId: userInfo.id,
            name: userInfo.name,
            email: userInfo.email,
            avatarUrl: userInfo.picture,
        }
      })
    }

    const token =  fastify.jwt.sign({
      name: user.name,
      avatarUrl: user.avatarUrl,
      email:user.email,
    }, {
      sub: user.id,
      expiresIn: '7 days'
    })

    return { token }
  })
}

// ya29.a0AfB_byDcG-Y4L-CXm4J8FVtFib2iV5U_wyuh-mb0QI5JrGEsKbgNRIO6GqIaPyO_CIvSkwfXKj2fA1ecxeWcw81k-p4WNG2vbwEw-Zj78S55SqYzOscK0P1nOpI4Q8Rf0mpOqfm2XV3fVyTxlXDlm75OnTNgxLrCKOoaCgYKAb8SARASFQGOcNnCPCNcHQX6Gux1eaB5FG_0Aw0170