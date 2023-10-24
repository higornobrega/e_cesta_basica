import { useCallback, useState } from 'react';

import { VStack, useToast, FlatList } from 'native-base';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { api } from '../services/api';
import {
  View, StyleSheet, Text
} from 'react-native';
import { Button } from '../components/Button';
import { Header } from '../components/Header';
import { PesquisaCard, PesquisaCardPros} from '../components/PesquisaCard';
import { Loading } from '../components/loading';

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


  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Pesquisas" />
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
      <Text></Text>
      <Text></Text>
      <Text></Text>
    </VStack>
  );
}