[![runs with Expo Go](https://img.shields.io/badge/Runs%20with%20Expo%20Go-000.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.io/client)
[![E2E (iOS)](https://github.com/calitb/ExpoE2EDemo/actions/workflows/e2e_ios.yml/badge.svg)](https://github.com/calitb/ExpoE2EDemo/actions/workflows/e2e_ios.yml)
[![E2E (Android)](https://github.com/calitb/ExpoE2EDemo/actions/workflows/e2e_android.yml/badge.svg)](https://github.com/calitb/ExpoE2EDemo/actions/workflows/e2e_android.yml)

# Expo e2e Demo

Application template to demonstrate how to run e2e in an Expo Managed application using Detox

Tested using:

- MacOS 12.1 Monterrey, M1 Pro
- ExpoCli v5.0.2
- CocoaPods v1.11.2

### Dependencies

```
xcode-select --install
npm install -g detox-cli
brew tap wix/brew
brew install applesimutils
```

### Configure Expo

Install Expo CLI:

```shell
npm install -g expo-cli
```

### Run the app

```
yarn start:go
```

and scan the QRCode with your iOS Camera, or Android Expo app.

### Run the e2e

```
yarn e2e:ios
```

Check the [wiki](https://github.com/calitb/ExpoE2EDemo/wiki/Setup-Github-Workflow-to-run-e2e-in-an-Expo-project-using-Detox) in this repo to see how to setup this in your project.


## Running e2e using EAS (Expo Application Server)

See the detailed guide [here](https://docs.expo.dev/build-reference/e2e-tests/).

Run `yarn run eas-e2e` to build the app and run the tests.

##### Notice the file `.github/workflows/deployment.yml` runs the e2e on each comnmit to the main branch. 
Remember to create your EXPO_TOKEN [here](https://docs.expo.dev/accounts/programmatic-access), and add it to your repository following [this guide](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository)

