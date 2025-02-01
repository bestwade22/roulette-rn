import React, { Component, useEffect, useState } from 'react';
import { Platform, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { AdEventType, InterstitialAd, TestIds } from 'react-native-google-mobile-ads';
import * as Device from 'expo-device';

const iosAdmobInterstitial = "ca-app-pub-12345678910/12345678910";
const androidAdmobInterstitial = "ca-app-pub-12345678910/12345678910";
const productionID = Device.osName === 'Android' ? androidAdmobInterstitial : iosAdmobInterstitial;
const adUnitId = process.env.ENV === 'PRODUCTION' ?  productionID : TestIds.INTERSTITIAL;

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  //keywords: ['food', 'cooking', 'fruit'], // Update based on the most relevant keywords for your app/users, these are just random examples
  requestNonPersonalizedAdsOnly: true, // Update based on the initial tracking settings from initialization earlier
});

const WebviewComponent = () => {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
     // Event listener for when the ad is loaded
     const unsubscribeLoaded = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      setLoaded(true);
    });

    // Event listener for when the ad is closed
    const unsubscribeClosed = interstitial.addAdEventListener(AdEventType.CLOSED, () => {
      setLoaded(false);

      // Load a new ad when the current ad is closed
      interstitial.load();
    });

    // Start loading the interstitial ad straight away
    interstitial.load();
    interstitial.show();
    // Unsubscribe from events on unmount
    return () => {
      unsubscribeLoaded();
      unsubscribeClosed();
    };
  }, []);
  return Platform.OS === 'web' ? (
    <iframe
      src={process.env.EXPO_PUBLIC_API_URL}
      height={'100%'}
      width={'100%'}
    />
  ) : (
    <WebView
      source={{ uri: process.env.EXPO_PUBLIC_API_URL ?? '' }}
      style={{ flex: 1 }}
    />
  );
};

export default WebviewComponent;
