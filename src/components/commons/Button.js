import {
  View,
  Text,
  Image,
  // TextInput,
  StyleSheet,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
} from 'react-native';

export default function Button({ buttonText, callback }) {
  return (
    <TouchableOpacity style={styles.btn} onPress={callback()}>
      <Text style={styles.BtnText}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#2563eb',
    marginVertical: 20,
    paddingVertical: 15,
    borderRadius: 8,
    height: 45,
    paddingHorizontal: 20,
  },
  BtnText: {
    color: 'white',
    textAlign: 'center',
  },
});
