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
    const [feijaoCariocaUrbano, setFeijaoCariocaUrbano] = useState('');
    const [feijaoCariocaDuPrato, setFeijaoCariocaDuPrato] = useState('');
    const [feijaoCariocaCunhau, setFeijaoCariocaCunhau] = useState('');
    const [arrozParboilizadoChines, setArrozParboilizadoChines] = useState('');
    const [arrozParboilizadoFortelli, setArrozParboilizadoFortelli] = useState('');
    const [arrozParboilizadoUrbano, setArrozParboilizadoUrbano] = useState('');
    const [farinhaMandiocaQuentinha, setFarinhaMandiocaQuentinha] = useState('');
    const [farinhaMandiocaCurimatau, setFarinhaMandiocaCurimatau] = useState('');
    const [farinhaMandiocaDuPrato, setFarinhaMandiocaDuPrato] = useState('');
    const [pao, setPao] = useState('');
    const [tomate, setTomate] = useState('');
    const [cafePoSaoBraz, setCafePoSaoBraz] = useState('');
    const [cafePoSantaClara, setCafePoSantaClara] = useState('');
    const [cafePoNordestino, setCafePoNordestino] = useState('');
    const [acucarNectar, setAcucarNectar] = useState('');
    const [acucarPuroMel, setAcucarPuroMel] = useState('');
    const [bananaPrata, setBananaPrata] = useState('');
    const [bananaPacovan, setBananaPacovan] = useState('');
    const [oleoSojaSoya, setOleoSojaSoya] = useState('');
    const [oleoSojaPrimor, setOleoSojaPrimor] = useState('');
    const [manteigaSaborosa, setManteigaSaborosa] = useState('');
    const [manteigaJucurutu, setManteigaJucurutu] = useState('');
    const [manteigaTerra, setManteigaTerra] = useState('');
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
    const [isPlaceholderVisible8, setPlaceholderVisible8] = useState(true);
    const [isPlaceholderVisible9, setPlaceholderVisible9] = useState(true);
    const [isPlaceholderVisible10, setPlaceholderVisible10] = useState(true);
    const [isPlaceholderVisible11, setPlaceholderVisible11] = useState(true);
    const [isPlaceholderVisible12, setPlaceholderVisible12] = useState(true);
    const [isPlaceholderVisible13, setPlaceholderVisible13] = useState(true);
    const [isPlaceholderVisible14, setPlaceholderVisible14] = useState(true);
    const [isPlaceholderVisible15, setPlaceholderVisible15] = useState(true);
    const [isPlaceholderVisible16, setPlaceholderVisible16] = useState(true);
    const [isPlaceholderVisible17, setPlaceholderVisible17] = useState(true);
    const [isPlaceholderVisible18, setPlaceholderVisible18] = useState(true);
    const [isPlaceholderVisible19, setPlaceholderVisible19] = useState(true);
    const [isPlaceholderVisible20, setPlaceholderVisible20] = useState(true);
    const [isPlaceholderVisible21, setPlaceholderVisible21] = useState(true);
    const [isPlaceholderVisible22, setPlaceholderVisible22] = useState(true);
    const [isPlaceholderVisible23, setPlaceholderVisible23] = useState(true);
    const [isPlaceholderVisible24, setPlaceholderVisible24] = useState(true);
    const [isPlaceholderVisible25, setPlaceholderVisible25] = useState(true);
    const [isPlaceholderVisible26, setPlaceholderVisible26] = useState(true);
    const [isPlaceholderVisible27, setPlaceholderVisible27] = useState(true);
    const [isPlaceholderVisible28, setPlaceholderVisible28] = useState(true);

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

    const handleFocus6 = () => {
        setPlaceholderVisible6(false);
    };

    const handleFocus7 = () => {
        setPlaceholderVisible7(false);
    };

    const handleFocus8 = () => {
        setPlaceholderVisible8(false);
    };

    const handleFocus9 = () => {
        setPlaceholderVisible9(false);
    };


    const handleFocus10 = () => {
        setPlaceholderVisible10(false);
    };


    const handleFocus11 = () => {
        setPlaceholderVisible11(false);
    };


    const handleFocus12 = () => {
        setPlaceholderVisible12(false);
    };


    const handleFocus13 = () => {
        setPlaceholderVisible13(false);
    };


    const handleFocus14 = () => {
        setPlaceholderVisible14(false);
    };

    const handleFocus15 = () => {
        setPlaceholderVisible15(false);
    };

    const handleFocus16 = () => {
        setPlaceholderVisible16(false);
    };

    const handleFocus17 = () => {
        setPlaceholderVisible17(false);
    };

    const handleFocus18 = () => {
        setPlaceholderVisible18(false);
    };

    const handleFocus19 = () => {
        setPlaceholderVisible19(false);
    };


    const handleFocus20 = () => {
        setPlaceholderVisible20(false);
    };


    const handleFocus21 = () => {
        setPlaceholderVisible21(false);
    };


    const handleFocus22 = () => {
        setPlaceholderVisible22(false);
    };


    const handleFocus23 = () => {
        setPlaceholderVisible23(false);
    };


    const handleFocus24 = () => {
        setPlaceholderVisible24(false);
    };


    const handleFocus25 = () => {
        setPlaceholderVisible25(false);
    };


    const handleFocus26 = () => {
        setPlaceholderVisible26(false);
    };


    const handleFocus27 = () => {
        setPlaceholderVisible27(false);
    };

    const handleFocus28 = () => {
        setPlaceholderVisible28(false);
    };


    const handleBlur = () => {
        if (!carneBovinaChaDentro) {
            setPlaceholderVisible(true);
        }
    };

    const handleBlur1 = () => {
        if (!carneBovinaChaFora) {
            setPlaceholderVisible1(true);
        }
    }; const handleBlur2 = () => {
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

    const handleBlur6 = () => {
        if (!feijaoCariocaUrbano) {
            setPlaceholderVisible6(true);
        }
    };

    const handleBlur7 = () => {
        if (!feijaoCariocaDuPrato) {
            setPlaceholderVisible7(true);
        }
    };

    const handleBlur8 = () => {
        if (!feijaoCariocaCunhau) {
            setPlaceholderVisible8(true);
        }
    };
    const handleBlur9 = () => {
        if (!arrozParboilizadoChines) {
            setPlaceholderVisible9(true);
        }
    };
    const handleBlur10 = () => {
        if (!arrozParboilizadoFortelli) {
            setPlaceholderVisible10(true);
        }
    };
    const handleBlur11 = () => {
        if (!arrozParboilizadoUrbano) {
            setPlaceholderVisible11(true);
        }
    };
    const handleBlur12 = () => {
        if (!farinhaMandiocaQuentinha) {
            setPlaceholderVisible12(true);
        }
    };
    const handleBlur13 = () => {
        if (!farinhaMandiocaCurimatau) {
            setPlaceholderVisible13(true);
        }
    };
    const handleBlur14 = () => {
        if (!farinhaMandiocaDuPrato) {
            setPlaceholderVisible14(true);
        }
    };
    const handleBlur15 = () => {
        if (!pao) {
            setPlaceholderVisible15(true);
        }
    };

    const handleBlur16 = () => {
        if (!tomate) {
            setPlaceholderVisible16(true);
        }
    };

    const handleBlur17 = () => {
        if (!cafePoSaoBraz) {
            setPlaceholderVisible17(true);
        }
    };

    const handleBlur18 = () => {
        if (!cafePoSantaClara) {
            setPlaceholderVisible18(true);
        }
    };

    const handleBlur19 = () => {
        if (!cafePoNordestino) {
            setPlaceholderVisible19(true);
        }
    };


    const handleBlur20 = () => {
        if (!acucarNectar) {
            setPlaceholderVisible20(true);
        }
    };


    const handleBlur21 = () => {
        if (!acucarPuroMel) {
            setPlaceholderVisible21(true);
        }
    };

    const handleBlur22 = () => {
        if (!bananaPrata) {
            setPlaceholderVisible22(true);
        }
    };

    const handleBlur23 = () => {
        if (!bananaPacovan) {
            setPlaceholderVisible23(true);
        }
    };

    const handleBlur24 = () => {
        if (!oleoSojaSoya) {
            setPlaceholderVisible24(true);
        }
    };

    const handleBlur25 = () => {
        if (!oleoSojaPrimor) {
            setPlaceholderVisible25(true);
        }
    };

    const handleBlur26 = () => {
        if (!manteigaSaborosa) {
            setPlaceholderVisible26(true);
        }
    };

    const handleBlur27 = () => {
        if (!manteigaJucurutu) {
            setPlaceholderVisible27(true);
        }
    };

    const handleBlur28 = () => {
        if (!manteigaTerra) {
            setPlaceholderVisible28(true);
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

            const cbcd = carneBovinaChaDentro.replace('R$ ', '')
            const cbcdReplaceVirgulaPonto = cbcd.replace(',', '.')
            const cbcdNumber = Math.round(Number(cbcdReplaceVirgulaPonto) * 100)
            const cbcdInt = parseInt(cbcdNumber.toString())

            const cbcf = carneBovinaChaFora.replace('R$ ', '')
            const cbcfReplaceVirgulaPonto = cbcf.replace(',', '.')
            const cbcfNumber = Math.round(Number(cbcfReplaceVirgulaPonto) * 100)
            const cbcfInt = parseInt(cbcfNumber.toString())

            const cbpcm = carneBovinaPatinhoCoxaoMole.replace('R$ ', '')
            const cbpcmReplaceVirgulaPonto = cbpcm.replace(',', '.')
            const cbpcmNumber = Math.round(Number(cbpcmReplaceVirgulaPonto) * 100)
            const cbpcmInt = parseInt(cbpcmNumber.toString())

            const livd = leiteIntegralValeDourado.replace('R$ ', '')
            const livdReplaceVirgulaPonto = livd.replace(',', '.')
            const livdNumber = Math.round(Number(livdReplaceVirgulaPonto) * 100)
            const livdInt = parseInt(livdNumber.toString())

            const lipj = leiteIntegralPiracanjuba.replace('R$ ', '')
            const lipjReplaceVirgulaPonto = lipj.replace(',', '.')
            const lipjNumber = Math.round(Number(lipjReplaceVirgulaPonto) * 100)
            const lipjInt = parseInt(lipjNumber.toString())

            const lis = leiteIntegralSabugi.replace('R$ ', '')
            const lisReplaceVirgulaPonto = lis.replace(',', '.')
            const lisNumber = Math.round(Number(lisReplaceVirgulaPonto) * 100)
            const lisInt = parseInt(lisNumber.toString())

            const fcu = feijaoCariocaUrbano.replace('R$ ', '')
            const fcuReplaceVirgulaPonto = fcu.replace(',', '.')
            const fcuNumber = Math.round(Number(fcuReplaceVirgulaPonto) * 100)
            const fcuInt = parseInt(fcuNumber.toString())

            const fcdp = feijaoCariocaDuPrato.replace('R$ ', '')
            const fcdpReplaceVirgulaPonto = fcdp.replace(',', '.')
            const fcdpNumber = Math.round(Number(fcdpReplaceVirgulaPonto) * 100)
            const fcdpInt = parseInt(fcdpNumber.toString())

            const fcc = feijaoCariocaCunhau.replace('R$ ', '')
            const fccReplaceVirgulaPonto = fcc.replace(',', '.')
            const fccNumber = Math.round(Number(fccReplaceVirgulaPonto) * 100)
            const fccInt = parseInt(fccNumber.toString())

            const apc = arrozParboilizadoChines.replace('R$ ', '')
            const apcReplaceVirgulaPonto = apc.replace(',', '.')
            const apcNumber = Math.round(Number(apcReplaceVirgulaPonto) * 100)
            const apcInt = parseInt(apcNumber.toString())

            const apf = arrozParboilizadoFortelli.replace('R$ ', '')
            const apfReplaceVirgulaPonto = apf.replace(',', '.')
            const apfNumber = Math.round(Number(apfReplaceVirgulaPonto) * 100)
            const apfInt = parseInt(apfNumber.toString())

            const apu = arrozParboilizadoUrbano.replace('R$ ', '')
            const apuReplaceVirgulaPonto = apu.replace(',', '.')
            const apuNumber = Math.round(Number(apuReplaceVirgulaPonto) * 100)
            const apuInt = parseInt(apuNumber.toString())

            const fmq = farinhaMandiocaQuentinha.replace('R$ ', '')
            const fmqReplaceVirgulaPonto = fmq.replace(',', '.')
            const fmqNumber = Math.round(Number(fmqReplaceVirgulaPonto) * 100)
            const fmqInt = parseInt(fmqNumber.toString())

            const fmc = farinhaMandiocaCurimatau.replace('R$ ', '')
            const fmcReplaceVirgulaPonto = fmc.replace(',', '.')
            const fmcNumber = Math.round(Number(fmcReplaceVirgulaPonto) * 100)
            const fmcInt = parseInt(fmcNumber.toString())

            const fmdp = farinhaMandiocaDuPrato.replace('R$ ', '')
            const fmdpReplaceVirgulaPonto = fmdp.replace(',', '.')
            const fmdpNumber = Math.round(Number(fmdpReplaceVirgulaPonto) * 100)
            const fmdpInt = parseInt(fmdpNumber.toString())

            const p = pao.replace('R$ ', '')
            const pReplaceVirgulaPonto = p.replace(',', '.')
            const pNumber = Math.round(Number(pReplaceVirgulaPonto) * 100)
            const pInt = parseInt(pNumber.toString())

            const t = tomate.replace('R$ ', '')
            const tReplaceVirgulaPonto = t.replace(',', '.')
            const tNumber = Math.round(Number(tReplaceVirgulaPonto) * 100)
            const tInt = parseInt(tNumber.toString())


            const cpsb = cafePoSaoBraz.replace('R$ ', '')
            const cpsbReplaceVirgulaPonto = cpsb.replace(',', '.')
            const cpsbNumber = Math.round(Number(cpsbReplaceVirgulaPonto) * 100)
            const cpsbInt = parseInt(cpsbNumber.toString())

            const cpsc = cafePoSantaClara.replace('R$ ', '')
            const cpscReplaceVirgulaPonto = cpsc.replace(',', '.')
            const cpscNumber = Math.round(Number(cpscReplaceVirgulaPonto) * 100)
            const cpscInt = parseInt(cpscNumber.toString())

            const cpn = cafePoNordestino.replace('R$ ', '')
            const cpnReplaceVirgulaPonto = cpn.replace(',', '.')
            const cpnNumber = Math.round(Number(cpnReplaceVirgulaPonto) * 100)
            const cpnInt = parseInt(cpnNumber.toString())

            const an = acucarNectar.replace('R$ ', '')
            const anReplaceVirgulaPonto = an.replace(',', '.')
            const anNumber = Math.round(Number(anReplaceVirgulaPonto) * 100)
            const anInt = parseInt(anNumber.toString())

            const apm = acucarPuroMel.replace('R$ ', '')
            const apmReplaceVirgulaPonto = apm.replace(',', '.')
            const apmNumber = Math.round(Number(apmReplaceVirgulaPonto) * 100)
            const apmInt = parseInt(apmNumber.toString())

            const bp = bananaPrata.replace('R$ ', '')
            const bpReplaceVirgulaPonto = bp.replace(',', '.')
            const bpNumber = Math.round(Number(bpReplaceVirgulaPonto) * 100)
            const bpInt = parseInt(bpNumber.toString())

            const bpac = bananaPacovan.replace('R$ ', '')
            const bpacReplaceVirgulaPonto = bpac.replace(',', '.')
            const bpacNumber = Math.round(Number(bpacReplaceVirgulaPonto) * 100)
            const bpacInt = parseInt(bpacNumber.toString())

            const oss = oleoSojaSoya.replace('R$ ', '')
            const ossReplaceVirgulaPonto = oss.replace(',', '.')
            const ossNumber = Math.round(Number(ossReplaceVirgulaPonto) * 100)
            const ossInt = parseInt(ossNumber.toString())

            const osp = oleoSojaPrimor.replace('R$ ', '')
            const ospReplaceVirgulaPonto = osp.replace(',', '.')
            const ospNumber = Math.round(Number(ospReplaceVirgulaPonto) * 100)
            const ospInt = parseInt(ospNumber.toString())

            const ms = manteigaSaborosa.replace('R$ ', '')
            const msReplaceVirgulaPonto = ms.replace(',', '.')
            const msNumber = Math.round(Number(msReplaceVirgulaPonto) * 100)
            const msInt = parseInt(msNumber.toString())

            const mj = manteigaJucurutu.replace('R$ ', '')
            const mjReplaceVirgulaPonto = mj.replace(',', '.')
            const mjNumber = Math.round(Number(mjReplaceVirgulaPonto) * 100)
            const mjInt = parseInt(mjNumber.toString())

            const mt = manteigaTerra.replace('R$ ', '')
            const mtReplaceVirgulaPonto = mt.replace(',', '.')
            const mtNumber = Math.round(Number(mtReplaceVirgulaPonto) * 100);
            const mtInt = parseInt(mtNumber.toString())

            await api.post('/criarPesquisaCompleta', {
                mes_ano,
                nome_supermercado,
                carneBovinaChaDentro: cbcdInt,
                carneBovinaChaFora: cbcfInt,
                carneBovinaPatinhoCoxaoMole: cbpcmInt,
                leiteIntegralValeDourado: livdInt,
                leiteIntegralPiracanjuba: lipjInt,
                leiteIntegralSabugi: lisInt,
                feijaoCariocaUrbano: fcuInt,
                feijaoCariocaDuPrato: fcdpInt,
                feijaoCariocaCunhau: fccInt,
                arrozParboilizadoChines: apcInt,
                arrozParboilizadoFortelli: apfInt,
                arrozParboilizadoUrbano: apuInt,
                farinhaMandiocaQuentinha: fmqInt,
                farinhaMandiocaCurimatau: fmcInt,
                farinhaMandiocaDuPrato: fmdpInt,
                pao: pInt,
                tomate: tInt,
                cafePoSaoBraz: cpsbInt,
                cafePoSantaClara: cpscInt,
                cafePoNordestino: cpnInt,
                acucarNectar: anInt,
                acucarPuroMel: apmInt,
                bananaPrata: bpInt,
                bananaPacovan: bpacInt,
                oleoSojaSoya: ossInt,
                oleoSojaPrimor: ospInt,
                manteigaSaborosa: msInt,
                manteigaJucurutu: mjInt,
                manteigaTerra: mtInt,
            });
            toast.show({
                title: "Supermercado editado com sucesso",
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
                    <Heading fontFamily="heading" color="white" fontSize="xl" my={5} textAlign="center">
                        Qual o nome do supermercado que vai fazer a pesquisa
                    </Heading>

                    <Input
                        mb={2}
                        placeholder="Nome do Supermercado"
                        onChangeText={setTitle}
                        autoCapitalize="characters"
                        value={title}
                    />
                    <Heading fontFamily="heading" color="white" fontSize="sm" my={3} textAlign="center">
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
                    <Heading fontFamily="heading" color="white" fontSize="sm" my={3} textAlign="center">
                        CARNE BOVINA CHÃ DE FORA
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
                            value={carneBovinaChaFora}
                            onChangeText={setCarneBovinaChaFora}
                            onFocus={handleFocus1}
                            onBlur={handleBlur1}


                        />{isPlaceholderVisible1 && (
                            <Text style={styles.placeholder}>CARNE BOVINA CHÃ DE FORA</Text>
                        )}
                    </View>
                    <Heading fontFamily="heading" color="white" fontSize="sm" my={3} textAlign="center">
                        CARNE BOVINA PATINHO OU COXÃO MOLE
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
                            value={carneBovinaPatinhoCoxaoMole}
                            onChangeText={setCarneBovinaPatinhoCoxaoMole}
                            onFocus={handleFocus2}
                            onBlur={handleBlur2}


                        />{isPlaceholderVisible2 && (
                            <Text style={styles.placeholder}>CARNE BOVINA PATINHO OU COXÃO MOLE</Text>
                        )}
                    </View>

                    <Heading fontFamily="heading" color="white" fontSize="sm" my={3} textAlign="center">
                        LEITE INTEGRAL VALE DOURADO
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
                            value={leiteIntegralValeDourado}
                            onChangeText={setLeiteIntegralValeDourado}
                            onFocus={handleFocus3}
                            onBlur={handleBlur3}


                        />{isPlaceholderVisible3 && (
                            <Text style={styles.placeholder}>LEITE INTEGRAL VALE DOURADO</Text>
                        )}
                    </View>
                    <Heading fontFamily="heading" color="white" fontSize="sm" my={3} textAlign="center">
                        LEITE INTEGRAL PIRACANJUBA
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
                            value={leiteIntegralPiracanjuba}
                            onChangeText={setLeiteIntegralPiracanjuba}
                            onFocus={handleFocus4}
                            onBlur={handleBlur4}


                        />{isPlaceholderVisible4 && (
                            <Text style={styles.placeholder}>LEITE INTEGRAL PIRACANJUBA</Text>
                        )}
                    </View>

                    <Heading fontFamily="heading" color="white" fontSize="sm" my={3} textAlign="center">
                        LEITE INTEGRAL SABUGI
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
                            value={leiteIntegralSabugi}
                            onChangeText={setLeiteIntegralSabugi}
                            onFocus={handleFocus5}
                            onBlur={handleBlur5}


                        />{isPlaceholderVisible5 && (
                            <Text style={styles.placeholder}>LEITE INTEGRAL SABUGI</Text>
                        )}
                    </View>

                    <Heading fontFamily="heading" color="white" fontSize="sm" my={3} textAlign="center">
                        FEIJÃO CARIOCA URBANO
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
                            value={feijaoCariocaUrbano}
                            onChangeText={setFeijaoCariocaUrbano}
                            onFocus={handleFocus6}
                            onBlur={handleBlur6}


                        />{isPlaceholderVisible6 && (
                            <Text style={styles.placeholder}>FEIJÃO CARIOCA URBANO</Text>
                        )}
                    </View>

                    <Heading fontFamily="heading" color="white" fontSize="sm" my={3} textAlign="center">
                        FEIJÃO CARIOCA DU PRATO
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
                            value={feijaoCariocaDuPrato}
                            onChangeText={setFeijaoCariocaDuPrato}
                            onFocus={handleFocus7}
                            onBlur={handleBlur7}


                        />{isPlaceholderVisible7 && (
                            <Text style={styles.placeholder}>FEIJÃO CARIOCA DU PRATO</Text>
                        )}
                    </View>

                    <Heading fontFamily="heading" color="white" fontSize="sm" my={3} textAlign="center">
                        FEIJÃO CARIOCA CUNHAU
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
                            value={feijaoCariocaCunhau}
                            onChangeText={setFeijaoCariocaCunhau}
                            onFocus={handleFocus8}
                            onBlur={handleBlur8}


                        />{isPlaceholderVisible8 && (
                            <Text style={styles.placeholder}>FEIJÃO CARIOCA CUNHAU</Text>
                        )}
                    </View>

                    <Heading fontFamily="heading" color="white" fontSize="sm" my={3} textAlign="center">
                        ARROZ PARBOILIZADO CHINÊS
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
                            value={arrozParboilizadoChines}
                            onChangeText={setArrozParboilizadoChines}
                            onFocus={handleFocus9}
                            onBlur={handleBlur9}


                        />{isPlaceholderVisible9 && (
                            <Text style={styles.placeholder}>ARROZ PARBOILIZADO CHINÊS</Text>
                        )}
                    </View>

                    <Heading fontFamily="heading" color="white" fontSize="sm" my={3} textAlign="center">
                        ARROZ PARBOILIZADO FORTELLI
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
                            value={arrozParboilizadoFortelli}
                            onChangeText={setArrozParboilizadoFortelli}
                            onFocus={handleFocus10}
                            onBlur={handleBlur10}


                        />{isPlaceholderVisible10 && (
                            <Text style={styles.placeholder}>ARROZ PARBOILIZADO FORTELLI</Text>
                        )}
                    </View>

                    <Heading fontFamily="heading" color="white" fontSize="sm" my={3} textAlign="center">
                        ARROZ PARBOILIZADO URBANO
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
                            value={arrozParboilizadoUrbano}
                            onChangeText={setArrozParboilizadoUrbano}
                            onFocus={handleFocus11}
                            onBlur={handleBlur11}


                        />{isPlaceholderVisible11 && (
                            <Text style={styles.placeholder}>ARROZ PARBOILIZADO URBANO</Text>
                        )}
                    </View>

                    <Heading fontFamily="heading" color="white" fontSize="sm" my={3} textAlign="center">
                        FARINHA DE MANDIOCA QUENTINHA
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
                            value={farinhaMandiocaQuentinha}
                            onChangeText={setFarinhaMandiocaQuentinha}
                            onFocus={handleFocus12}
                            onBlur={handleBlur12}


                        />{isPlaceholderVisible12 && (
                            <Text style={styles.placeholder}>FARINHA DE MANDIOCA QUENTINHA</Text>
                        )}
                    </View>

                    <Heading fontFamily="heading" color="white" fontSize="sm" my={3} textAlign="center">
                        FARINHA DE MANDIOCA CURIMATAU
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
                            value={farinhaMandiocaCurimatau}
                            onChangeText={setFarinhaMandiocaCurimatau}
                            onFocus={handleFocus13}
                            onBlur={handleBlur13}


                        />{isPlaceholderVisible13 && (
                            <Text style={styles.placeholder}>FARINHA DE MANDIOCA CURIMATAU</Text>
                        )}
                    </View>

                    <Heading fontFamily="heading" color="white" fontSize="sm" my={3} textAlign="center">
                        FARINHA DE MANDIOCA DU PRATO
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
                            value={farinhaMandiocaDuPrato}
                            onChangeText={setFarinhaMandiocaDuPrato}
                            onFocus={handleFocus14}
                            onBlur={handleBlur14}


                        />{isPlaceholderVisible14 && (
                            <Text style={styles.placeholder}>FARINHA DE MANDIOCA DU PRATO</Text>
                        )}
                    </View>

                    <Heading fontFamily="heading" color="white" fontSize="sm" my={3} textAlign="center">
                        PÃO
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
                            value={pao}
                            onChangeText={setPao}
                            onFocus={handleFocus15}
                            onBlur={handleBlur15}


                        />{isPlaceholderVisible15 && (
                            <Text style={styles.placeholder}>PÃO</Text>
                        )}
                    </View>
                    <Heading fontFamily="heading" color="white" fontSize="sm" my={3} textAlign="center">
                        TOMATE
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
                            value={tomate}
                            onChangeText={setTomate}
                            onFocus={handleFocus16}
                            onBlur={handleBlur16}


                        />{isPlaceholderVisible16 && (
                            <Text style={styles.placeholder}>TOMATE</Text>
                        )}
                    </View>

                    <Heading fontFamily="heading" color="white" fontSize="sm" my={3} textAlign="center">
                        CAFÉ EM PÓ SÃO BRAZ
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
                            value={cafePoSaoBraz}
                            onChangeText={setCafePoSaoBraz}
                            onFocus={handleFocus17}
                            onBlur={handleBlur17}


                        />{isPlaceholderVisible17 && (
                            <Text style={styles.placeholder}>CAFÉ EM PÓ SÃO BRAZ</Text>
                        )}
                    </View>

                    <Heading fontFamily="heading" color="white" fontSize="sm" my={3} textAlign="center">
                        CAFÉ EM PÓ SANTA CLARA
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
                            value={cafePoSantaClara}
                            onChangeText={setCafePoSantaClara}
                            onFocus={handleFocus18}
                            onBlur={handleBlur18}


                        />{isPlaceholderVisible18 && (
                            <Text style={styles.placeholder}>CAFÉ EM PÓ SANTA CLARA</Text>
                        )}
                    </View>

                    <Heading fontFamily="heading" color="white" fontSize="sm" my={3} textAlign="center">
                        CAFÉ EM PÓ NORDESTINO
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
                            value={cafePoNordestino}
                            onChangeText={setCafePoNordestino}
                            onFocus={handleFocus19}
                            onBlur={handleBlur19}


                        />{isPlaceholderVisible19 && (
                            <Text style={styles.placeholder}>CAFÉ EM PÓ NORDESTINO</Text>
                        )}
                    </View>

                    <Heading fontFamily="heading" color="white" fontSize="sm" my={3} textAlign="center">
                        AÇÚCAR NÉCTAR
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
                            value={acucarNectar}
                            onChangeText={setAcucarNectar}
                            onFocus={handleFocus20}
                            onBlur={handleBlur20}


                        />{isPlaceholderVisible20 && (
                            <Text style={styles.placeholder}>AÇÚCAR NÉCTAR</Text>
                        )}
                    </View>

                    <Heading fontFamily="heading" color="white" fontSize="sm" my={3} textAlign="center">
                        AÇÚCAR PURO MEL
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
                            value={acucarPuroMel}
                            onChangeText={setAcucarPuroMel}
                            onFocus={handleFocus21}
                            onBlur={handleBlur21}


                        />{isPlaceholderVisible21 && (
                            <Text style={styles.placeholder}>AÇÚCAR PURO MEL</Text>
                        )}
                    </View>

                    <Heading fontFamily="heading" color="white" fontSize="sm" my={3} textAlign="center">
                        BANANA PRATA
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
                            value={bananaPrata}
                            onChangeText={setBananaPrata}
                            onFocus={handleFocus22}
                            onBlur={handleBlur22}


                        />{isPlaceholderVisible22 && (
                            <Text style={styles.placeholder}>BANANA PRATA</Text>
                        )}
                    </View>


                    <Heading fontFamily="heading" color="white" fontSize="sm" my={3} textAlign="center">
                        BANANA PACOVAN
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
                            value={bananaPacovan}
                            onChangeText={setBananaPacovan}
                            onFocus={handleFocus23}
                            onBlur={handleBlur23}


                        />{isPlaceholderVisible23 && (
                            <Text style={styles.placeholder}>BANANA PACOVAN</Text>
                        )}
                    </View>

                    <Heading fontFamily="heading" color="white" fontSize="sm" my={3} textAlign="center">
                        ÓLEO DE SOJA SOYA
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
                            value={oleoSojaSoya}
                            onChangeText={setOleoSojaSoya}
                            onFocus={handleFocus24}
                            onBlur={handleBlur24}


                        />{isPlaceholderVisible24 && (
                            <Text style={styles.placeholder}>ÓLEO DE SOJA SOYA</Text>
                        )}
                    </View>

                    <Heading fontFamily="heading" color="white" fontSize="sm" my={3} textAlign="center">
                        ÓLEO DE SOJA PRIMOR
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
                            value={oleoSojaPrimor}
                            onChangeText={setOleoSojaPrimor}
                            onFocus={handleFocus25}
                            onBlur={handleBlur25}


                        />{isPlaceholderVisible25 && (
                            <Text style={styles.placeholder}>ÓLEO DE SOJA PRIMOR</Text>
                        )}
                    </View>

                    <Heading fontFamily="heading" color="white" fontSize="sm" my={3} textAlign="center">
                        MANTEIGA SABOROSA
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
                            value={manteigaSaborosa}
                            onChangeText={setManteigaSaborosa}
                            onFocus={handleFocus26}
                            onBlur={handleBlur26}


                        />{isPlaceholderVisible26 && (
                            <Text style={styles.placeholder}>MANTEIGA SABOROSA</Text>
                        )}
                    </View>

                    <Heading fontFamily="heading" color="white" fontSize="sm" my={3} textAlign="center">
                        MANTEIGA JUCURUTU
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
                            value={manteigaJucurutu}
                            onChangeText={setManteigaJucurutu}
                            onFocus={handleFocus27}
                            onBlur={handleBlur27}


                        />{isPlaceholderVisible27 && (
                            <Text style={styles.placeholder}>MANTEIGA JUCURUTU</Text>
                        )}
                    </View>

                    <Heading fontFamily="heading" color="white" fontSize="sm" my={3} textAlign="center">
                        MANTEIGA DA TERRA
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
                            value={manteigaTerra}
                            onChangeText={setManteigaTerra}
                            onFocus={handleFocus28}
                            onBlur={handleBlur28}


                        />{isPlaceholderVisible28 && (
                            <Text style={styles.placeholder}>MANTEIGA DA TERRA</Text>
                        )}
                    </View>
                    <Button
                        my={3}
                        title="CRIAR PESQUISA"
                        onPress={handlePoolCreate}
                        isLoading={isLoading}
                    />
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


