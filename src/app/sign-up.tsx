import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { router } from "expo-router"

export default function Signup(){
	function back(){
		router.back()
	}

	return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={back}>
        <Text style={styles.back}>Voltar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {flex:1, justifyContent:"center", alignItems:"center"},
  back: {fontSize: 16, fontWeight:"bold", color:"white"},
	button:{backgroundColor:"#000", paddingHorizontal: 32, paddingVertical: 10, borderRadius:10}
})