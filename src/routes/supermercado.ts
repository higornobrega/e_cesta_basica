import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma'
import ShortUniqueId from 'short-unique-id';
import { z } from 'zod'

export async function supermercadoRoute(fastify:FastifyInstance) {

    fastify.get('/supermercados/count', async () => {
    
        const count = await prisma.supermercado.count()
        return { count }
    });

    fastify.post('/supermercado', async (request, reply) => {
        const createSupermercadoBody = z.object({
            name: z.string(),
        })
        const { name } = createSupermercadoBody.parse(request.body)
    
        const generate = new ShortUniqueId({ length: 6 })
        const id = String(generate).toUpperCase();
        await prisma.supermercado.create({
            data: {
                name
            }
        })

        return reply.status(201).send({ name })
    });

}