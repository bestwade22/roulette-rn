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
      InterstitialAdManager.showAd(process.env.EXPO_PUBLIC_FB_PLACEMENT_ID_FULL ?? '')
      .then((didClick) => {
        alert(didClick);
      })
      .catch((error) => {
        alert(error);
      });
    }
  }, [loaded]);

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
