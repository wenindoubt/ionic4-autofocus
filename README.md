# Test Ionic 4 AutoFocus

Running this application on the following device will autofocus and open up
the keyboard:

- Real iPad Air 2 - MGL23LL
- iOS Version 13.1.3

Running this application on the following device will **NOT** autofocus and
**NOT** open up the keyboard:

- Real Pixel 3a
- Android Version 10

## Technologies

```bash
$ npx ionic --version
5.2.1
```

## To Test Ionic 4 AutoFocus

### In the Browser

```bash
$ npx ionic serve
```

### In XCode or Android Studio

```bash
# XCode
$ npx ionic capacitor add ios
$ npx ionic capacitor run ios
```

```bash
# Android Studio
$ npx ionic capacitor add android
$ npx ionic capacitor run android
```
