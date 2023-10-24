import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
    
async function main() {
    // const user1 = await prisma.user.create({
    //     data: {
    //         name: 'Higor Nóbrega',
    //         email: 'higornoa@gmail.com',
    //         matricula:'2017000969',
    //         avatarUrl:'https://github.com/higornobrega.png',
    //         autorizacao_pesquisa:true,
    //         tipo:'Aluno',
            
    //     }
    // })
    // const user2 = await prisma.user.create({
    //     data: {
    //         name: 'Higor óbrega',
    //         email: 'higorea@gmail.com',
    //         matricula:'201700096',
    //         avatarUrl:'https://github.com/higornobreg.png',
    //         autorizacao_pesquisa:true,
    //         tipo:'Aluno',
            
    //     }
    // })
    // const supermercado1 = await prisma.supermercado.create({
    //     data: {
    //         name:'Guedes',
    //     }
    // })
    // const supermercado2 = await prisma.supermercado.create({
    //     data: {
    //         name:'Boa Esperança',
    //     }
    // })

    // const produto1 = await prisma.produto.create({
    //     data: {
    //         name: 'feijão',
    //         peso_qtd: '1',
    //         tipo_qtd: 'kg',
    //         preco: 500,
    //     }
    // })
    // const produto2 = await prisma.produto.create({
    //     data: {
    //         name: 'arroz',
    //         peso_qtd: '1',
    //         tipo_qtd: 'kg',
    //         preco: 300,
    //     }
    // })
    // const pesquisa_produto = await prisma.pesProd.create({
    //     data: {
    //         produtos: {
    //             create: {
    //                 name: 'arroz',
    //                 peso_qtd: '1',
    //                 tipo_qtd: 'kg',
    //                 preco: 300,
    //             }
    //         },
    //         pesquisa: {
    //             create: {
    //                 mes_ano: '2023.1',
    //                 supermercado: {
    //                     create: {
    //                         name:'Dois Irmãos'
    //                     }
    //                 },
    //                 user: {
    //                     create: {
    //                         name: 'Higor Santos',
    //                         email: 'higorso@gmail.com',
    //                         matricula:'201200096',
    //                         avatarUrl:'https://github.com/higornobrega.png',
    //                         autorizacao_pesquisa:true,
    //                         tipo: 'Aluno',
                            
    //                     },

    //                 },            

    //             }
    //         }
    //     }
    // })
    
    // const pesquisa = await prisma.pesquisa.create({
    //     data: {
    //         mes_ano: '2023.1',
    //         supermercado: {
    //             create: {
    //                 name:'Dois Irmãos'
    //             }
    //         },
    //         user: {
    //             create: {
    //                 name: 'Higor Santos',
    //                 email: 'higsos@gmail.com',
    //                 matricula:'2012000969',
    //                 avatarUrl:'https://github.com/higornobrega.png',
    //                 autorizacao_pesquisa:true,
    //                 tipo: 'Aluno',
                    
    //             },

    //         },            

    //     }
    // })

    const pesquisaCompleta = await prisma.pesquisaCompleta.create({
        data: {
            mes_ano: '2023.1',
            nome_supermercado: 'Paulinos',
            carneBovinaChaDentro: 2,
            carneBovinaChaFora: 2,
            carneBovinaPatinhoCoxaoMole: 2,
            carneBovina: 2,
            
            leiteIntegralValeDourado: 2,
            leiteIntegralPiracanjuba: 2,
            leiteIntegralSabugi: 2,
            leiteIntegral: 2,
            
            feijaoCariocaUrbano: 2,
            feijaoCariocaDuPrato: 2,
            feijaoCariocaCunhau: 2,
            feijaoCarioca: 2,
            
            arrozParboilizadoChines: 2,
            arrozParboilizadoFortelli: 2,
            arrozParboilizadoUrbano: 2,
            arrozParboilizado: 2,
            
            farinhaMandiocaQuentinha: 2,
            farinhaMandiocaCurimatau: 2,
            farinhaMandiocaDuPrato: 2,
            farinhaMandioca: 2,
            
            tomate: 2,
            
            pao: 2,
            
            cafePoSaoBraz: 2,
            cafePoSantaClara: 2,
            cafePoNordestino: 2,
            cafePo: 2,
            
            acucarNectar: 2,
            acucarPuroMel: 2,
            acucar: 2,
            
            bananaPrata: 2,
            bananaPacovan: 2,
            banana: 2,
            
            oleoSojaSoya: 2,
            oleoSojaPrimor: 2,
            oleoSoja: 2,

            manteigaSaborosa: 2,
            manteigaJucurutu: 2,
            manteigaTerra: 2,
            manteiga: 2,
            user_pesquisa: {
                create: {
                    name: 'Higor Sanos',
                    email: 'higfgr@gmail.com',
                    matricula:'20120009',
                    avatarUrl:'https://github.com/higornobra.png',
                    autorizacao_pesquisa:true,
                    tipo: 'Aluno',
                    
                },

            },            

        }
    })

}

main()
