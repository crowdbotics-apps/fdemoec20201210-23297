import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

//import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import TermsScreen5184047Navigator from '../features/TermsScreen5184047/navigator';
import PrivacyPolicyScreen6184046Navigator from '../features/PrivacyPolicyScreen6184046/navigator';
import HomeScreen4184048Navigator from '../features/HomeScreen4184048/navigator';
import LoginSignupScreen53184049Navigator from '../features/LoginSignupScreen53184049/navigator';
import OnboardingSlideScreen2184050Navigator from '../features/OnboardingSlideScreen2184050/navigator';
import CbSplashScreen1184051Navigator from '../features/CbSplashScreen1184051/navigator';
/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
      TermsScreen5184047 : { screen: TermsScreen5184047Navigator },                      // Terms & Conditions Screen
      PrivacyPolicyScreen6184046 : { screen: PrivacyPolicyScreen6184046Navigator },      // Privacy Policy Screen
      HomeScreen4184048 : { screen: HomeScreen4184048Navigator },                        // Home Screen
      LoginSignupScreen53184049 : { screen: LoginSignupScreen53184049Navigator },        // LoginSignup Screen
      OnboardingSlideScreen2184050 : { screen: OnboardingSlideScreen2184050Navigator },  // Onboarding Slide Screen
      CbSplashScreen1184051 : { screen: CbSplashScreen1184051Navigator },                // Splash Screen
    /** new navigators can be added here */
//    SplashScreen: { screen: SplashScreen }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
  //  initialRouteName: "CbSplashScreen1184051",  // Splash Screen
    initialRouteName: "HomeScreen4184048",        // Home - Demo  
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
