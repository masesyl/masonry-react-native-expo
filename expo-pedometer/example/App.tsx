import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {requestPermissions, addStepChangedListener, startSendingData, stopSendingData} from "expo-pedometer";
import {useEffect, useState} from "react";

export default function App() {
  const [isPermissionGranted, setIsPermissionGranted] = useState<boolean>(false);
  const [steps, setSteps] = useState<number>(0);
  const [isTracking, setIsTracking] = useState<boolean>(false);

  const requestPermissionRN = () => {
    requestPermissions();
    setIsPermissionGranted(true);
  }

  const startTracking = () => {
    startSendingData();
    setIsTracking(true)
  }

  const stopTracking = () => {
    stopSendingData();
    setSteps(0)
    setIsTracking(false)
  }

  const buttonAction = () => {
    if (isPermissionGranted) {
      if (isTracking) {
        stopTracking();
      } else {
        startTracking();
      }
    } else {
      requestPermissionRN();
    }
  }

  const buttonText = () => {
    if (isPermissionGranted) {
      if (isTracking) {
        return "Stop Tracking"
      } else {
        return "Start Tracking"
      }
    } else {
      return "Request Permission"
    }
  }

  useEffect(() => {
    const sub = addStepChangedListener(({steps}) => {
      console.log("Steps: ", steps)
      setSteps(steps);
    });

    return () => sub.remove();
  }, []);

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.mainContent}>
          {isPermissionGranted ? (
              <>
                <Text style={styles.stepsTitle}>Steps Taken</Text>
                <Text style={styles.stepsFont}>{steps}</Text>
              </>
          ) : (
              <Text style={styles.requestFont}>
                Please Enable Step Counting Permissions
              </Text>
          )}
        </View>
        <TouchableOpacity
            style={styles.ctaButton}
            onPress={buttonAction}
        >
          <Text style={styles.ctaButtonText}>
            {buttonText()}
          </Text>
        </TouchableOpacity>
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
    borderRadius: 8,
    backgroundColor: "purple",
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
