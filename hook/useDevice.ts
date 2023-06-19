import { useState, useEffect } from "react";
import { mobileCheck } from "utils/browserUtils";

declare global {
  interface Window {
    opera: any;
    MSStream: any;
  }
}

export default () => {
  const [deviceInfo, setDeviceInfo] = useState({
    isIos: false,
    isAndroid: false,
    isMobile: false,
  });

  useEffect(() => {
    const userAgent =
      window.navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      setDeviceInfo((config) => ({ ...config, isAndroid: true }));
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      setDeviceInfo((config) => ({ ...config, isIos: true }));
    }

    if (mobileCheck()) {
      setDeviceInfo((config) => ({ ...config, isMobile: true }));
    }
  }, []);

  return deviceInfo;
};
