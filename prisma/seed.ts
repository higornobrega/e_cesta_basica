import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
    
async function main() {
    const user1 = await prisma.user.create({
        data: {
            name: 'Higor Nóbrega',
            email: 'higornobrega@gmail.com',
            matricula:'2017000969',
            avatarUrl:'https://github.com/higornobrega.png',
            autorizacao_pesquisa:true,
            tipo:'Aluno',
            
        }
    })
    const user2 = await prisma.user.create({
        data: {
            name: 'Higor Nóbrega',
            email: 'higornobrega@gmail.com',
            matricula:'2017000969',
            avatarUrl:'https://github.com/higornobrega.png',
            autorizacao_pesquisa:true,
            tipo:'Aluno',
            
        }
    })
    const supermercado1 = await prisma.supermercado.create({
        data: {
            name:'Guedes',
        }
    })
    const supermercado2 = await prisma.supermercado.create({
        data: {
            name:'Boa Esperança',
        }
    })

    const produto1 = await prisma.produto.create({
        data: {
            name: 'feijão',
            peso_qtd: '1',
            tipo_qtd: 'kg',
            preco: 500,
        }
    })
    const produto2 = await prisma.produto.create({
        data: {
            name: 'arroz',
            peso_qtd: '1',
            tipo_qtd: 'kg',
            preco: 300,
        }
    })
    const pesquisa = await prisma.pesquisa.create({
        data: {
            mes_ano: '2023.1',
            supermercado: {
                create: {
                    name:'Dois Irmãos'
                }
            },
            user: {
                create: {
                    name: 'Higor Santos',
                    email: 'higorsantos@gmail.com',
                    matricula:'2012000969',
                    avatarUrl:'https://github.com/higornobrega.png',
                    autorizacao_pesquisa:true,
                    tipo: 'Aluno',
                    
                },

            },            

        }
    })
}

main()
