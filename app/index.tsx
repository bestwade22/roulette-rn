import React, { Component } from 'react';
import { Platform, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

const WebviewComponent = () => {
  
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
