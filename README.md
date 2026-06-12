# デスクトップ恋愛革命 - 2D

A desktop GF widget that turns six hand-drawn character images into a dynamic, interactive 2D GF!

<img width="466.5" height="592" alt="KakaoTalk_20260429_233752319" src="https://github.com/user-attachments/assets/2dc34605-7b2d-4f67-8ec0-c9239056411b" />

## About

The widget composites six source images (three expressions — default, interest, surprise — multiplied by glasses on / off) into a small always-on-top window you can keep near the corner of your desktop. The character reacts to mouse clicks on different parts of her body and to short text messages you type. Each interaction adjusts an affection meter ranging from 0 to 100.


## Features

- Six expression states rendered from the original artwork.
- Affection meter (0–100) that rises with liked actions and falls with disliked ones.
- Mouse interaction zones across the character, each with its own dialogue.
- Keyword-based text conversation through a small input field.
- Three selectable personalities: tsundere, caring elder, playful junior.
- Glasses toggle with separate dialogue for taking them off and putting them back on.
- Korean particle handling for names with and without 받침.
- Saved sessions that restore names, personality, affection, and glasses state.
- Electron desktop wrapper with a frameless, draggable, always-on-top bottom-corner window.
- Android app wrapper through Capacitor, running as a normal lightweight app without overlay permissions.

## Language

Korean only.

## Usage

### Desktop app

```powershell
npm.cmd install
npm.cmd start
```

The desktop app opens as a small frameless window near the bottom-right of the screen. Drag the top bar to reposition it.

### Browser fallback

Open `2D_desktop_GF_ver2.html` in any modern browser. Enter your name and the character's name, choose a personality, and begin.

### Android app

```powershell
npm.cmd install
npm.cmd run android:sync
```

Open the `android/` folder in Android Studio to run it on a device or emulator. The Android version is a normal app, not a screen overlay.

## Build

```powershell
npm.cmd run dist:win
```

Build outputs are written to `dist/`:

- `Desktop Renai Revolution 2D-1.1.0-win-x64.zip`
- `Desktop Renai Revolution 2D-1.1.0-portable-x64.exe`

Attach those files to a GitHub Release when publishing manually.

### Android APK

Local APK builds require Android Studio or an Android SDK:

```powershell
npm.cmd run android:build
```

The debug APK is written under `android/app/build/outputs/apk/debug/`.

## GitHub Release Artifacts

The `Build Windows Release` workflow can build downloadable Windows artifacts on GitHub:

1. Open the repository's Actions tab
2. Run `Build Windows Release` manually to download the `windows-release` artifact
3. Or create a GitHub Release; the workflow will build and attach the `.zip` and portable `.exe` to that release

The `Build Android APK` workflow can build downloadable Android APK artifacts on GitHub:

1. Open the repository's Actions tab
2. Run `Build Android APK` manually to download the `android-debug-apk` artifact
3. Or create a GitHub Release; the workflow will build and attach the debug `.apk` to that release

## Download & Run

Released: 2026-05-02

1. Download the Windows `.zip`, portable `.exe`, or Android `.apk` from the latest release
2. Unzip the Windows `.zip` if needed
3. Run `Desktop Renai Revolution 2D.exe` inside the folder, run the portable `.exe`, or install the `.apk` on Android

No internet connection required.

**Supported OS:** Windows (x64), Android

## Credits

- Original character artwork: **Hyeonje Yang**
