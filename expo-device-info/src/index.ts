import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoDeviceInfo.web.ts
// and on native platforms to ExpoDeviceInfo.ts
import ExpoDeviceInfoModule from './ExpoDeviceInfoModule';
import ExpoDeviceInfoView from './ExpoDeviceInfoView';
import { ChangeEventPayload, ExpoDeviceInfoViewProps } from './ExpoDeviceInfo.types';

// Get the native constant value.
export const PI = ExpoDeviceInfoModule.PI;

export function hello(): string {
  return ExpoDeviceInfoModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoDeviceInfoModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoDeviceInfoModule ?? NativeModulesProxy.ExpoDeviceInfo);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoDeviceInfoView, ExpoDeviceInfoViewProps, ChangeEventPayload };
