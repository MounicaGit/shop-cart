import {
  View,
  Text,
  Image,
  // TextInput,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Divider, Checkbox } from 'react-native-paper';
import Button from '../../../components/commons/Button';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Controller, set, useForm } from 'react-hook-form';
import { emailRules, passwordRules } from '../../../utils/validators/rules';

export default function SignIn() {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit',
  });

  const onSubmit = () => {
    navigateToHomePage()
  };

  function renderHeader() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerMain}>ShopMart</Text>
        <Text style={styles.headerSubText}>
          Welcome Back!! Sign in to continue
        </Text>
      </View>
    );
  }

  const onChangeEmail = (email) => { };

  function renderEmailTextField() {
    return (
      <View style={styles.textInputView}>
        <Text>Email</Text>
        <Controller
          control={control}
          name="email"
          rules={emailRules}
          render={({ field: { onChange, value } }) => (
            <TextInput
              onChangeText={onChange}
              value={value}
              style={styles.textInput}
              placeholder={'Enter your email'}
              underlineColor={'transparent'}
              placeholderTextColor={'grey'}
              keyboardType='email-address'
              activeUnderlineColor={'transparent'}
              left={<TextInput.Icon icon={'email'} size={20} color="grey" />}
            />
          )}
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
            name="password"
            rules={passwordRules}
            render={({ field: { onChange, value } }) => (
              <TextInput
                key={showPassword ? 'text' : 'hidden'}
                onChangeText={onChange}
                value={value}
                style={styles.textInput}
                placeholder={'Enter your password'}
                placeholderTextColor={'grey'}
                secureTextEntry={showPassword}
                underlineColor={'transparent'}
                right={
                  <TextInput.Icon icon={showPassword ? 'eye-off' : 'eye'} size={20} color={'grey'} onPress={() => setShowPassword(prev => !prev)} />
                }
                activeUnderlineColor={'transparent'}
                left={<TextInput.Icon icon="lock" size={20} color={'grey'} />}
              />
            )}
          />
          {errors.password && renderErrorMsg(errors.password.message)}
        </View>
      </View>
    );
  }

  function renderErrorMsg(message) {
    return (
      <Text style={styles.errorMsg}>{message}</Text>)
  }

  function navigateToHomePage() {
    navigation.push('Home');
  }


  function navigateToSignUpPage() {
    navigation.push('SignUp');
  }

  function renderSignupSection() {
    return (
      <View style={styles.signUpSection}>
        <Text style={styles.signUpText}>Don't have an account?</Text>
        <Pressable onPress={() => { navigateToSignUpPage() }}>
          <Text style={styles.signupTextBtn}>Sign Up</Text>
        </Pressable>
      </View>
    );
  }

  function signInActions() {
    return (
      <View style={styles.signInActionsView}>
        <View style={styles.checkBoxView}>
          <Checkbox
            status={'checked'}
            onPress={() => { }}
            color={'#2563eb'}
            style={styles.checkBoxStyle}
          />
          <Text>Remember me</Text>
        </View>
        <Pressable>
          <Text style={styles.forgotPswdText}>Forgot Password?</Text>
        </Pressable>
      </View>
    );
  }

  function renderDivider() {
    return (
      <View style={styles.divider}>
        <Divider style={styles.dividerView} />
        <Text style={styles.continueText}>Or continue with</Text>
        <Divider style={styles.dividerView} />
      </View>
    );
  }

  function renderSocialMediaBtns() {
    return (
      <View style={styles.socialMediaBtnView}>
        <Pressable style={styles.socialMediaBtn}>
          <View>
            <Text style={styles.socialMediaBtnText}>Google</Text>
          </View>
        </Pressable>
        <View style={styles.space}></View>
        <Pressable style={styles.socialMediaBtn}>
          <View>
            <Text style={styles.socialMediaBtnText}>Facebook</Text>
          </View>
        </Pressable>
      </View>
    );
  }

  function renderCard() {
    return (
      <View style={styles.card}>
        <Text style={styles.headerSignin}>Sign in</Text>
        {renderEmailTextField()}
        {renderPasswordTextField()}
        {signInActions()}
        {renderSignInButton()}
        {renderSignupSection()}
        {renderDivider()}
        {renderSocialMediaBtns()}
      </View>
    );
  }

  function renderSignInButton() {
    return <Button buttonText="Sign in" callback={handleSubmit(onSubmit)} />;
  }
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <ScrollView keyboardDismissMode='on-drag'>
        <SafeAreaView style={styles.container}>
          {renderHeader()}
          {renderCard()}
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2563eb',
    padding: 15,
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
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    paddingVertical: 30,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  textInputView: {
    width: '100%',
    marginTop: 30,
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
  forgotPswdText: {
    color: '#2563eb',
    fontWeight: '500',
  },
  signInActionsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  headerSignin: {
    textAlign: 'center',
  },
  signUpSection: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signUpText: {
    color: 'grey',
    marginRight: 5,
    fontSize: 13,
  },
  signupTextBtn: {
    color: '#2563eb',
    fontWeight: '500',
  },
  divider: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    opacity: 0.8,
  },
  continueText: {
    color: 'grey',
    fontSize: 13,
    paddingHorizontal: 10,
  },
  dividerView: {
    backgroundColor: 'grey',
    height: 1,
    opacity: 0.3,
    flex: 1,
  },
  socialMediaBtnView: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  socialMediaBtn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'grey',
    // opacity: 0.2,
  },
  socialMediaBtnText: {
    color: 'black',
    textAlign: 'center',
  },
  space: {
    width: 20,
  },
  checkBoxView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkBoxStyle: {
    transform: [{ scale: 1.0 }],
  },
  errorMsg: {
    color: 'red',
    paddingTop: 5,
  }
});
