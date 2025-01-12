import { View,Text, TouchableOpacity, StyleSheet } from "react-native"
import {router} from 'expo-router'

export default function Index(){
	function signUp(){
		router.navigate('/sign-up')
	}

	return(
		<View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={signUp}>
        	<Text style={styles.new}>Criar Conta</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {flex:1, justifyContent:"center", alignItems:"center"},
    new: {fontSize: 16, fontWeight:"bold", color:"white"},
		button:{backgroundColor:"#000", paddingHorizontal: 32, paddingVertical: 10, borderRadius:10}
})