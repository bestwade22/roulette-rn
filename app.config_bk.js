module.exports = {
  "expo": {
    "name": "test",
    "slug": "roulette-breakdown",
    "version": "1.0.1",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "scheme": "myapp",
    "userInterfaceStyle": "automatic",
    "splash": {
      "image": "./assets/images/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "buildNumber": "1",
      "supportsTablet": true,
      "infoPlist": {
      "ITSAppUsesNonExemptEncryption": false,
        "NSUserTrackingUsageDescription": "This identifier will be used to deliver personalized ads to you.",
        "SKAdNetworkItems": [
          {
            "SKAdNetworkIdentifier": "v9wttpbfk9.skadnetwork"
          },
          {
            "SKAdNetworkIdentifier": "n38lu8286q.skadnetwork"
          },
          {
            "SKAdNetworkIdentifier": [
              "cstr6suwn9.skadnetwork",
              "4fzdc2evr5.skadnetwork",
              "4pfyvq9l8r.skadnetwork",
              "2fnua5tdw4.skadnetwork",
              "ydx93a7ass.skadnetwork",
              "5a6flpkh64.skadnetwork",
              "p78axxw29g.skadnetwork",
              "v72qych5uu.skadnetwork",
              "ludvb6z3bs.skadnetwork",
              "cp8zw746q7.skadnetwork",
              "c6k4g5qg8m.skadnetwork",
              "s39g8k73mm.skadnetwork",
              "3qy4746246.skadnetwork",
              "3sh42y64q3.skadnetwork",
              "f38h382jlk.skadnetwork",
              "hs6bdukanm.skadnetwork",
              "v4nxqhlyqp.skadnetwork",
              "wzmmz9fp6w.skadnetwork",
              "yclnxrl5pm.skadnetwork",
              "t38b2kh725.skadnetwork",
              "7ug5zh24hu.skadnetwork",
              "9rd848q2bz.skadnetwork",
              "y5ghdn5j9k.skadnetwork",
              "n6fk4nfna4.skadnetwork",
              "v9wttpbfk9.skadnetwork",
              "n38lu8286q.skadnetwork",
              "47vhws6wlr.skadnetwork",
              "kbd757ywx3.skadnetwork",
              "9t245vhmpl.skadnetwork",
              "a2p9lx4jpn.skadnetwork",
              "22mmun2rn5.skadnetwork",
              "4468km3ulz.skadnetwork",
              "2u9pt9hc89.skadnetwork",
              "8s468mfl3y.skadnetwork",
              "av6w8kgt66.skadnetwork",
              "klf5c3l5u5.skadnetwork",
              "ppxm28t8ap.skadnetwork",
              "424m5254lk.skadnetwork",
              "ecpz2srf59.skadnetwork",
              "uw77j35x4d.skadnetwork",
              "mlmmfzh3r3.skadnetwork",
              "578prtvx9j.skadnetwork",
              "4dzt52r2t5.skadnetwork",
              "gta9lk7p23.skadnetwork",
              "e5fvkxwrpn.skadnetwork",
              "8c4e2ghe7u.skadnetwork",
              "zq492l623r.skadnetwork",
              "3rd42ekr43.skadnetwork",
              "3qcr597p9d.skadnetwork",
              "vutu7akeur.skadnetwork",
              "eh6m2bh4zr.skadnetwork",
              "pwa73g5rt2.skadnetwork"
            ]
          }
        ]
      },
      "bundleIdentifier": "com.bestwade.roulettebreakdown"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "package": "com.bestwade.roulettebreakdown",
      "permissions": [
        "android.permission.INTERNET",
        "com.google.android.gms.permission.AD_ID"
      ],
      "versionCode": 1,
      "googleServicesFile": process.env.GOOGLE_SERVICES_JSON,
    },
    "web": {
      "bundler": "metro",
      "output": "static",
      "favicon": "./assets/images/favicon.png"
    },
    "plugins": [
      "./plugin/meta",
      "expo-router",
      [
        "react-native-fbsdk-next",
        {
          "appID": "1513513462685414",
          "clientToken": "b52c1f219b2d8982018d1dd5f9864628",
          "displayName": "RN FB SDK",
          "advertiserIDCollectionEnabled": false,
          "autoLogAppEventsEnabled": true,
          "isAutoInitEnabled": true,
          "iosUserTrackingPermission": "This identifier will be used to deliver personalized ads to you."
        }
      ],
      "react-native-fbads",
      [
        "expo-tracking-transparency",
        {
          "userTrackingPermission": "Allow this app to collect app-related data that can be used for tracking you or your device and deliver personalized ads to you."
        }
      ],
      [
        "react-native-google-mobile-ads",
        {
          "androidAppId": "ca-app-pub-1309489874701389~9021664842",
          "iosAppId": "ca-app-pub-1309489874701389~9021664842",
          "userTrackingUsageDescription": "This identifier will be used to deliver personalized ads to you.",
          "skAdNetworkItems": [
            "cstr6suwn9.skadnetwork",
            "4fzdc2evr5.skadnetwork",
            "2fnua5tdw4.skadnetwork",
            "ydx93a7ass.skadnetwork",
            "p78axxw29g.skadnetwork",
            "v72qych5uu.skadnetwork",
            "ludvb6z3bs.skadnetwork",
            "cp8zw746q7.skadnetwork",
            "3sh42y64q3.skadnetwork",
            "c6k4g5qg8m.skadnetwork",
            "s39g8k73mm.skadnetwork",
            "3qy4746246.skadnetwork",
            "hs6bdukanm.skadnetwork",
            "mlmmfzh3r3.skadnetwork",
            "v4nxqhlyqp.skadnetwork",
            "wzmmz9fp6w.skadnetwork",
            "su67r6k2v3.skadnetwork",
            "yclnxrl5pm.skadnetwork",
            "7ug5zh24hu.skadnetwork",
            "gta9lk7p23.skadnetwork",
            "vutu7akeur.skadnetwork",
            "y5ghdn5j9k.skadnetwork",
            "v9wttpbfk9.skadnetwork",
            "n38lu8286q.skadnetwork",
            "47vhws6wlr.skadnetwork",
            "kbd757ywx3.skadnetwork",
            "9t245vhmpl.skadnetwork",
            "a2p9lx4jpn.skadnetwork",
            "22mmun2rn5.skadnetwork",
            "4468km3ulz.skadnetwork",
            "2u9pt9hc89.skadnetwork",
            "8s468mfl3y.skadnetwork",
            "ppxm28t8ap.skadnetwork",
            "uw77j35x4d.skadnetwork",
            "pwa73g5rt2.skadnetwork",
            "578prtvx9j.skadnetwork",
            "4dzt52r2t5.skadnetwork",
            "tl55sbb4fm.skadnetwork",
            "e5fvkxwrpn.skadnetwork",
            "8c4e2ghe7u.skadnetwork",
            "3rd42ekr43.skadnetwork",
            "3qcr597p9d.skadnetwork"
          ]
        }
      ],
      [
        "expo-build-properties",
        {
          "ios": {
            "useFrameworks": "static"
          },
          "android": {
            "extraProguardRules": "-keep class com.google.android.gms.internal.consent_sdk.** { *; }",
          }
        }
      ]
    ],
    "experiments": {
      "typedRoutes": true
    },
    "extra": {
      "eas": {
        "projectId": "f1d09cb0-b71e-432a-b179-9e18abb36b76"
      }
    },
    "owner": "bestwade"
  },
  "react-native-google-mobile-ads": {
    "android_app_id": "ca-app-pub-1309489874701389~9021664842",
    "ios_app_id": "ca-app-pub-1309489874701389~9021664842",
    "delay_app_measurement_init": true,
    "user_tracking_usage_description": "This identifier will be used to deliver personalized ads to you.",
    "sk_ad_network_items": [
      "cstr6suwn9.skadnetwork",
      "4fzdc2evr5.skadnetwork",
      "4pfyvq9l8r.skadnetwork",
      "2fnua5tdw4.skadnetwork",
      "ydx93a7ass.skadnetwork",
      "5a6flpkh64.skadnetwork",
      "p78axxw29g.skadnetwork",
      "v72qych5uu.skadnetwork",
      "ludvb6z3bs.skadnetwork",
      "cp8zw746q7.skadnetwork",
      "c6k4g5qg8m.skadnetwork",
      "s39g8k73mm.skadnetwork",
      "3qy4746246.skadnetwork",
      "3sh42y64q3.skadnetwork",
      "f38h382jlk.skadnetwork",
      "hs6bdukanm.skadnetwork",
      "v4nxqhlyqp.skadnetwork",
      "wzmmz9fp6w.skadnetwork",
      "yclnxrl5pm.skadnetwork",
      "t38b2kh725.skadnetwork",
      "7ug5zh24hu.skadnetwork",
      "9rd848q2bz.skadnetwork",
      "y5ghdn5j9k.skadnetwork",
      "n6fk4nfna4.skadnetwork",
      "v9wttpbfk9.skadnetwork",
      "n38lu8286q.skadnetwork",
      "47vhws6wlr.skadnetwork",
      "kbd757ywx3.skadnetwork",
      "9t245vhmpl.skadnetwork",
      "a2p9lx4jpn.skadnetwork",
      "22mmun2rn5.skadnetwork",
      "4468km3ulz.skadnetwork",
      "2u9pt9hc89.skadnetwork",
      "8s468mfl3y.skadnetwork",
      "av6w8kgt66.skadnetwork",
      "klf5c3l5u5.skadnetwork",
      "ppxm28t8ap.skadnetwork",
      "424m5254lk.skadnetwork",
      "ecpz2srf59.skadnetwork",
      "uw77j35x4d.skadnetwork",
      "mlmmfzh3r3.skadnetwork",
      "578prtvx9j.skadnetwork",
      "4dzt52r2t5.skadnetwork",
      "gta9lk7p23.skadnetwork",
      "e5fvkxwrpn.skadnetwork",
      "8c4e2ghe7u.skadnetwork",
      "zq492l623r.skadnetwork",
      "3rd42ekr43.skadnetwork",
      "3qcr597p9d.skadnetwork",
      "vutu7akeur.skadnetwork",
      "eh6m2bh4zr.skadnetwork",
      "pwa73g5rt2.skadnetwork"
    ]
  }
}
