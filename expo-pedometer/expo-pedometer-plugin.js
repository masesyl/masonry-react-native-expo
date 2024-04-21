const withPedometerPermission = (config) => {
  if (!config.ios) {
    config.ios = {};
  }

  if (!config.ios.infoPlist) {
    config.ios.infoPlist = {};
  }

  config.ios.infoPlist["NSMotionUsageDescription"] = "This app will use the pedometer to track your steps";

  return config;
}

exports.default = withPedometerPermission;
