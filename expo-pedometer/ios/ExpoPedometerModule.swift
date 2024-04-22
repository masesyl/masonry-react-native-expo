import ExpoModulesCore
import CoreMotion

public class ExpoPedometerModule: Module {

  let kOnStepCounted = "onStepCounted"

  public func definition() -> ModuleDefinition {
      var pedometer: CMPedometer? = nil

    Name("ExpoPedometer")

    Events(kOnStepCounted)

    Function("checkPermissionStatus") { () -> String in
      let status = CMPedometer.authorizationStatus()
      switch status {
      case .authorized:
        self.sendEvent(self.kOnStepCounted, ["status": "granted"])
        return "granted"
      case .denied, .restricted:
        self.sendEvent(self.kOnStepCounted, ["status": "denied"])
        return "denied"
      case .notDetermined:
        self.sendEvent(self.kOnStepCounted, ["status": "undetermined"])
        return "undetermined"
      @unknown default:
        self.sendEvent(self.kOnStepCounted, ["status": "unknown"])
        return "unknown"
      }
    }

    Function("requestPermissions") {
        pedometer = CMPedometer()
        pedometer?.stopEventUpdates()
    }

    Function("startSendingData") {
        pedometer = CMPedometer()
        pedometer?.startUpdates(from: Date()) { pedometerData, error in
        guard let pedometerData = pedometerData, error == nil else {return}
            self.sendEvent(self.kOnStepCounted, [
                "steps": pedometerData.numberOfSteps.intValue
            ])
        }
    }

    Function("stopSendingData") {
        pedometer?.stopEventUpdates()
        pedometer = nil
    }
  }
}
