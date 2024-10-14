const { withAppBuildGradle, withAndroidManifest } = require("expo/config-plugins");

const withFacebookSDK = (config)=>{
// To add meta-data in AndroidManifest file
    config = withAndroidManifest(config, (config) => {
        const androidManifest = config.modResults;
        // Check if the meta-data elements are already present
        const appActivityData = androidManifest.manifest.application.activity || [];
        const InterstitialAdActivity = {
            $: {
                'android:name': 'com.facebook.ads.InterstitialAdActivity',
                'android:configChanges': "keyboardHidden|orientation", //Replace this with Meta AppId secret
            },
        };
        // Add meta-data elements if they do not already exist
        if (!appActivityData.some(activity => activity.$['android:name'] === 'com.facebook.ads.InterstitialAdActivity')) {
            appActivityData.push(InterstitialAdActivity);
        }

        // Update the manifest with the new meta-data elements
        androidManifest.manifest.application.activity = appActivityData;
        return config;

    });
    return config
};

export default withFacebookSDK