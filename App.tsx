import {useCallback} from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { 
  useFonts, 
  Jost_400Regular, 
  Jost_600SemiBold
} from '@expo-google-fonts/jost';

import Routes from './src/routes';

export default function App() {
  // Correção não esta funcionando o carregamento das fontes
  const [fontsLoaded, fontError] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  const onLayoutRootView = useCallback(async () =>{
    if(fontsLoaded){
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if(!fontsLoaded){
    return null;
  
  }
 

  return (
   <Routes />
  )
}