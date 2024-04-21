import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoDeviceInfoViewProps } from './ExpoDeviceInfo.types';

const NativeView: React.ComponentType<ExpoDeviceInfoViewProps> =
  requireNativeViewManager('ExpoDeviceInfo');

export default function ExpoDeviceInfoView(props: ExpoDeviceInfoViewProps) {
  return <NativeView {...props} />;
}
