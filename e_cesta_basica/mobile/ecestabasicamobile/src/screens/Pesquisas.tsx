import { useCallback, useState } from 'react';

import { VStack, Icon, useToast, FlatList } from 'native-base';
// import { VStack, Icon} from 'native-base';
import { Octicons } from '@expo/vector-icons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useEffect } from 'react';
import { api } from '../services/api';

import { Button } from '../components/Button';
import { Header } from '../components/Header';
import { PesquisaCard, PesquisaCardPros} from '../components/PesquisaCard';
import { Loading } from '../components/loading';
// import { EmptyPoolList } from '../components/EmptyPoolList';

export function Pesquisas() {
  const [isLoading, setIsLoading] = useState(true);
  const [pesquisas, setPesquisas] = useState<PesquisaCardPros[]>([])
  
  const { navigate } = useNavigation();
  const toast = useToast();

  async function fetchPesquisas() {
    setIsLoading(true)
    const response = await api.get('/listarPesquisasCompletaAtivoUser');
    try {
      setPesquisas(response.data.pesquisas);
    } catch (error) {
      console.log(error);
      toast.show({
        title: 'Não foi possível carregar as Pesquisas',
        placement: 'top',
        bgColor: 'red.500'
      })
    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(useCallback(() => {
    fetchPesquisas();
  },[]))
  // useEffect(() => {
  //   fetchPesquisas();
  // },[])

  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Pesquisas" />

      {/* <VStack mt={6} mx={5} borderBottomWidth={1} borderBottomColor="gray.600" pb={4} mb={4}>
        <Button 
          title="BUSCAR SUPERMERCADO" 
          leftIcon={<Icon as={Octicons} name="search" color="black" size="md" />}
          onPress={() => navigate('find')}
        />
      </VStack> */}
      {/* <Loading />
      <FlatList 
            data={pesquisas}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <PesquisaCard 
                data={item}
                // onPress={() => navigate('details', { id: item.id })}
              />
            )}
            // ListEmptyComponent={< />}
            // showsVerticalScrollIndicator={false}
            _contentContainerStyle={{ pb: 10 }}
            // px={5}
          /> */}
      {isLoading ? <Loading /> :
          <FlatList 
            data={pesquisas}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <PesquisaCard 
                data={item}
                onPress={() => navigate('details', { id: item.id })}
              />
            )}
            showsVerticalScrollIndicator={false}
            _contentContainerStyle={{ pb: 10 }}
            px={5}
          />
      } 
    </VStack>
  );
}