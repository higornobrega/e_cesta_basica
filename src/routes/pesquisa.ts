import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";
import { authenticate } from "../plugins/authenticate";

export async function pesquisaRoute(fastify: FastifyInstance) {
  fastify.get("/listarPesquisasGeral", async (request, reply) => {
    const pesquisas = await prisma.pesquisaGeral.findMany();

    reply.send({ pesquisas });
  });

  fastify.get("/listarPesquisasCompleta", async (request, reply) => {
    const pesquisas = await prisma.pesquisaCompleta.findMany({
      include: {
        user: true,
      },
    });

    reply.send({ pesquisas });
  });
  fastify.get("/listarPesquisasCompletaId/:id", async (request, reply) => {
    const params = request.params as { id: string };

    const id = params.id;

    const pesquisas = await prisma.pesquisaCompleta.findMany({
      where: {
        id,
      },
      include: {
        user: true,
      },
    });
    reply.send({ pesquisas });
  });

  fastify.get("/listarPesquisasGeralId/:id", async (request, reply) => {
    const params = request.params as { id: string };

    const id = params.id;

    const pesquisas = await prisma.pesquisaGeral.findMany({
      where: {
        id,
      },
    });
    reply.send({ pesquisas });
  });
  fastify.get("/listarPesquisasCompletaIdAtivo/:id", async (request, reply) => {
    const params = request.params as { id: string };

    const id = params.id;
    const ativo = true;
    const pesquisas = await prisma.pesquisaCompleta.findMany({
      where: {
        id,
        ativo,
      },
      include: {
        user: true,
      },
    });
    reply.send({ pesquisas });
  });

  fastify.get("/listarPesquisasGeralIdAtivo/:id", async (request, reply) => {
    const params = request.params as { id: string };
    const ativo = true;
    const id = params.id;

    const pesquisas = await prisma.pesquisaGeral.findMany({
      where: {
        id,
        ativo,
      },
    });
    reply.send({ pesquisas });
  });

  fastify.get(
    "/listarPesquisasCompletaAtivoUser",
    {
      onRequest: [authenticate],
    },
    async (request) => {
      // const params = request.params as { userId: string };
      const ativo = true;
      // const userId = params.userId;

      const pesquisas = await prisma.pesquisaCompleta.findMany({
        where: {
          ativo,
          user: {
            id: request.user.sub,
          },
        },
        include: {
          user: true,
        },
      });
      return { pesquisas };
    }
  );

  fastify.post("/criarPesquisaGeral/:mes_ano", async (request, reply) => {
    const params = request.params as { mes_ano: string };

    const mes_ano = params.mes_ano;
    const ativo = true;
    const finalizado = true;

    const pesquisas = await prisma.pesquisaCompleta.findMany({
      where: {
        finalizado,
        mes_ano,
        ativo,
      },
    });

    let nome_supermercado = "";
    let nome_pesquisador = "";

    let carneBovinaTotal = 0;
    let leiteIntegralTotal = 0;
    let feijaoCariocaTotal = 0;
    let arrozParboilizadoTotal = 0;
    let farinhaMandiocaTotal = 0;
    let tomateTotal = 0;
    let paoTotal = 0;
    let cafePoTotal = 0;
    let acucarTotal = 0;
    let bananaTotal = 0;
    let oleoSojaTotal = 0;
    let manteigaTotal = 0;

    let contCarneBovina = 0;
    let contLeiteIntegral = 0;
    let contFeijaoCarioca = 0;
    let contArrozParboilizado = 0;
    let contFarinhaMandioca = 0;
    let contTomate = 0;
    let contPao = 0;
    let contCafePo = 0;
    let contAcucar = 0;
    let contBanana = 0;
    let contOleoSoja = 0;
    let contManteiga = 0;

    for (const pesquisa of pesquisas) {
      const {
        carneBovinaChaDentro,
        carneBovinaChaFora,
        carneBovinaPatinhoCoxaoMole,

        leiteIntegralValeDourado,
        leiteIntegralPiracanjuba,
        leiteIntegralSabugi,

        feijaoCariocaUrbano,
        feijaoCariocaDuPrato,
        feijaoCariocaCunhau,

        arrozParboilizadoChines,
        arrozParboilizadoFortelli,
        arrozParboilizadoUrbano,

        farinhaMandiocaQuentinha,
        farinhaMandiocaCurimatau,
        farinhaMandiocaDuPrato,

        tomate,

        pao,

        cafePoSaoBraz,
        cafePoSantaClara,
        cafePoNordestino,

        acucarNectar,
        acucarPuroMel,

        bananaPrata,
        bananaPacovan,

        oleoSojaSoya,
        oleoSojaPrimor,

        manteigaSaborosa,
        manteigaJucurutu,
        manteigaTerra,
      } = pesquisa;

      if (carneBovinaChaDentro) {
        contCarneBovina++;
        carneBovinaTotal += carneBovinaChaDentro;
      }

      if (carneBovinaChaFora) {
        contCarneBovina++;
        carneBovinaTotal += carneBovinaChaFora;
      }

      if (carneBovinaPatinhoCoxaoMole) {
        contCarneBovina++;
        carneBovinaTotal += carneBovinaPatinhoCoxaoMole;
      }

      if (leiteIntegralValeDourado) {
        contLeiteIntegral++;
        leiteIntegralTotal += leiteIntegralValeDourado;
      }

      if (leiteIntegralPiracanjuba) {
        contLeiteIntegral++;
        leiteIntegralTotal += leiteIntegralPiracanjuba;
      }

      if (leiteIntegralSabugi) {
        contLeiteIntegral++;
        leiteIntegralTotal += leiteIntegralSabugi;
      }

      if (feijaoCariocaUrbano) {
        contFeijaoCarioca++;
        feijaoCariocaTotal += feijaoCariocaUrbano;
      }

      if (feijaoCariocaDuPrato) {
        contFeijaoCarioca++;
        feijaoCariocaTotal += feijaoCariocaDuPrato;
      }

      if (feijaoCariocaCunhau) {
        contFeijaoCarioca++;
        feijaoCariocaTotal += feijaoCariocaCunhau;
      }

      if (arrozParboilizadoChines) {
        contArrozParboilizado++;
        arrozParboilizadoTotal += arrozParboilizadoChines;
      }

      if (arrozParboilizadoFortelli) {
        contArrozParboilizado++;
        arrozParboilizadoTotal += arrozParboilizadoFortelli;
      }

      if (arrozParboilizadoUrbano) {
        contArrozParboilizado++;
        arrozParboilizadoTotal += arrozParboilizadoUrbano;
      }

      if (farinhaMandiocaQuentinha) {
        contFarinhaMandioca++;
        farinhaMandiocaTotal += farinhaMandiocaQuentinha;
      }

      if (farinhaMandiocaCurimatau) {
        contFarinhaMandioca++;
        farinhaMandiocaTotal += farinhaMandiocaCurimatau;
      }

      if (farinhaMandiocaDuPrato) {
        contFarinhaMandioca++;
        farinhaMandiocaTotal += farinhaMandiocaDuPrato;
      }

      if (farinhaMandiocaDuPrato) {
        contFarinhaMandioca++;
        farinhaMandiocaTotal += farinhaMandiocaDuPrato;
      }

      if (tomate) {
        contTomate++;
        tomateTotal += tomate;
      }

      if (pao) {
        contPao++;
        paoTotal += pao;
      }

      if (cafePoSaoBraz) {
        contCafePo++;
        cafePoTotal += cafePoSaoBraz;
      }

      if (cafePoSantaClara) {
        contCafePo++;
        cafePoTotal += cafePoSantaClara;
      }

      if (cafePoNordestino) {
        contCafePo++;
        cafePoTotal += cafePoNordestino;
      }

      if (acucarNectar) {
        contAcucar++;
        acucarTotal += acucarNectar;
      }

      if (acucarPuroMel) {
        contAcucar++;
        acucarTotal += acucarPuroMel;
      }

      if (bananaPrata) {
        contBanana++;
        bananaTotal += bananaPrata;
      }

      if (bananaPacovan) {
        contBanana++;
        bananaTotal += bananaPacovan;
      }

      if (oleoSojaSoya) {
        contOleoSoja++;
        oleoSojaTotal += oleoSojaSoya;
      }

      if (oleoSojaPrimor) {
        contOleoSoja++;
        oleoSojaTotal += oleoSojaPrimor;
      }

      if (manteigaSaborosa) {
        contManteiga++;
        manteigaTotal += manteigaSaborosa;
      }

      if (manteigaJucurutu) {
        contManteiga++;
        manteigaTotal += manteigaJucurutu;
      }

      if (manteigaTerra) {
        contManteiga++;
        manteigaTotal += manteigaTerra;
      }

      nome_supermercado = pesquisa.nome_supermercado;
      nome_pesquisador = pesquisa.nome_pesquisador;
    }

    const calcularMedia = (total: number, contagem: number) => {
      if (contagem > 0) {
        return parseFloat((total / contagem).toFixed(2)) * 100;
      }
      return 0;
    };

    const carneBovinaMedia = calcularMedia(carneBovinaTotal, contCarneBovina);
    const leiteIntegralMedia = calcularMedia(
      leiteIntegralTotal,
      contLeiteIntegral
    );
    const feijaoCariocaMedia = calcularMedia(
      feijaoCariocaTotal,
      contFeijaoCarioca
    );
    const arrozParboilizadoMedia = calcularMedia(
      arrozParboilizadoTotal,
      contArrozParboilizado
    );
    const farinhaMandiocaMedia = calcularMedia(
      farinhaMandiocaTotal,
      contFarinhaMandioca
    );
    const tomateMedia = calcularMedia(tomateTotal, contTomate);
    const paoMedia = calcularMedia(paoTotal, contPao);
    const cafePoMedia = calcularMedia(cafePoTotal, contCafePo);
    const acucarMedia = calcularMedia(acucarTotal, contAcucar);
    const bananaMedia = calcularMedia(bananaTotal, contBanana);
    const oleoSojaMedia = calcularMedia(oleoSojaTotal, contOleoSoja);
    const manteigaMedia = calcularMedia(manteigaTotal, contManteiga);

    const pesquisaIds = pesquisas.map((pesquisa) => pesquisa.id);

    await prisma.pesquisaGeral.create({
      data: {
        mes_ano,
        nome_supermercado,
        nome_pesquisador,
        carneBovina: carneBovinaMedia,
        leiteIntegral: leiteIntegralMedia,
        feijaoCarioca: feijaoCariocaMedia,
        arrozParboilizado: arrozParboilizadoMedia,
        farinhaMandioca: farinhaMandiocaMedia,
        tomate: tomateMedia,
        pao: paoMedia,
        cafePo: cafePoMedia,
        acucar: acucarMedia,
        banana: bananaMedia,
        oleoSoja: oleoSojaMedia,
        manteiga: manteigaMedia,
        pesquisas: {
          connect: pesquisaIds.map((id) => ({ id })),
        },
      },
    });

    reply.send({ pesquisas });
  });

  fastify.put("/removerPesquisaGeral/:id", async (request, reply) => {
    const params = request.params as { id: string };
    const id = params.id;
    try {
      // Use o Prisma para atualizar o atributo 'ativo' para false
      const updatedPesquisaGeral = await prisma.pesquisaGeral.update({
        where: { id },
        data: { ativo: false },
      });

      reply.send({
        message: "Pesquisa Geral atualizada com sucesso.",
        updatedPesquisaGeral,
      });
    } catch (error) {
      reply
        .code(500)
        .send({ message: "Erro ao atualizar Pesquisa Geral.", error });
    }
  });

  fastify.put("/removerPesquisaCompleta/:id", async (request, reply) => {
    const params = request.params as { id: string };
    const id = params.id;
    try {
      // Use o Prisma para atualizar o atributo 'ativo' para false
      const updatedPesquisaCompleta = await prisma.pesquisaCompleta.update({
        where: { id },
        data: { ativo: false },
      });

      reply.send({
        message: "Pesquisa Completa atualizada com sucesso.",
        updatedPesquisaCompleta,
      });
    } catch (error) {
      reply
        .code(500)
        .send({ message: "Erro ao atualizar Pesquisa Geral.", error });
    }
  });
  fastify.put("/editarPesquisaCompleta/:id", async (request, reply) => {
    const params = request.params as { id: string };
    const id = params.id;

    const editarPesquisaBody = z.object({
      mes_ano: z.string().optional(),
      nome_supermercado: z.string().optional(),
      nome_pesquisador: z.string().optional(),
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
    });

    const {
      mes_ano,
      nome_supermercado,
      nome_pesquisador,
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
    } = editarPesquisaBody.parse(request.body);
    try {
      // Use o Prisma para atualizar o atributo 'ativo' para false
      const updatedPesquisaCompleta = await prisma.pesquisaCompleta.update({
        where: { id },
        data: {
          mes_ano: mes_ano,
          nome_supermercado: nome_supermercado,
          nome_pesquisador: nome_pesquisador,
          carneBovinaChaDentro: carneBovinaChaDentro,
          carneBovinaChaFora: carneBovinaChaFora,
          carneBovinaPatinhoCoxaoMole: carneBovinaPatinhoCoxaoMole,
          carneBovina: carneBovina,
          leiteIntegralValeDourado: leiteIntegralValeDourado,
          leiteIntegralPiracanjuba: leiteIntegralPiracanjuba,
          leiteIntegralSabugi: leiteIntegralSabugi,
          leiteIntegral: leiteIntegral,
          feijaoCariocaUrbano: feijaoCariocaUrbano,
          feijaoCariocaDuPrato: feijaoCariocaDuPrato,
          feijaoCariocaCunhau: feijaoCariocaCunhau,
          feijaoCarioca: feijaoCarioca,
          arrozParboilizadoChines: arrozParboilizadoChines,
          arrozParboilizadoFortelli: arrozParboilizadoFortelli,
          arrozParboilizadoUrbano: arrozParboilizadoUrbano,
          arrozParboilizado: arrozParboilizado,
          farinhaMandiocaQuentinha: farinhaMandiocaQuentinha,
          farinhaMandiocaCurimatau: farinhaMandiocaCurimatau,
          farinhaMandiocaDuPrato: farinhaMandiocaDuPrato,
          farinhaMandioca: farinhaMandioca,
          tomate: tomate,
          pao: pao,
          cafePoSaoBraz: cafePoSaoBraz,
          cafePoSantaClara: cafePoSantaClara,
          cafePoNordestino: cafePoNordestino,
          cafePo: cafePo,
          acucarNectar: acucarNectar,
          acucarPuroMel: acucarPuroMel,
          acucar: acucar,
          bananaPrata: bananaPrata,
          bananaPacovan: bananaPacovan,
          banana: banana,
          oleoSojaSoya: oleoSojaSoya,
          oleoSojaPrimor: oleoSojaPrimor,
          oleoSoja: oleoSoja,
          manteigaSaborosa: manteigaSaborosa,
          manteigaJucurutu: manteigaJucurutu,
          manteigaTerra: manteigaTerra,
          manteiga: manteiga,
        },
      });

      reply.send({
        message: "Pesquisa Completa atualizada com sucesso.",
        updatedPesquisaCompleta,
      });
    } catch (error) {
      reply
        .code(500)
        .send({ message: "Erro ao atualizar Pesquisa Geral.", error });
    }

    return reply.status(201).send({ nome_supermercado });
  });
  fastify.post("/criarPesquisaCompleta", async (request, reply) => {
    const createPesquisaBody = z.object({
      mes_ano: z.string(),
      nome_supermercado: z.string(),
      nome_pesquisador: z.string(),
      finalizado: z.boolean().optional(),
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
    });

    const {
      mes_ano,
      nome_supermercado,
      nome_pesquisador,
      finalizado,
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
    } = createPesquisaBody.parse(request.body);
    const nomeSupermercadoMaiusculas = nome_supermercado.toUpperCase();
    const nomePesquisadorMaiusculas = nome_pesquisador.toUpperCase();

    try {
      await request.jwtVerify();

      await prisma.pesquisaCompleta.create({
        data: {
          mes_ano,
          nome_supermercado: nomeSupermercadoMaiusculas,
          nome_pesquisador: nomePesquisadorMaiusculas,
          finalizado,
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
          },
        },
      });
    } catch {
      await prisma.pesquisaCompleta.create({
        data: {
          mes_ano,
          nome_supermercado: nomeSupermercadoMaiusculas,
          nome_pesquisador: nomePesquisadorMaiusculas,
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
        },
      });
    }

    return reply.status(201).send({ nome_supermercado });
  });
}
