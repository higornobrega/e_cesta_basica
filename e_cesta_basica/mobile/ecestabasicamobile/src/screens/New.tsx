import { useState } from "react";
import { Heading, VStack } from "native-base";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import Logo from '../assets/a10zn-pvn6q.svg'
import { useToast } from "native-base";
import { api } from "../services/api";

export function New() {
    const [title, setTitle] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();
    async function handlePoolCreate() { 
        if (!title.trim()) {
            toast.show({
                title: "Nome do supermercado é obrigatório",
                placement: "top",
                bgColor: "red.500",
              })
        }

        
        try {
            setIsLoading(true);
            const dataAtual = new Date();
            const ano = dataAtual.getFullYear();
            const mes = dataAtual.getMonth() + 1;
            const anoMes = `${ano}.${mes}`;
            const mes_ano = anoMes
            const nome_supermercado = title
            await api.post('/criarPesquisaCompleta', {
                mes_ano,
                nome_supermercado,
            });
            toast.show({
                title: "Nome do supermercado cadastrado com sucesso",
                placement: "top",
                bgColor: "green.500",
              })
        } catch (error) {
            console.log(error);
            toast.show({
                title: "Não foi possível criar a Pesquisa",
                placement: "top",
                bgColor: "red.500",
            })
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <VStack flex={1} bgColor="gray.900">
            <Header title="Criar nova pesquisa" showBackButton/>
            <VStack mt={8} mx={5} alignItems="center">
                <Logo width={200} height={200} />
                <Heading fontFamily="heading" color="white" fontSize="xl" my={8} textAlign="center">
                    Qual o nome do supermercado que vai fazer a pesquisa
                </Heading>

        <Input 
            mb={2}
            placeholder="Nome do Supermercado"
            onChangeText={setTitle}
            value={title}
        />
        <Button
          title="Criar pesquisa"
          onPress={handlePoolCreate}
        isLoading={isLoading}
        />

            </VStack>
        </VStack>
    );
}