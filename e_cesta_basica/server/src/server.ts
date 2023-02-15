import Fastify from 'fastify';
import cors from "@fastify/cors";
import {PrismaClient} from '@prisma/client'


const prisma = new PrismaClient({
    log:['query']
})


async function bootstrap() {
    const fastify = Fastify({
        logger: true, //Serve para o Fastify soltar os logs de tudo que vai acontecendo na Operação
    });

    await fastify.register(cors, {
        origin:true,
    })

    fastify.get('/supermercado/count', async () => {
        // Busca no BD
        // const supermercado = await prisma.supermercado.findMany({
        //     where: {
        //         name: {
        //             startsWith: 'A'
        //         }
        //     }
        // })
        const count = await prisma.supermercado.count()
        return {count}
    });

    await fastify.listen({ port: 3333, /*host:'0.0.0.0'*/ })
    
}

bootstrap()
