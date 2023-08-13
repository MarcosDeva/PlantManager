
import { Welcome } from "./src/pages/Welcome";
import * as SplashScreen from 'expo-splash-screen';


export default function App() {
  
  const [ fontsLoaded, fontError ] = useFonts({
    Jost_400Regular, Jost_600SemiBold
  });

  if(!fontsLoaded && !fontError){
    SplashScreen.preventAutoHideAsync();
  }

  return (
    <Welcome/>
  );
}