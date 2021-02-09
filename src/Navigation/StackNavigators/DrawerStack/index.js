// import React from 'react';

// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {
//   HOME,
//   APPSTACK,
//   HOMESTACK,
//   MYORDERS,
//   SETTINGS,
//   ADDRESSES,
//   ABOUTAPP,
//   SUPPORT,
//   SETTINGSTACK,
// } from '../screenNames';

// import CustomDrawer from '../../components/CustomDrawer';
// import colors from '../../theme/colors/colors';
// import HomeIcon from '../../theme/icons/homeIcon2.0';

// import {SIGNIN} from '../../screenNames';
// import SignIn from '../../../screens/Auth/SignIn';
// import AppStack from '../AppStack';
// const {Navigator, Screen} = createDrawerNavigator();

// const DrawerStack = () => {
//   return (
//     <Navigator
//       drawerContentOptions={{
//         inactiveTintColor: colors.background,
//         activeTintColor: colors.background,
//         marginTop: 30,
//         activeBackgroundColor: 'transparent',
//         labelStyle: {
//           fontWeight: 'bold',
//           fontSize: 16,
//         },
//       }}
//       drawerContent={CustomDrawer}>
//       <Screen
//         name={APPSTACK}
//         component={AppStack}
//         options={{
//           drawerIcon: ({focused, size}) => <HomeIcon />,
//           headerShown: false,
//         }}
//       />
//     </Navigator>
//   );
// };

// export default DrawerStack;
