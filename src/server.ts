import Fastify from 'fastify';
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";

import { supermercadoRoute } from './routes/supermercado';
import { authRoutes } from './routes/auth';
import { pesquisaRoute } from './routes/pesquisa';
import { userRoute } from './routes/user';


async function bootstrap() {
    const fastify = Fastify({
        logger: true, //Serve para o Fastify soltar os logs de tudo que vai acontecendo na Operação
    });

    await fastify.register(cors, {
        origin:true,
    })


    await fastify.register(jwt, {
        secret: 'e_cesta_basica',
      })
      
    await fastify.register(supermercadoRoute)
    await fastify.register(authRoutes)
    await fastify.register(pesquisaRoute)
    await fastify.register(userRoute)

    await fastify.listen({
        host: '0.0.0.0',
        port: process.env.PORT ? Number(process.env.PORT): 3333,
    })
    
}

bootstrap()
