import { View, Text } from "react-native";
import { Welcome } from "./src/pages/Welcome";
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';

export default function App() {
  
  let [ fontsLoaded, fontError ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  // if(!fontsLoaded && !fontError){
  //   return null;
  // }
  if(fontsLoaded)
    return(
      <View style={{ flex:1, justifyContent:'center', alignItems: 'center'}}>
        <Text>Aguenta esta carregando</Text>
      </View>
    );


  return (
    <Welcome/>
  );
}