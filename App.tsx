import {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch, KeyboardAvoidingView } from 'react-native';
import { ThemeContext } from './src/context/ThemeContext';
import Boton from './src/components/Boton'
import Teclado from './src/components/Teclado'

export default function App() {
  const [theme, setTheme] = useState('claro');
  return (
    <ThemeContext.Provider value={theme}>
       <View style={theme === 'claro' ? styles.container : [styles.container, {backgroundColor: 'black'}]}>
      <KeyboardAvoidingView style={styles.container} behavior='position'>

        <Switch
          value={theme === 'claro'}
          onValueChange={() => setTheme(theme === 'claro' ? 'oscuro' : 'claro')}
          style={{alignSelf: 'center', marginBottom:100}}
        />
        <Teclado/>

      </KeyboardAvoidingView>
      </View>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
