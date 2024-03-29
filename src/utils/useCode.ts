import { Linking, Platform } from 'react-native';
import getType from './getType';
import {
  getGeoParams,
  getMatMsgToParams,
  getSMSParams,
  getWiFiToParams,
} from './getTypeParams';
import { CODE_TYPES } from '../types/enums';

export default function useCode(code: string) {
  let type = getType(code);

  switch (type) {
    case CODE_TYPES.MATMSG:
      return useMatMsgCode(code);
    case CODE_TYPES.TEL:
      return useDirectCode(code);
    case CODE_TYPES.MAILTO:
      return useDirectCode(code);
    case CODE_TYPES.SMS:
      return useSmsCode(code);
    case CODE_TYPES.GEO:
      return useGeoCode(code);
    case CODE_TYPES.GEOM:
      return useDirectCode(code);
    case CODE_TYPES.GEOM2:
      return useDirectCode(code);
    case CODE_TYPES.URL:
      return useDirectCode(code);
    case CODE_TYPES.WIFI:
      return useWiFiCode(code);
  }
}

function useWiFiCode(code: string) {
  let { name, password, hidden, networkType } = getWiFiToParams(code);
}

function useMatMsgCode(code: string) {
  let { to, subject, body } = getMatMsgToParams(code);

  const scheme = `mailto:${to}?subject=${subject}&body=${body}`;

  Linking.openURL(scheme);
}

function useDirectCode(code: string) {
  console.log(code);
  Linking.openURL(code);
}

function useSmsCode(code: string) {
  let { to, body } = getSMSParams(code);
  const scheme = `sms:/open?addresses=${to}&body=${body}`;
  Linking.openURL(scheme);
}

function useGeoCode(code: string) {
  let codeParams = getGeoParams(code);

  var scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
  let lat = codeParams.latitude;
  let long = codeParams.longitude;

  const latLng = `${lat},${long}`;
  const label = 'Scanned location';
  const url = Platform.select({
    ios: `${scheme}${label},${latLng}`,
    android: `${scheme}${latLng}(${label})`,
  });

  if (url) Linking.openURL(url);
}
