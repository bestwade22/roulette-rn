import React, { Component } from 'react';
import { Platform, Text, View } from 'react-native';
import { InterstitialAdManager } from 'react-native-fbads';
import { WebView } from 'react-native-webview';

const WebviewComponent = () => {

  InterstitialAdManager.preloadAd(process.env.EXPO_PUBLIC_FB_PLACEMENT_ID_FULL?? '')
  .then((didClick) => {})
  .catch((error) => {});

// Will show it if already loaded, or wait for it to load and show it.
  InterstitialAdManager.showPreloadedAd(process.env.EXPO_PUBLIC_FB_PLACEMENT_ID_FULL?? '');
  console.log(process.env.EXPO_PUBLIC_FB_PLACEMENT_ID_FULL)
  return Platform.OS === 'web' ? (
    <iframe src={process.env.EXPO_PUBLIC_API_URL} height={'100%'} width={'100%'} />
  ) : (
    <WebView
      source={{ uri: process.env.EXPO_PUBLIC_API_URL }}
      style={{ flex: 1 }}
    />
  );
};

export default WebviewComponent;
