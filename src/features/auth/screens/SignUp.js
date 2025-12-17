import {
  View,
  Text,
  Image,
  // TextInput,
  StyleSheet,
  Pressable,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { TextInput, Divider, Checkbox, Snackbar } from 'react-native-paper';
import Button from '../../../components/commons/Button';
import { emailRules, passwordRules, phoneRules, fullNameRules } from '../../../utils/validators/rules';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { control, handleSubmit, watch, formState: { errors }, } = useForm({ defaultValues: { fullName: '', email: '', phoneNumber: '', password: '', confirmPassword: '', }, mode: 'onSubmit', });
  const password = watch('password');
  const navigation = useNavigation();
  const [SnackbarText, setSnackbarText] = useState('');
  const [agreeTnC, setAgreeTnC] = useState(false);

  function renderFullNameTextField() {
    return (
      <View style={styles.textInputView}>
        <Text>Full Name</Text>
        <Controller
          control={control}
          name="fullName"
          rules={fullNameRules}
          render={({ field: { onChange, value } }) => (
            <TextInput
              onChangeText={onChange}
              style={styles.textInput}
              value={value}
              placeholder={'Enter your full name'}
              underlineColor={'transparent'}
              placeholderTextColor={'grey'}
              activeUnderlineColor={'transparent'}
              left={<TextInput.Icon icon={'account'} size={20} color="grey" />}
            />)}>

        </Controller>
        {errors.fullName && renderErrorMsg(errors.fullName.message)}
      </View>
    );
  }
  function renderPhoneNumberTextField() {
    return (
      <View style={styles.textInputView}>
        <Text>Phone Number</Text>
        <Controller
          control={control}
          name="phoneNumber"
          rules={phoneRules}
          render={({ field: { onChange, value } }) => (
            <TextInput
              onChangeText={onChange}
              style={styles.textInput}
              value={value}
              keyboardType='phone-pad'
              placeholder={'Enter your phone number'}
              underlineColor={'transparent'}
              placeholderTextColor={'grey'}
              activeUnderlineColor={'transparent'}
              left={<TextInput.Icon icon={'phone'} size={20} color="grey" />}
            />
          )}>
        </Controller>
        {errors.phoneNumber && renderErrorMsg(errors.phoneNumber.message)}
      </View >
    );
  }

  function renderEmailTextField() {
    return (
      <View style={styles.textInputView}>
        <Text>Email</Text>
        <Controller
          control={control}
          name="email"
          rules={emailRules}
          render={({ field: { onChange, value } }) => (<TextInput
            onChangeText={onChange}
            style={styles.textInput}
            value={value}
            keyboardType='email-address'
            placeholder={'Enter your email'}
            underlineColor={'transparent'}
            placeholderTextColor={'grey'}
            activeUnderlineColor={'transparent'}
            left={<TextInput.Icon icon={'email'} size={20} color="grey" />}
          />)}
        />
        {errors.email && renderErrorMsg(errors.email.message)}
      </View>
    );
  }

  function renderPasswordTextField() {
    return (
      <View style={styles.textInputView}>
        <Text>Password</Text>
        <View>
          <Controller
            control={control}
            rules={passwordRules}
            name='password'
            render={({ field: { onChange, value } }) => (<TextInput
              onChangeText={onChange}
              value={value}
              style={styles.textInput}
              placeholder={'Create a password'}
              placeholderTextColor={'grey'}
              secureTextEntry={showPassword}
              underlineColor={'transparent'}
              right={<TextInput.Icon icon={showPassword ? 'eye-off' : 'eye'} size={20} color={'grey'} onPress={() => setShowPassword(prev => !prev)} />}
              activeUnderlineColor={'transparent'}
              left={<TextInput.Icon icon="lock" size={20} color={'grey'} />}
            />)}>
          </Controller>
          {errors.password && renderErrorMsg(errors.password.message)}
        </View>
      </View>
    );
  }
  function renderConfirmPasswordTextField() {
    return (
      <View style={styles.textInputView}>
        <Text>Confirm Password</Text>
        <View>
          <Controller
            control={control}
            name="confirmPassword"
            rules={{
              validate: value =>
                value === password || 'The passwords do not match'
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                onChangeText={onChange}
                style={styles.textInput}
                value={value}
                placeholder={'Confirm your password'}
                placeholderTextColor={'grey'}
                secureTextEntry={showConfirmPassword}
                underlineColor={'transparent'}
                right={<TextInput.Icon icon={showConfirmPassword ? 'eye-off' : 'eye'} size={20} color={'grey'} onPress={() => setShowConfirmPassword(prev => !prev)} />}
                activeUnderlineColor={'transparent'}
                left={<TextInput.Icon icon="lock" size={20} color={'grey'} />}
              />)}></Controller>
          {errors.confirmPassword && renderErrorMsg(errors.confirmPassword.message)}
        </View>
      </View>
    );
  }

  function renderErrorMsg(message) {
    return (
      <Text style={styles.errorMsg}>{message}</Text>)
  }

  function renderTnC() {
    return (
      <View style={styles.checkBoxView}>
        <Checkbox
          status={agreeTnC ? 'checked' : 'unchecked'}
          onPress={() => setAgreeTnC(!agreeTnC)}
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
        <Pressable onPress={() => navigateToSignInPage()}>
          <Text style={styles.haveAccountBtn}>Sign In</Text>
        </Pressable>
      </View>
    );
  }

  function onSubmit() {
    navigateToSignInPage()
  }

  function navigateToSignInPage() {
    if (!agreeTnC) {
      setSnackbarText("Agree to Terms and Conditions to proceed");
      return;
    }

    setSnackbarText("Account created successfully, Login now!!");
    setTimeout(() => {
      navigation.push('SignIn')
    }, 1000);
  }

  function renderSnackbar() {
    return (
      <Snackbar visible={SnackbarText.length == 0 ? false : true} onDismiss={() => setSnackbarText('')} duration={1000}>{SnackbarText}</Snackbar>
    )
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
        <Button buttonText="Create Account" callback={handleSubmit(onSubmit)} />
        {renderSnackbar()}
        {renderSignInView()}
      </View>
    );
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <ScrollView keyboardDismissMode='on-drag' keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          {renderHeader()}
          {renderCard()}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
    alignItems: 'center',
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
  }, errorMsg: {
    color: 'red',
    paddingTop: 5,
  },
});
