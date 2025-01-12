import { View,Text, TouchableOpacity, StyleSheet } from "react-native"
import { Link } from "expo-router"

export default function Index(){
	return(
		<View style={styles.container}>
      <Link href="/sign-up" asChild >
        <TouchableOpacity style={styles.button}>
        	<Text style={styles.new}>Criar Conta</Text>
        </TouchableOpacity>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {flex:1, justifyContent:"center", alignItems:"center"},
    new: {fontSize: 16, fontWeight:"bold", color:"white"},
		button:{backgroundColor:"#000", paddingHorizontal: 32, paddingVertical: 10, borderRadius:10}
})