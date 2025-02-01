import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { AdSettings, InterstitialAdManager } from 'react-native-fbads';
import mobileAds from 'react-native-google-mobile-ads';

// Make sure to always use a test ID when not in production 
import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default async function RootLayout() {
  const colorScheme = useColorScheme();
  // AdSettings.setLogLevel('debug');
  // AdSettings.addTestDevice(AdSettings.currentDeviceHash);
  // const requestedStatus = await AdSettings.requestTrackingPermission();

  // if (requestedStatus === 'authorized' || requestedStatus === 'unavailable') {
  //   AdSettings.setAdvertiserIDCollectionEnabled(true);
  //   // Both calls are not related to each other
  //   // FB won't deliver any ads if this is set to false or not called at all.
  //   AdSettings.setAdvertiserTrackingEnabled(true);
  // }
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      // InterstitialAdManager.showAd(process.env.EXPO_PUBLIC_FB_PLACEMENT_ID_FULL ?? '')
      // .then((didClick) => {
      //   alert(didClick);
      // })
      // .catch((error) => {
      //   alert(error);
      // });
    }
    
  }, [loaded]);
  useEffect(() => {
    (async () => {
      // Google AdMob will show any messages here that you just set up on the AdMob Privacy & Messaging page
      // const { status: trackingStatus } =
      //   await requestTrackingPermissionsAsync();
      // if (trackingStatus !== 'granted') {
      //   // Do something here such as turn off Sentry tracking, store in context/redux to allow for personalized ads, etc.
      // }

      // Initialize the ads
      await mobileAds().initialize();
    })();
  }, []);
  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
