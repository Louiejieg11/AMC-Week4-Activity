import React from 'react';
import { View, Text, ScrollView, StyleSheet,TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <ScrollView>
        <View style={styles.container}>
        <Text style={styles.textBold}>Gonzales <Text style={styles.textItalic}>Louiejie</Text></Text>
        </View>
    </ScrollView>
  );
  
};
const styles = StyleSheet.create({
  container: {
      borderWidth: 1,
      padding: 20,
      backgroundColor: "#9DC08B",
  
  },
  textBold:{

      fontSize: 20,
      textAlign: "center",
      fontWeight: 'bold',
  },
  textItalic:{
      fontStyle: "italic"
  }
  
  })

export default App;