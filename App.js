import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", alignSelf: "center", alignItems: "center", }}>
        <TextInput
          style={{ height: 50, width: "90%", borderWidth: 1, borderColor: "grey", marginBottom: 40, borderRadius: 10, paddingLeft: 20, fontSize: 16, color: "#000" }}
          value={email}
          onChangeText={(e) => setEmail(e)}
          placeholder='Enter Email'
        />
        <TextInput
          style={{ height: 50, width: "90%", borderWidth: 1, borderColor: "grey", marginBottom: 40, borderRadius: 10, paddingLeft: 20, fontSize: 16, color: "#000" }}
          value={password}
          onChangeText={(e) => setPassword(e)}
          placeholder='Enter Password'
        />
        <TouchableOpacity activeOpacity={.9} style={{ height: 60, width: "90%", backgroundColor: "green", borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: "#FFF", fontSize: 16, fontWeight: "bold" }}>Submit</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity activeOpacity={.9} style={{ marginTop: "20%", height: 60, width: "90%", backgroundColor: "green", borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: "#FFF", fontSize: 16, fontWeight: "bold" }}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={.9} style={{ marginTop: "20%", height: 60, width: "90%", backgroundColor: "green", borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: "#FFF", fontSize: 16, fontWeight: "bold" }}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={.9} style={{ marginTop: "20%", height: 60, width: "90%", backgroundColor: "green", borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: "#FFF", fontSize: 16, fontWeight: "bold" }}>Submit</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // marginTop: Dimensions.get("window").height / 4,
    marginTop: "15%",
    alignSelf: "center",
    width: "96%"
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  subContainer: {
  }
});
