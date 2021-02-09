import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import Button from '../../Components/Button';
import Header from '../../Components/Header';
import {signUp} from '../../Redux/actions/auth';
import colors from '../../Theme/colors';
import {APPSTACK, HOMESTACK} from '../../Navigation/screenNames';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  error: {
    color: colors.danger,
  },
  innerContainer: {
    flex: 0.5,
    justifyContent: 'center',
    borderWidth: 0,
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 20,
  },
});

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const user = {email, password};
  const dispatchSignUp = () => {
    if (!email && !password) {
      setError('Fields cannot be empty');
    } else {
      dispatch(signUp(user, navigateToHome));
    }
  };

  const navigateToHome = () => {
    if (!error) {
      navigation.navigate(APPSTACK, {screen: HOMESTACK});
    }
  };

  return (
    <View style={styles.container}>
      <Header title="SignUp" />
      <View style={styles.innerContainer}>
        <Text>Email</Text>
        <TextInput
          value={email}
          autoCapitalize={false}
          style={styles.input}
          onChangeText={(value) => {
            setEmail(value);
            setError('');
          }}
        />
        <Text>Passsword</Text>
        <TextInput
          value={password}
          secureTextEntry
          style={styles.input}
          onChangeText={(value) => {
            setPassword(value);
            setError('');
          }}
        />
        {error ? <Text style={styles.error}>{error}</Text> : <View />}
        <Button
          onPress={dispatchSignUp}
          title="SignUp"
          color={colors.lightFontColor}
        />
      </View>
    </View>
  );
};

export default SignUp;
