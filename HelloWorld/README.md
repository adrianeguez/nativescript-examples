# Configure sitefinitysteve/nativescript-auth0 plugin in Angular

## 1) Installation

First we need to install the nativescript plugin:

```
$ tns plugin add nativescript-auth0
```

## 2) Configure Callback urls in `auth0.com`

Go to your Auth0.com backend and configure your CallbackUrls in your `Applications`:

`Allowed Callback URLs`

```
org.nativescript.AppName://your-tenant.auth0.com/ios/org.nativescript.AppName/callback, 
https://your-tenant.auth0.com/android/org.nativescript.AppName/callback
```

## 3) Configuration for each platform:

### iOS

`App_resources/iOS/info.plist`

```xml
<!-- Info.plist -->
<key>CFBundleURLTypes</key>
<array>
    <dict>
        <key>CFBundleTypeRole</key>
        <string>None</string>
        <key>CFBundleURLName</key>
        <string>auth0</string>
        <key>CFBundleURLSchemes</key>
        <array>
            <string>YOUR_APP_BUNDLE_IDENTIFIER</string>
        </array>
    </dict>
</array>
```
### Android

`App_resources/Android/src/main/AndroidManifest.xml`

```xml
<activity
    android:name="org.nativescript.auth0.RedirectActivity"
    tools:node="replace">
    <intent-filter>
        <action android:name="android.intent.action.VIEW" />

        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />

        <data
            android:host="YOUR_AUTH0_DOMAIN"
            android:pathPrefix="/android/${applicationId}/callback"
            android:scheme="https" />
    </intent-filter>
</activity>
```
For android to work in `Angular` you have to edit the `webpack.config.js` file:

Add to these lines:

```javascript
 // Add your custom Activities, Services and other Android app components here.
 const appComponents = [
        "tns-core-modules/ui/frame",
        "tns-core-modules/ui/frame/activity",
    ];
```

This line:

```javascript
 // Add your custom Activities, Services and other Android app components here.
 const appComponents = [
        "tns-core-modules/ui/frame",
        "tns-core-modules/ui/frame/activity",
        "nativescript-auth0/android/provider/redirectActivity"
    ];
```


# 4) Usage

Refer to the oficial [docs](https://github.com/sitefinitysteve/nativescript-auth0), here a fragment:

## Usage

Import Auth0 in a shared helper or something

```ts
import { Auth0 } from 'nativescript-auth0';
```

Create your Auth0 object
```ts
    this.auth0 = new Auth0('<your clientid>', '<your domain>');
```

Start the web authentication flow, returns a promise
```ts
    /// Promise returns credentials object
    this.auth0.webAuthentication({
        scope: 'openid offline_access'
    }).then((res) => {
        // goToHomeOrWhatevs(); 
    }, (error) => {
        // console.log(error);
    });
```
