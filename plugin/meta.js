const {
  withAppBuildGradle,
  withAndroidManifest,
} = require('expo/config-plugins');

const withFacebookSDK = (config) => {
  // To add dependencies in build.gradle file
  config = withAppBuildGradle(config, (config) => {
    const dependenciesToAdd = `implementation 'com.facebook.android:facebook-android-sdk:latest.release'\n
                                implementation 'androidx.work:work-runtime:2.8.0'\n
                                implementation 'androidx.work:work-runtime-ktx:2.8.0'`;
    config.modResults.contents = config.modResults.contents.replace(
      'dependencies {',
      `dependencies {\n${dependenciesToAdd}`
    );

    return config;
  });

  // To add meta-data in AndroidManifest file
  config = withAndroidManifest(config, (config) => {
    const androidManifest = config.modResults;
    // Check if the meta-data elements are already present
    const appActivityData =
      androidManifest.manifest.application[0].activity || [];
    const InterstitialAdActivity = {
      $: {
        'android:name': 'com.facebook.ads.InterstitialAdActivity',
        'android:configChanges': 'keyboardHidden|orientation', //Replace this with Meta AppId secret
      },
    };
    // Add meta-data elements if they do not already exist
    if (
      !appActivityData.some(
        (activity) =>
          activity.$['android:name'] ===
          'com.facebook.ads.InterstitialAdActivity'
      )
    ) {
      appActivityData.push(InterstitialAdActivity);
    }

    // Update the manifest with the new meta-data elements
    androidManifest.manifest.application[0].activity = appActivityData;

    // Check if the meta-data elements are already present
    const appMetaData =
      androidManifest.manifest.application[0]['meta-data'] || [];
    const metaDataFacebookAppId = {
      $: {
        'android:name': 'com.facebook.sdk.ApplicationId',
        'android:value': '1513513462685414', //Replace this with Meta AppId secret
      },
    };
    const metaDataClientToken = {
      $: {
        'android:name': 'com.facebook.sdk.ClientToken',
        'android:value': 'b52c1f219b2d8982018d1dd5f9864628', //Replace this with Meta client secret
      },
    };
    // Add meta-data elements if they do not already exist
    if (
      !appMetaData.some(
        (meta) => meta.$['android:name'] === 'com.facebook.sdk.ApplicationId'
      )
    ) {
      appMetaData.push(metaDataFacebookAppId);
    }
    if (
      !appMetaData.some(
        (meta) => meta.$['android:name'] === 'com.facebook.sdk.ClientToken'
      )
    ) {
      appMetaData.push(metaDataClientToken);
    }

    // Update the manifest with the new meta-data elements
    androidManifest.manifest.application[0]['meta-data'] = appMetaData;
    console.log(androidManifest.manifest);
    return config;
  });
  return config;
};

module.exports = withFacebookSDK;
