import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma'
import { z } from 'zod'

export async function pesquisaRoute(fastify:FastifyInstance) {
    fastify.get('/listarPesquisasGeral', async (request, reply) => {
        // Importe o Prisma e modele a lógica para buscar todas as pesquisas
        const pesquisas = await prisma.pesquisaGeral.findMany();
      
        // Retorne as pesquisas como resposta
        reply.send({ pesquisas });
      });

    fastify.get('/listarPesquisasCompleta', async (request, reply) => {
        // Importe o Prisma e modele a lógica para buscar todas as pesquisas
        const pesquisas = await prisma.pesquisaCompleta.findMany();
      
        // Retorne as pesquisas como resposta
        reply.send({ pesquisas });
    });
    fastify.get('/listarPesquisaCompletaMesAno/:mes_ano', async (request, reply) => {
        const { mes_ano } = request.params;
      
        // Use o Prisma para encontrar todas as PesquisaCompleta com o mes_ano especificado
        const pesquisas = await prisma.pesquisaCompleta.findMany({
          where: {
            mes_ano: mes_ano,
          },
        });
        
        // mes_ano String
        // createdAt DateTime @default(now())
        let nome_supermercado = '';
        let carneBovinaTotal = 0;
        let leiteIntegral = 0 
        let feijaoCarioca = 0 
        let arrozParboilizado = 0 
        let farinhaMandioca = 0 
        let tomate = 0 
        let pao = 0 
        let cafePo = 0 
        let acucar = 0 
        let banana = 0 
        let oleoSoja = 0 
        let manteiga = 0 
        
        let contCarneBovina = 0;
        let contLeiteIntegral = 0
        let contFeijaoCarioca = 0
        let contArrozParboilizado = 0
        let contFarinhaMandioca = 0
        let contTomate = 0
        let contPao = 0
        let contCafePo = 0
        let contAcucar = 0
        let contBanana = 0
        let contOleoSoja = 0
        let contManteiga = 0

        // pesquisas PesquisaCompleta[]

        for (const pesquisa of pesquisas) {
            // Verifica se o valor de carneBovinaChaDentro é válido e maior que zero
            if (pesquisa.carneBovinaChaDentro !== null && pesquisa.carneBovinaChaDentro > 0) {
              contCarneBovina++;
              carneBovinaTotal += pesquisa.carneBovinaChaDentro;
            }
        
            // Verifica se o valor de carneBovinaChaFora é válido e maior que zero
            if (pesquisa.carneBovinaChaFora !== null && pesquisa.carneBovinaChaFora > 0) {
              contCarneBovina++;
              carneBovinaTotal += pesquisa.carneBovinaChaFora;
            }
        
            // Outras verificações e operações necessárias...
        
            const id = pesquisa.id;
            nome_supermercado = pesquisa.nome_supermercado;
        
            console.log(`ID: ${id}, Nome do Supermercado: ${nome_supermercado}`);
          }
        
        // Calcula a média da carneBovina se houver valores válidos
        
        let carneBovinaMedia = 0;
        let carneBovinaFormatada = 0;
        if (contCarneBovina > 0) {
            carneBovinaMedia = carneBovinaTotal / contCarneBovina;
            carneBovinaFormatada = parseFloat(carneBovinaMedia.toFixed(2));
            carneBovinaMedia = carneBovinaFormatada * 100
            
          }
        
          console.log(`Média de Carne Bovina: ${carneBovinaMedia}`);
        
          // Cria uma nova entrada no banco de dados
          await prisma.pesquisaGeral.create({
            data: {
              mes_ano,
              nome_supermercado,
              carneBovina: carneBovinaMedia,
            },
          });
        reply.send({ pesquisas });
      });

    fastify.post('/CriarPesquisaCompleta', async (request, reply) => {
        const createPesquisaBody = z.object({
            mes_ano:z.string(),
            nome_supermercado: z.string(),
            carneBovinaChaDentro: z.number().optional(),
            carneBovinaChaFora: z.number().optional(),
            carneBovinaPatinhoCoxaoMole: z.number().optional(),
            carneBovina: z.number().optional(),
            leiteIntegralValeDourado: z.number().optional(),
            leiteIntegralPiracanjuba: z.number().optional(),
            leiteIntegralSabugi: z.number().optional(),
            leiteIntegral: z.number().optional(),
            feijaoCariocaUrbano: z.number().optional(),
            feijaoCariocaDuPrato: z.number().optional(),
            feijaoCariocaCunhau: z.number().optional(),
            feijaoCarioca: z.number().optional(),
            arrozParboilizadoChines: z.number().optional(),
            arrozParboilizadoFortelli: z.number().optional(),
            arrozParboilizadoUrbano: z.number().optional(),
            arrozParboilizado: z.number().optional(),
            farinhaMandiocaQuentinha: z.number().optional(),
            farinhaMandiocaCurimatau: z.number().optional(),
            farinhaMandiocaDuPrato: z.number().optional(),
            farinhaMandioca: z.number().optional(),
            tomate: z.number().optional(),
            pao: z.number().optional(),
            cafePoSaoBraz: z.number().optional(),
            cafePoSantaClara: z.number().optional(),
            cafePoNordestino: z.number().optional(),
            cafePo: z.number().optional(),
            acucarNectar: z.number().optional(),
            acucarPuroMel: z.number().optional(),
            acucar: z.number().optional(),
            bananaPrata: z.number().optional(),
            bananaPacovan: z.number().optional(),
            banana: z.number().optional(),
            oleoSojaSoya: z.number().optional(),
            oleoSojaPrimor: z.number().optional(),
            oleoSoja: z.number().optional(),
            manteigaSaborosa: z.number().optional(),
            manteigaJucurutu: z.number().optional(),
            manteigaTerra: z.number().optional(),
            manteiga: z.number().optional(),
             
        })
    
        const { mes_ano, nome_supermercado, carneBovinaChaDentro, carneBovinaChaFora, carneBovinaPatinhoCoxaoMole, carneBovina, leiteIntegralValeDourado, leiteIntegralPiracanjuba, leiteIntegralSabugi, leiteIntegral, feijaoCariocaUrbano, feijaoCariocaDuPrato, feijaoCariocaCunhau, feijaoCarioca, arrozParboilizadoChines, arrozParboilizadoFortelli, arrozParboilizadoUrbano, arrozParboilizado, farinhaMandiocaQuentinha, farinhaMandiocaCurimatau, farinhaMandiocaDuPrato, farinhaMandioca, tomate, pao, cafePoSaoBraz, cafePoSantaClara, cafePoNordestino, cafePo, acucarNectar, acucarPuroMel, acucar, bananaPrata, bananaPacovan, banana, oleoSojaSoya, oleoSojaPrimor, oleoSoja, manteigaSaborosa, manteigaJucurutu, manteigaTerra, manteiga } = createPesquisaBody.parse(request.body)
        try {
            await request.jwtVerify()

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
                    user: {
                        connectOrCreate: {
                            where: {
                                email: request.user.email,
                            },
                            create: {
                                name: request.user.name,
                                email: request.user.email,
                            },
                        },
                    }
                }
            })
        } catch {
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
        }
    
        return reply.status(201).send({nome_supermercado})
    });

}