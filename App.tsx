
import * as SplashScreen from 'expo-splash-screen';
import { 
  useFonts, Jost_400Regular, Jost_600SemiBold
} from '@expo-google-fonts/jost';
import { UserIdentification } from "./src/pages/UserIdentification";


export default function App() {
  // Correção não esta funcionando o carregamento das fontes
  const [fontsLoaded, fontError] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  
  if(!fontsLoaded && !fontError){
    // SplashScreen.preventAutoHideAsync();
  }

  return (
    <UserIdentification/>
  );
}