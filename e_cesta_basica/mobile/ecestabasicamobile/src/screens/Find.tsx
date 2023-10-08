import { Heading,VStack } from "native-base";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function Find() {
    return (
        <VStack flex={1} bgColor="gray.900">
            <Header title="Buscar por Mês e Ano" showBackButton/>
            <VStack mt={8} mx={5} alignItems="center">
                <Heading fontFamily="heading" color="white" fontSize="xl" mb={8} textAlign="center">
                    Qual o mês e ano que deseja buscar pesquisa
                </Heading>

        <Input 
          mb={2}
          placeholder="Mês e ano no padrão. Ex:05/2023"
        />
        <Button
          title="Buscar pesquisa"
        //   onPress={handlePoolCreate}
        //   isLoading={isLoading}
        />

            </VStack>
        </VStack>
    );
}