import { Heading,VStack } from "native-base";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import Logo from '../assets/a10zn-pvn6q.svg'

export function New() {
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
        />
        <Button
          title="Criar pesquisa"
        //   onPress={handlePoolCreate}
        //   isLoading={isLoading}
        />

            </VStack>
        </VStack>
    );
}