import * as React from 'react';

import { ExpoDeviceInfoViewProps } from './ExpoDeviceInfo.types';

export default function ExpoDeviceInfoView(props: ExpoDeviceInfoViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
