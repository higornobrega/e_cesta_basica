import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Heading, HStack, Text, VStack } from 'native-base';
import { useState } from 'react';
// import { Participants, ParticipantProps } from './Participants';
import { useEffect } from 'react';
export interface PesquisaCardPros {
  id: string;
  ativo: boolean;
  mes_ano: string;
  finalizado: boolean;
  createdAt: string;
  nome_supermercado: string;
  carneBovinaChaDentro: number;
  carneBovinaChaFora: number;
  carneBovinaPatinhoCoxaoMole: number;
  carneBovina: number;
  
  leiteintegralValeDourado: number;
  leiteintegralPiracanjuba: number;
  leiteintegralSabugi: number;
  leiteintegral: number;
  
  feijaoCariocaUrbano: number;
  feijaoCariocaDuPrato: number;
  feijaoCariocaCunhau: number;
  feijaoCarioca: number;
  
  arrozParboilizadoChines: number;
  arrozParboilizadoFortelli: number;
  arrozParboilizadoUrbano: number;
  arrozParboilizado: number;
  
  farinhaMandiocaQuentinha: number;
  farinhaMandiocaCurimatau: number;
  farinhaMandiocaDuPrato: number;
  farinhaMandioca: number;
  
  tomate: number;
  
  pao: number;
  
  cafePoSaoBraz: number;
  cafePoSantaClara: number;
  cafePoNordestino: number;
  cafePo: number;
  
  acucarNectar: number;
  acucarPuroMel: number;
  acucar: number;
  
  bananaPrata: number;
  bananaPacovan: number;
  banana: number;
  
  oleoSojaSoya: number;
  oleoSojaPrimor: number;
  oleoSoja: number;

  manteigaSaborosa: number;
  manteigaJucurutu: number;
  manteigaTerra: number;
  manteiga: number;
  
  userId: string,
  PesquisaGeral_id: string,
  user:{
    ativo: boolean;
    autorizacao_pesquisa: boolean;
    avatarUrl: string;
    createdAt: string;
    email: string;
    googleId:string;
    id:string;
    matricula:string;
    name:string;
    pesquisaIdU:string;
    tipo:string;
  }

//   id: string;
//   code: string;
//   title: string;
//   ownerId: string;
//   createdAt: string;
//   owner: {
//     name: string;
//   },
//   participants: ParticipantProps[];
//   _count: {
//     participants: number;
//   }
 }

interface Props extends TouchableOpacityProps {
  data: PesquisaCardPros;
}

export function PesquisaCard({ data, ...rest }: Props) {
  const [mesAno, setMesAno] = useState(data.mes_ano);
  async function mesAnoExtenco() {
    const ano = data.mes_ano.slice(0, 4);
    const mes = data.mes_ano.slice(5, 7);
    let mesAno = '';
    if (mes == '1') {
      mesAno = 'Janeiro'
    }
    else if (mes == '2') {
      mesAno = 'Fevereiro'
    }
    else if (mes == '3') {
      mesAno = 'Março'
    }
    else if (mes == '4') {
      mesAno = 'Abril'
    }
    else if (mes == '5') {
      mesAno = 'Maio'
    }
    else if (mes == '6') {
      mesAno = 'Junho'
    }
    else if (mes == '7') {
      mesAno = 'Julho'
    }
    else if (mes == '8') {
      mesAno = 'Agosto'
    }
    else if (mes == '9') {
      mesAno = 'Setembro'
    }
    else if (mes == '10') {
      mesAno = 'Outubro'
    }
    else if (mes == '11') {
      mesAno = 'Novembro'
    }
    else if (mes == '12') {
      mesAno = 'Dezembro'
    }
    mesAno = mesAno + ' de ' + ano;
    setMesAno('Pesquisa de ' + mesAno)
  }
  useEffect(() => {
    mesAnoExtenco();
  },[])

  return (
    <TouchableOpacity {...rest}>
      <HStack
        w="full"
        h={20}
        bgColor="gray.800"
        borderBottomWidth={3}
        borderBottomColor="yellow.500"
        justifyContent="space-between"
        alignItems="center"
        rounded="sm"
        mb={3}
        p={4}
      >
        <VStack>
          <Heading color="white" fontSize="md" fontFamily="heading">
            {data.nome_supermercado}
          </Heading>

          <Text color="gray.200" fontSize="xs">
            {mesAno}
          </Text>
        </VStack>
      </HStack>
    </TouchableOpacity>
  );
}