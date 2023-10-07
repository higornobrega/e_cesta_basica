import { Center, Text, Icon } from "native-base";
import { Fontisto } from '@expo/vector-icons';

import Logo from '../assets/a10zn-pvn6q.svg'

import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";

export function SignIn() {

  const { signIn, user } = useAuth();
  console.log('DADOS DO USUARIO => ', user);
  return (

    <Center flex={1} bgColor="gray.900" p={7}>
        <Logo width={200} height={200} />
      <Button
        type="SECONDARY"
        title="ENTRAR COM O GOOGLE"
        leftIcon={<Icon as={Fontisto} name='google' color="white" size='md' />}
        mt={12}
        onPress={signIn}
      />
      <Text color='white' textAlign='center' mt={4}>
        Não utilizamos nenhuma informação além{'\n'}de seu e-mail para criação de sua conta
      </Text>
      </Center >
      )
}
