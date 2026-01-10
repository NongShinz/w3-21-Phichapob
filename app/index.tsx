import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App(){

    const router = useRouter()

    return(
        <View style={styles.container}>
            <Text style={styles.mainTitle}>หน้าแรก</Text>
            <Button title="ไปหน้า 1" onPress={() => router.navigate('/square')}/>
            <Button title="ไปหน้า 2" onPress={() => router.navigate('/trapezoid')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"lightsalmon",
        justifyContent:"center",
        alignItems:"center",
        gap : 15
    },
    mainTitle:{
        fontSize:20,
        fontWeight: "700"
    }
})