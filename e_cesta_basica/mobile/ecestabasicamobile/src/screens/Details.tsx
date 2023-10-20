import { useEffect, useState } from 'react';
import { Share } from 'react-native';
import { HStack, useToast, VStack } from 'native-base';
import { useRoute } from '@react-navigation/native';

import { api } from '../services/api';

import { Header } from '../components/Header';
import { Loading } from '../components/loading';
import { PesquisaCardPros } from '../components/PesquisaCard';
import { PoolHeader } from '../components/PoolHeader';
import { EmptyMyPoolList } from '../components/EmptyMyPoolList';
import { Option } from '../components/Option';
import { Guesses } from '../components/Guesses';

interface RoutePrams {
  id: string;
}

export function Details() {
  // const [optionSelected, setOptionSelected] = useState<'guesses' | 'ranking'>('guesses')
  const [isLoading, setIsLoading] = useState(true);
  const [pesquisaDetails, setPesquisaDetails] = useState<PesquisaCardPros>({} as PesquisaCardPros);

  const route = useRoute();
  const toast = useToast();

  const { id } = route.params as RoutePrams;

  async function fetchPesquisaDetails() {
    try {
      setIsLoading(true)
      const response = await api.get(`/listarPesquisasCompletaIdAtivo/${id}`);
      setPesquisaDetails(response.data.pesquisas);
    } catch (error) {
      console.log(error);
      toast.show({
        title: 'Não foi possível carregar os detalhes da Pesquisa',
        placement: 'top',
        bgColor: 'red.500'
      })
      
    } finally {
      setIsLoading(false);
    }
  }

  // async function handleCodeShare() {
  //   await Share.share({
  //     message: poolDetails.code
  //   })
  // }

  useEffect(() => {
    fetchPesquisaDetails();
  }, [id])

  if(isLoading) {
    return( 
      <Loading />
    )
  }

  return (
    <VStack flex={1} bgColor="gray.900">
     <Header 
        //  title={poolDetails.title} 
         title={id} 
         showBackButton 
        //  showShareButton 
        //  onShare={handleCodeShare}
        //  onShare={handleCodeShare}
       />
   {/* 
  //     {
  //       poolDetails._count?.participants > 0 ? 
*/}
         <VStack px={5} flex={1}>

           {/* <Guesses  pesquisaId={pesquisaDetails.id}/> */}
         </VStack>
    </VStack>
  );
}