import ExpoPedometerModule from './ExpoPedometerModule';
import {EventEmitter, Subscription} from "expo-modules-core";

const emitter = new EventEmitter(ExpoPedometerModule);

export type StepChangeEvent = {
  steps: number;
};

export function checkPermissionStatus() {
  return ExpoPedometerModule.checkPermissionStatus();
}

export function requestPermissions() {
  return ExpoPedometerModule.requestPermissions();
}

export function startSendingData() {
  return ExpoPedometerModule.startSendingData();
}

export function stopSendingData() {
  return ExpoPedometerModule.stopSendingData();
}

export function addStepChangedListener(listener: (event: StepChangeEvent) => void): Subscription {
  return emitter.addListener<StepChangeEvent>("onStepCounted", listener);
}
