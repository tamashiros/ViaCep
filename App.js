import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import viaCepLogo from './assets/viaCepLogo.jpg'
import { useEffect, useState } from 'react';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

export default function App() {
  const [cepInformado, setCepInformado] =useState("");
  const[logadouro, setLogadouro] = useState("")
  const[bairro,setBairro]= useState("")
  const[cidade,setCidade]= useState("")
  const [uf,setUf]= useState("")
  async function handleCepSeled(){
    try{
      const response = await api.get(`${cepInformado}/json`);
      setLogadouro(response.data.logadouro)
      setBairro(response.data.bairro)
      setCidade(response.data.localidade)
      setUf(response.data.uf)


    }catch(error){
      console.log(error);
    }
    
  
  }
  useEffect(()=>{
    handleCepSeled();
  },[cepInformado]);
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
      <Image
        style={{ position: 'absolute', top: 40, flex: 1 }}
        source={viaCepLogo}
      />
      <View
        style={styles.containerInfos}
      >
        <ScrollView showsVerticalScrollIndicator={false}>

          <Text>
            Nome:
          </Text>
          <TextInput
            placeholder='Informe o seu nome'
            style={styles.inputStyle} />

          <Text
            style={styles.textStyle}
          >
            Cep:
          </Text>
          <TextInput
            placeholder='Informe o seu cep'
            style={styles.inputStyle}
            keyboardType='numeric'
            onChangeText={(txt)=> setCepInformado(txt)}
          />

          <Text
            style={styles.textStyle}
          >
            Endereço:
          </Text>
          <TextInput
            placeholder='Informe o seu emdereço'
            style={styles.inputStyle} 
            value={logadouro}
            />

          <Text
            style={styles.textStyle}
          >
            Numero:
          </Text>
          <TextInput
            placeholder='Informe o seu numero'
            style={styles.inputStyle}
            keyboardType='numeric' />

          <Text
            style={styles.textStyle}
          >
            Bairro:
          </Text>
          <TextInput
            placeholder='Informe o seu bairro'
            style={styles.inputStyle}
            value ={bairro}

          />
          <Text style={styles.textStyle}
          >
            Cidade:
          </Text>
          <TextInput
            placeholder='Informe o sua cidade'
            style={styles.inputStyle}
            value= { cidade}
          />
          <Text style={styles.textStyle}
          >
            UF:
          </Text>
          <TextInput
            placeholder='Informe o sua UF'
            style={styles.inputStyle}
            value={uf}

          />
        </ScrollView>
      </View>

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerInfos: {
    flex: 1,
    borderWidth: 2,
    width: '90%',
    height: '60%',
    marginTop: 250

  },
  inputStyle: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 8,
    borderColor: '#417B35',
    marginTop: '10',
    marginBottom: 10

  },
  textStyle: {
    fontSize: 16,
    color: '#417b35'
  }

});
