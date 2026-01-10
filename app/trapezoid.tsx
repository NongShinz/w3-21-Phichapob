import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
export default function trapezoid(){
    // พท.สี่เหลี่ยม = กว้าง * ยาว
    // output = input * input
    //     50 = 5 * 10
    const [size, setSize] = useState(0) // width = 20, setWidth(20)
    const [front, setFront] = useState(0)
    const [high, setHigh] = useState(0)
    const [area, setArea] = useState(0)

    const router = useRouter()

    function calSquare(){
        
        let result = (size + front) /2 * high;
        setArea(result)
    }

    return(
        <View style={styles.container}>
            <Text style={styles.mainTitle}>คำนวณพื้นที่สี่เหลี่ยมคางหมู</Text>
            {/* <Button title="กลับหน้าแรก" /> */}

            <Text>ขนาด {size} ซม.  พื้นที่ผิว {front} พื้นที่สี่เหลี่ยม = {area} ตร.ซม.</Text>

            <TextInput
                style={styles.textInput} 
                placeholder="กรอกความกว้าง"
                value={size.toString()}
                onChangeText={(w) => setSize(Number(w))}
            />
                        
            <TextInput 
                value={front.toString()}
                onChangeText={(l) => setFront(Number(l))}
                style={styles.textInput}
                placeholder="กรอกความยาว"/>
            <TextInput 
                value={high.toString()}
                onChangeText={(z) => setHigh(Number(z))}
                style={styles.textInput}
                placeholder="กรอกความสูง"/>
            <Button title="คำนวณ" onPress={() => calSquare()}/>
            <Button title="ไปหน้า 1" onPress={() => router.navigate('/')}/>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
        gap: 20
    },
    mainTitle:{
        fontSize:20,
        fontWeight: "700"
    },
    textInput:{
        borderWidth: 1,
        width: "80%",
        borderColor: "green"
    }
})