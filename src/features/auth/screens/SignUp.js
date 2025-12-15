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
import { TextInput, Divider, Checkbox } from 'react-native-paper';
import Button from '../../../components/commons/Button';
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
  const navigation = useNavigation();

  function renderFullNameTextField() {
    return (
      <View style={styles.textInputView}>
        <Text>Full Name</Text>
        <TextInput
          onChangeText={() => {}}
          style={styles.textInput}
          placeholder={'Enter your full name'}
          underlineColor={'transparent'}
          placeholderTextColor={'grey'}
          activeUnderlineColor={'transparent'}
          left={<TextInput.Icon icon={'account'} size={20} color="grey" />}
        />
      </View>
    );
  }
  function renderPhoneNumberTextField() {
    return (
      <View style={styles.textInputView}>
        <Text>Phone Number</Text>
        <TextInput
          onChangeText={() => {}}
          style={styles.textInput}
          placeholder={'Enter your phone number'}
          underlineColor={'transparent'}
          placeholderTextColor={'grey'}
          activeUnderlineColor={'transparent'}
          left={<TextInput.Icon icon={'phone'} size={20} color="grey" />}
        />
      </View>
    );
  }

  function renderEmailTextField() {
    return (
      <View style={styles.textInputView}>
        <Text>Email</Text>
        <TextInput
          onChangeText={() => {}}
          style={styles.textInput}
          placeholder={'Enter your email'}
          underlineColor={'transparent'}
          placeholderTextColor={'grey'}
          activeUnderlineColor={'transparent'}
          left={<TextInput.Icon icon={'email'} size={20} color="grey" />}
        />
      </View>
    );
  }

  function renderPasswordTextField() {
    return (
      <View style={styles.textInputView}>
        <Text>Password</Text>
        <View>
          <TextInput
            onChangeText={() => {}}
            style={styles.textInput}
            placeholder={'Create a password'}
            placeholderTextColor={'grey'}
            secureTextEntry={true}
            underlineColor={'transparent'}
            right={<TextInput.Icon icon={'eye-off'} size={20} color={'grey'} />}
            activeUnderlineColor={'transparent'}
            left={<TextInput.Icon icon="lock" size={20} color={'grey'} />}
          />
        </View>
      </View>
    );
  }
  function renderConfirmPasswordTextField() {
    return (
      <View style={styles.textInputView}>
        <Text>Confirm Password</Text>
        <View>
          <TextInput
            onChangeText={() => {}}
            style={styles.textInput}
            placeholder={'Confirm your password'}
            placeholderTextColor={'grey'}
            secureTextEntry={true}
            underlineColor={'transparent'}
            right={<TextInput.Icon icon={'eye-off'} size={20} color={'grey'} />}
            activeUnderlineColor={'transparent'}
            left={<TextInput.Icon icon="lock" size={20} color={'grey'} />}
          />
        </View>
      </View>
    );
  }

  function renderTnC() {
    return (
      <View style={styles.checkBoxView}>
        <Checkbox
          status={'checked'}
          onPress={() => {}}
          color={'#2563eb'}
          style={styles.checkBoxStyle}
        />
        <Text style={styles.terms}>
          I agree to the Terms of Service and Privacy Policy
        </Text>
      </View>
    );
  }

  function renderHeader() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerMain}>ShopMart</Text>
        <Text style={styles.headerSubText}>Create your account</Text>
      </View>
    );
  }

  function renderSignInView() {
    return (
      <View style={styles.haveAccountView}>
        <Text style={styles.haveAccount}>Already have an account? </Text>
        <Pressable onPress={() => navigation.push('SignIn')}>
          <Text style={styles.haveAccountBtn}>Sign In</Text>
        </Pressable>
      </View>
    );
  }

  function renderCard() {
    return (
      <View style={styles.card}>
        <Text style={styles.headerSignin}>Sign Up</Text>
        {renderFullNameTextField()}
        {renderEmailTextField()}
        {renderPhoneNumberTextField()}
        {renderPasswordTextField()}
        {renderConfirmPasswordTextField()}
        {renderTnC()}
        <Button buttonText="Create Account" callback={() => {}} />
        {renderSignInView()}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderCard()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2563eb',
  },
  textInputView: {
    width: '100%',
    marginTop: 20,
  },
  headerSignin: {
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    paddingVertical: 30,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'grey',
    opacity: 0.8,
    borderBottomEndRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: 'white',
    height: 45,
    marginTop: 10,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  headerMain: {
    fontSize: 24,
    color: 'white',
  },
  headerSubText: {
    fontSize: 14,
    color: 'white',
    paddingTop: 10,
  },
  checkBoxView: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  checkBoxStyle: {
    transform: [{ scale: 1.0 }],
  },
  terms: {
    fontSize: 13,
  },
  haveAccountView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  haveAccount: {
    fontSize: 12,
    color: 'grey',
  },
  haveAccountBtn: {
    color: '#2563eb',
    fontWeight: '500',
  },
});
