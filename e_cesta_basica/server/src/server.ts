import Fastify from 'fastify';
import cors from "@fastify/cors";
import {PrismaClient} from '@prisma/client'
import { z } from 'zod'
import ShortUniqueId from 'short-unique-id';

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

    fastify.get('/supermercados/count', async () => {
    
        const count = await prisma.supermercado.count()
        return {count}
    });

    fastify.get('/pesquisas/count', async () => {
    
        const count = await prisma.pesquisaCompleta.count()
        return {count}
    });

    fastify.get('/users/count', async () => {
    
        const count = await prisma.user.count()
        return {count}
    });

    fastify.post('/supermercado', async (request, reply) => {
        const createSupermercadoBody = z.object({
            name:z.string(),
        })
        const { name } = createSupermercadoBody.parse(request.body)
        
        const generate = new ShortUniqueId({ length: 6 })
        const id = String(generate).toUpperCase();
        await prisma.supermercado.create({
            data: {
                name
            }
        })

        return reply.status(201).send({name})
    });
    fastify.post('/pesquisa', async (request, reply) => {
        const createPesquisaBody = z.object({
            mes_ano:z.string(),
            nome_supermercado: z.string(),
             
        })

        const { mes_ano, nome_supermercado, carneBovinaChaDentro, carneBovinaChaFora, carneBovinaPatinhoCoxaoMole, carneBovina, leiteIntegralValeDourado, leiteIntegralPiracanjuba, leiteIntegralSabugi, leiteIntegral, feijaoCariocaUrbano, feijaoCariocaDuPrato, feijaoCariocaCunhau, feijaoCarioca, arrozParboilizadoChines, arrozParboilizadoFortelli, arrozParboilizadoUrbano, arrozParboilizado, farinhaMandiocaQuentinha, farinhaMandiocaCurimatau, farinhaMandiocaDuPrato, farinhaMandioca, tomate, pao, cafePoSaoBraz, cafePoSantaClara, cafePoNordestino, cafePo, acucarNectar, acucarPuroMel, acucar, bananaPrata, bananaPacovan, banana, oleoSojaSoya, oleoSojaPrimor, oleoSoja, manteigaSaborosa, manteigaJucurutu, manteigaTerra, manteiga } = createPesquisaBody.parse(request.body)
        
        await prisma.pesquisaCompleta.create({
            data: {
                mes_ano,
                nome_supermercado,
                carneBovinaChaDentro,
                carneBovinaChaFora,
                carneBovinaPatinhoCoxaoMole,
                carneBovina,
                leiteIntegralValeDourado,
                leiteIntegralPiracanjuba,
                leiteIntegralSabugi,
                leiteIntegral,
                feijaoCariocaUrbano,
                feijaoCariocaDuPrato,
                feijaoCariocaCunhau,
                feijaoCarioca,
                arrozParboilizadoChines,
                arrozParboilizadoFortelli,
                arrozParboilizadoUrbano,
                arrozParboilizado,
                farinhaMandiocaQuentinha,
                farinhaMandiocaCurimatau,
                farinhaMandiocaDuPrato,
                farinhaMandioca,
                tomate,
                pao,
                cafePoSaoBraz,
                cafePoSantaClara,
                cafePoNordestino,
                cafePo,
                acucarNectar,
                acucarPuroMel,
                acucar,
                bananaPrata,
                bananaPacovan,
                banana,
                oleoSojaSoya,
                oleoSojaPrimor,
                oleoSoja,
                manteigaSaborosa,
                manteigaJucurutu,
                manteigaTerra,
                manteiga,
            }
        })

        return reply.status(201).send({nome_supermercado})
    });
    await fastify.listen({ port: 3333, /*host:'0.0.0.0'*/ })
    
}

bootstrap()
