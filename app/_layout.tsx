import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import mobileAds from 'react-native-google-mobile-ads';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  console.debug("start root");
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  useEffect(() => {
    console.debug("start useef");

    // Google AdMob will show any messages here that you just set up on the AdMob Privacy & Messaging page
    // const { status: trackingStatus } =
    //   await requestTrackingPermissionsAsync();
    // if (trackingStatus !== 'granted') {
    //   // Do something here such as turn off Sentry tracking, store in context/redux to allow for personalized ads, etc.
    // }

    // Initialize the ads
    mobileAds().initialize();

    console.debug("finish useef");

  }, []);

  useEffect(() => {
    console.debug("start loaded useeff");

    if (loaded) {
      console.debug(" loaded func");
      SplashScreen.hideAsync();
    }
    console.debug("finish loaded useeff");
  }, [loaded]);

  if (!loaded) {
    console.debug("not loaded func");

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
