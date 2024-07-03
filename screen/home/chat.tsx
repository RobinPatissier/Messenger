import { Text, Box, View } from "@gluestack-ui/themed";
import auth from '@react-native-firebase/auth';
import { TouchableOpacity, Button} from "react-native";



export default function Chat() {
    const disconnect=()=>{
        console.log("ppl")
        auth()
  .signOut()
  .then(() => console.log('User signed out!'));
    }
    return(
        <View>
        <Text>
            "coucou c'est le chat"
        </Text>
        <Button onPress={disconnect}title="Se deconnecter"/>
    </View>
    )
}