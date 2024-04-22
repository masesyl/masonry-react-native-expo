import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from "react";
import {addStepChangedListener, checkPermissionStatus} from "expo-pedometer";

export default function PedometerScreen() {
  const [permissionStatus, setPermissionStatus] = useState<string>("");
  const [isPermissionGranted, setIsPermissionGranted] = useState<boolean>(false);
  const [steps, setSteps] = useState<number>(0);
  const [isTracking, setIsTracking] = useState<boolean>(false);

  console.log("PedometerScreen")
  //
  // useEffect(() => {
  //   const status = checkPermissionStatus()
  //   switch (status) {
  //     case "granted":
  //       setIsPermissionGranted(true)
  //       break;
  //     case "denied":
  //       setIsPermissionGranted(false)
  //       break;
  //     case "blocked":
  //       setIsPermissionGranted(false)
  //       break;
  //     default:
  //       setIsPermissionGranted(false)
  //       break;
  //   }
  //   setPermissionStatus(status)
  // }, []);
  //
  // useEffect(() => {
  //   const subscription = addStepChangedListener(({steps}) => {
  //     console.log("Steps: ", steps)
  //     if (steps === undefined) {
  //       steps = 0;
  //     }
  //     setSteps(steps);
  //   });
  //
  //   return () => subscription.remove();
  // }, []);
  //
  // const requestPermissionRN = () => {
  //   requestPermissions();
  // }
  //
  // const startTracking = () => {
  //   startSendingData();
  //   setIsTracking(true)
  // }
  //
  // const stopTracking = () => {
  //   stopSendingData();
  //   setSteps(0)
  //   setIsTracking(false)
  // }
  //
  // const buttonAction = () => {
  //   if (isPermissionGranted) {
  //     if (isTracking) {
  //       stopTracking();
  //     } else {
  //       startTracking();
  //     }
  //   } else {
  //     requestPermissionRN();
  //   }
  // }
  //
  // const buttonText = () => {
  //   if (isPermissionGranted) {
  //     if (isTracking) {
  //       return "Stop Tracking"
  //     } else {
  //       return "Start Tracking"
  //     }
  //   } else {
  //     return "Request Permission"
  //   }
  // }
  //
  // const buttonBackgroundColor = isTracking ? "#f86f6f" : "#007AFF";

  return (
      // <SafeAreaView style={styles.container}>
      //   <View style={styles.mainContent}>
      //     {(permissionStatus === "granted" && isPermissionGranted) ? (
      //         <>
      //           <Text style={styles.stepsFont}>{steps}</Text>
      //           <Text style={styles.stepsTitle}>Steps</Text>
      //         </>
      //     ) : (
      //         <Text style={styles.requestFont}>
      //           Please Enable Step Counting Permissions
      //         </Text>
      //     )}
      //   </View>
      //   <TouchableOpacity
      //       style={[styles.ctaButton, {backgroundColor: buttonBackgroundColor}]}
      //       onPress={buttonAction}
      //   >
      //     <Text style={styles.ctaButtonText}>
      //       {buttonText()}
      //     </Text>
      //   </TouchableOpacity>
      // </SafeAreaView>
      <SafeAreaView>
        <Text>PedometerScreen</Text>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mainContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 25,
  },
  requestFont: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
  },
  stepsFont: {
    fontSize: 224,
    fontWeight: "300",
  },
  stepsTitle: {
    fontSize: 50,
    fontWeight: "bold",
  },
  ctaButton: {
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 25,
    marginBottom: 10,
  },
  ctaButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
