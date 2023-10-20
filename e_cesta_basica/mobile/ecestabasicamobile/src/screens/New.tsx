import { useState } from "react";
import { Heading, VStack, ScrollView } from "native-base";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import Logo from '../assets/a10zn-pvn6q.svg'
import { useToast } from "native-base";
import { api } from "../services/api";
import { TextInputMask } from 'react-native-masked-text';
import {
    View, StyleSheet, Text
} from 'react-native';

export function New() {
    const [title, setTitle] = useState('');
    const [carneBovinaChaDentro, setCarneBovinaChaDentro] = useState('');
    const [carneBovinaChaFora, setCarneBovinaChaFora] = useState('');
    const [carneBovinaPatinhoCoxaoMole, setCarneBovinaPatinhoCoxaoMole] = useState('');
    const [leiteIntegralValeDourado, setLeiteIntegralValeDourado] = useState('');
    const [leiteIntegralPiracanjuba, setLeiteIntegralPiracanjuba] = useState('');
    const [leiteIntegralSabugi, setLeiteIntegralSabugi] = useState('');
    // const [leiteIntegral, setLeiteIntegral] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();

    const [isPlaceholderVisible, setPlaceholderVisible] = useState(true);
    const [isPlaceholderVisible1, setPlaceholderVisible1] = useState(true);
    const [isPlaceholderVisible2, setPlaceholderVisible2] = useState(true);
    const [isPlaceholderVisible3, setPlaceholderVisible3] = useState(true);
    const [isPlaceholderVisible4, setPlaceholderVisible4] = useState(true);
    const [isPlaceholderVisible5, setPlaceholderVisible5] = useState(true);
    const [isPlaceholderVisible6, setPlaceholderVisible6] = useState(true);
    const [isPlaceholderVisible7, setPlaceholderVisible7] = useState(true);

    const handleFocus = () => {
        setPlaceholderVisible(false);
    };

    const handleFocus1 = () => {
        setPlaceholderVisible1(false);
    };

    const handleFocus2 = () => {
        setPlaceholderVisible2(false);
    };

    const handleFocus3 = () => {
        setPlaceholderVisible3(false);
    };

    const handleFocus4 = () => {
        setPlaceholderVisible4(false);
    };

    const handleFocus5 = () => {
        setPlaceholderVisible5(false);
    };


    const handleBlur = () => {
        if (!carneBovinaChaDentro) {
            setPlaceholderVisible(true);
        }
    };
    
    const handleBlur1= () => {
        if (!carneBovinaChaFora) {
            setPlaceholderVisible1(true);
        }
    };    const handleBlur2 = () => {
        if (!carneBovinaPatinhoCoxaoMole) {
            setPlaceholderVisible2(true);
        }
    };
    const handleBlur3 = () => {
        if (!leiteIntegralValeDourado) {
            setPlaceholderVisible3(true);
        }
    };
    const handleBlur4 = () => {
        if (!leiteIntegralPiracanjuba) {
            setPlaceholderVisible4(true);
        }
    };
    const handleBlur5 = () => {
        if (!leiteIntegralSabugi) {
            setPlaceholderVisible5(true);
        }
    };


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
            console.log('mes_ano')
            console.log(mes_ano)
            console.log('typeof (mes_ano)')
            console.log(typeof (mes_ano))
            console.log('nome_supermercado')
            console.log(nome_supermercado)
            console.log('typeof (nome_supermercado)')
            console.log(typeof (nome_supermercado))
            console.log('carneBovinaChaDentro')
            console.log(carneBovinaChaDentro)
            console.log('typeof (carneBovinaChaDentro)')
            console.log(typeof (carneBovinaChaDentro))
            console.log('carneBovinaChaFora')
            console.log(carneBovinaChaFora)
            console.log('typeof (carneBovinaChaFora)')
            console.log(typeof (carneBovinaChaFora))
            console.log('carneBovinaPatinhoCoxaoMole')
            console.log(carneBovinaPatinhoCoxaoMole)
            console.log('typeof (carneBovinaPatinhoCoxaoMole)')
            console.log(typeof (carneBovinaPatinhoCoxaoMole))
            // console.log('carneBovina')
            // console.log(carneBovina)
            // console.log('typeof (carneBovina)')
            // console.log(typeof (carneBovina))
            console.log('leiteIntegralValeDourado')
            console.log(leiteIntegralValeDourado)
            console.log('typeof (leiteIntegralValeDourado)')
            console.log(typeof (leiteIntegralValeDourado))
            console.log('leiteIntegralPiracanjuba')
            console.log(leiteIntegralPiracanjuba)
            console.log('typeof (leiteIntegralPiracanjuba)')
            console.log(typeof (leiteIntegralPiracanjuba))
            console.log('leiteIntegralSabugi')
            console.log(leiteIntegralSabugi)
            console.log('typeof (leiteIntegralSabugi)')
            console.log(typeof (leiteIntegralSabugi))
            // console.log('leiteIntegral')
            // console.log(leiteIntegral)
            // console.log('typeof (leiteIntegral)')
            // console.log(typeof (leiteIntegral))
            const cbcd = carneBovinaChaDentro.replace('R$ ', '')
            const cbcdReplaceVirgulaPonto = cbcd.replace(',', '.')
            const cbcdNumber = (Number(cbcdReplaceVirgulaPonto)*100)
            const cbcdInt = parseInt(cbcdNumber.toString())

            const cbcf = carneBovinaChaFora.replace('R$ ', '')
            const cbcfReplaceVirgulaPonto = cbcf.replace(',', '.')
            const cbcfNumber = (Number(cbcfReplaceVirgulaPonto)*100)
            const cbcfInt = parseInt(cbcfNumber.toString())

            const cbpcm = carneBovinaPatinhoCoxaoMole.replace('R$ ', '')
            const cbpcmReplaceVirgulaPonto = cbpcm.replace(',', '.')
            const cbpcmNumber = (Number(cbpcmReplaceVirgulaPonto)*100)
            const cbpcmInt = parseInt(cbpcmNumber.toString())

            const livd = leiteIntegralValeDourado.replace('R$ ', '')
            const livdReplaceVirgulaPonto = livd.replace(',', '.')
            const livdNumber = (Number(livdReplaceVirgulaPonto)*100)
            const livdInt = parseInt(livdNumber.toString())

            const lipj = leiteIntegralPiracanjuba.replace('R$ ', '')
            const lipjReplaceVirgulaPonto = lipj.replace(',', '.')
            const lipjNumber = (Number(lipjReplaceVirgulaPonto)*100)
            const lipjInt = parseInt(lipjNumber.toString())

            const lis = leiteIntegralSabugi.replace('R$ ', '')
            const lisReplaceVirgulaPonto = lis.replace(',', '.')
            const lisNumber = (Number(lisReplaceVirgulaPonto)*100)
            const lisInt = parseInt(lisNumber.toString())

            // const lis = leiteIntegralSabugi.replace('R$ ', '')
            // const lisReplaceVirgulaPonto = lis.replace(',', '.')
            // const lisNumber = (Number(lisReplaceVirgulaPonto)*100)
            // const lisInt = parseInt(lisNumber.toString())

            await api.post('/criarPesquisaCompleta', {
                mes_ano,
                nome_supermercado,
                carneBovinaChaDentro:cbcdInt,
                carneBovinaChaFora:cbcfInt,
                carneBovinaPatinhoCoxaoMole:cbpcmInt,
                // carneBovina,
                leiteIntegralValeDourado:livdInt,
                leiteIntegralPiracanjuba:lipjInt,
                leiteIntegralSabugi:lisInt,
                // leiteIntegral,
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
                <ScrollView>
        <VStack flex={1} bgColor="gray.900">
            <Header title="Criar nova pesquisa" showBackButton />
            <VStack mt={8} mx={5} alignItems="center">
                    <Logo width={200} height={200} />
                    <Heading fontFamily="heading" color="white" fontSize="xl" my={8} textAlign="center">
                        Qual o nome do supermercado que vai fazer a pesquisa
                    </Heading>

                    <Input
                        mb={2}
                        placeholder="Nome do Supermercado"
                        onChangeText={setTitle}
                        autoCapitalize="characters"
                        value={title}
                    />
                    <Heading fontFamily="heading" color="white" fontSize="sm" my={8} textAlign="center">
                    CARNE BOVINA CHÃ DE DENTRO
                    </Heading>
                    <View style={styles.container}>
                        <TextInputMask
                            style={styles.input}

                            type={'money'}
                            options={{
                                precision: 2,  // Define a precisão (duas casas decimais)
                                separator: ',', // Define o separador decimal
                                delimiter: '.',  // Define o separador de milhar
                                unit: 'R$ ',    // Define a unidade de moeda
                            }}
                            value={carneBovinaChaDentro}
                            onChangeText={setCarneBovinaChaDentro}
                            onFocus={handleFocus}
                            onBlur={handleBlur}


                        />{isPlaceholderVisible && (
                            <Text style={styles.placeholder}>CARNE BOVINA CHÃ DE DENTRO</Text>
                        )}
                    </View>

                    <View style={styles.container}>
                        <TextInputMask
                            style={styles.input}

                            type={'money'}
                            options={{
                                precision: 2,  // Define a precisão (duas casas decimais)
                                separator: ',', // Define o separador decimal
                                delimiter: '.',  // Define o separador de milhar
                                unit: 'R$ ',    // Define a unidade de moeda
                            }}
                            value={carneBovinaChaFora}
                            onChangeText={setCarneBovinaChaFora}
                            onFocus={handleFocus1}
                            onBlur={handleBlur1}


                        />{isPlaceholderVisible1 && (
                            <Text style={styles.placeholder}>CARNE BOVINA CHÃ DE FORA</Text>
                        )}
                    </View>
                    <View style={styles.container}>
                        <TextInputMask
                            style={styles.input}
                            type={'money'}
                            options={{
                                precision: 2,  // Define a precisão (duas casas decimais)
                                separator: ',', // Define o separador decimal
                                delimiter: '.',  // Define o separador de milhar
                                unit: 'R$ ',    // Define a unidade de moeda
                            }}
                            value={carneBovinaPatinhoCoxaoMole}
                            onChangeText={setCarneBovinaPatinhoCoxaoMole}
                            onFocus={handleFocus2}
                            onBlur={handleBlur2}


                        />{isPlaceholderVisible2 && (
                            <Text style={styles.placeholder}>CARNE BOVINA PATINHO OU COXÃO MOLE</Text>
                        )}
                    </View>

                    {/* <View style={styles.container}>
                    <TextInputMask
                        style={styles.input}
                        type={'money'}
                        options={{
                            precision: 2,  // Define a precisão (duas casas decimais)
                            separator: ',', // Define o separador decimal
                            delimiter: '.',  // Define o separador de milhar
                            unit: 'R$ ',    // Define a unidade de moeda
                        }}
                        value={carneBovina}
                        onChangeText={setCarneBovina}
                        onFocus={handleFocus}
                        onBlur={handleBlur}


                    />{isPlaceholderVisible && (
                        <Text style={styles.placeholder}>CARNE BOVINA CHÃ DE FORA</Text>
                    )}
                </View> */}

                    <View style={styles.container}>
                        <TextInputMask
                            style={styles.input}
                            type={'money'}
                            options={{
                                precision: 2,  // Define a precisão (duas casas decimais)
                                separator: ',', // Define o separador decimal
                                delimiter: '.',  // Define o separador de milhar
                                unit: 'R$ ',    // Define a unidade de moeda
                            }}
                            value={leiteIntegralValeDourado}
                            onChangeText={setLeiteIntegralValeDourado}
                            onFocus={handleFocus3}
                            onBlur={handleBlur3}


                        />{isPlaceholderVisible3 && (
                            <Text style={styles.placeholder}>LEITE INTEGRAL VALE DOURADO</Text>
                        )}
                    </View>
                    <View style={styles.container}>
                        <TextInputMask
                            style={styles.input}
                            type={'money'}
                            options={{
                                precision: 2,  // Define a precisão (duas casas decimais)
                                separator: ',', // Define o separador decimal
                                delimiter: '.',  // Define o separador de milhar
                                unit: 'R$ ',    // Define a unidade de moeda
                            }}
                            value={leiteIntegralPiracanjuba}
                            onChangeText={setLeiteIntegralPiracanjuba}
                            onFocus={handleFocus4}
                            onBlur={handleBlur4}


                        />{isPlaceholderVisible4 && (
                            <Text style={styles.placeholder}>LEITE INTEGRAL PIRACANJUBA</Text>
                        )}
                    </View>

                    <View style={styles.container}>
                        <TextInputMask
                            style={styles.input}
                            type={'money'}
                            options={{
                                precision: 2,  // Define a precisão (duas casas decimais)
                                separator: ',', // Define o separador decimal
                                delimiter: '.',  // Define o separador de milhar
                                unit: 'R$ ',    // Define a unidade de moeda
                            }}
                            value={leiteIntegralSabugi}
                            onChangeText={setLeiteIntegralSabugi}
                            onFocus={handleFocus5}
                            onBlur={handleBlur5}


                        />{isPlaceholderVisible5 && (
                            <Text style={styles.placeholder}>LEITE INTEGRAL SABUGI</Text>
                        )}
                    </View>
                    {/* <View style={styles.container}>
                        <TextInputMask
                            style={styles.input}
                            type={'money'}
                            options={{
                                precision: 2,  // Define a precisão (duas casas decimais)
                                separator: ',', // Define o separador decimal
                                delimiter: '.',  // Define o separador de milhar
                                unit: 'R$ ',    // Define a unidade de moeda
                            }}
                            placeholder="Nome do Supermerc"
                            value={leiteIntegral}
                            onChangeText={setLeiteIntegral}
                            onFocus={handleFocus}
                            onBlur={handleBlur}


                        />{isPlaceholderVisible && (
                            <Text style={styles.placeholder}>LEITE INTEGRAL SABUGI</Text>
                        )}
                    </View> */}
                <Button
                    title="Criar pesquisa"
                    onPress={handlePoolCreate}
                    isLoading={isLoading}
                    />
<Text></Text>
<Text></Text>
<Text></Text>
<Text></Text>
<Text></Text>
<Text></Text>
<Text></Text>
<Text></Text>
            </VStack>
        </VStack>
                    </ScrollView>
    );
} const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        backgroundColor: '#202024', // Adicione o estilo de background desejado
        height: 56,
        width: 350,
        borderColor: '#323238',
        fontSize: 16,
        color: '#ffffff',
        placeholderTextColor: '#8D8D99',
        padding: 10,
        borderRadius: 5,
        margin: 10,
    },
    placeholder: {
        position: 'absolute',
        top: 14, // Ajuste essa posição conforme necessário
        left: 16, // Ajuste essa posição conforme necessário
        color: '#8D8D99',
        fontSize: 16,
    },
});


