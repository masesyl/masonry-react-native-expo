# masonry-react-native-expo
This project is a custom React Native application that uses the Expo framework. It includes a custom module for accessing the device's pedometer sensor.

### Features
- Custom module for accessing the device's pedometer sensor
- TypeScript for static type checking
- Kotlin and Swift for native code

### Installation
**Step 1**: Clone the repository
```bash
git clone https://github.com/masesyl/masonry-react-native-expo.git
```
**Step 2**: Install dependencies

Navigate to the project directory:
```bash
cd masonry-react-native-expo
```

Install dependencies:

**Npm**
```bash
npm install
```

**Yarn**
```bash
yarn install
```

**Step 3**: Start the application

To start the application, run the following command in the project directory:

**Npm**
```bash
npm start
```

**Yarn**
```bash
yarn start
```

This will start the Metro Bundler. You can then run the app on an Android or iOS device or simulator.

## Expo Pedometer Module
The Expo Pedometer module is a custom React Native module that provide access to the device's pedometer sensor. It's built with TypeScript, Kotlin, and Swift, and is compatible with both Android and iOS.

### Features
- Check the permission status for the pedometer sensor.
- Request permission to access the pedometer sensor.
- Start and stop tracking the number of steps taken by the user.

### Native Modules Used
- iOS:
    - **<span style="color:#D7BA7D">CoreMotion</span>**: This framework lets the app receive motion data from the device's accelerometer, gyroscope, pedometer, and other hardware features. It's used in the expo-pedometer module to access the pedometer sensor.
- Android:
    - **<span style="color:#D7BA7D">android.hardware.Sensor</span>**: This class represents a sensor and provides methods for getting information about the sensor. It's used in the expo-pedometer module to access the pedometer sensor.
    - **<span style="color:#D7BA7D">android.hardware.SensorManager</span>**: This class provides methods for accessing and listing sensors, registering and unregistering sensor event listeners, and calibrating sensors. It's used in the expo-pedometer module to manage the pedometer sensor.

### Usage
Import the module in your React Native application:

```typescript
import { ExpoPedometer } from 'expo-pedometer';
```

You can then use the ExpoPedometer module to access the pedometer sensor:

```typescript
// Check the permission status
ExpoPedometer.checkPermissionStatus();

// Request permission
ExpoPedometer.requestPermissions();

// Start sending data
ExpoPedometer.startSendingData();

// Stop sending data
ExpoPedometer.stopSendingData();
```

## Conclusion
Thank you for exploring the Masonry Rect Native Expo Demo. If you have any questions or feedback, please don't hesitate to reach out.

Happy Coding! 🚀
