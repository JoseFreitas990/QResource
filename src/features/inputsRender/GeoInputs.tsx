import { View, Text } from 'react-native';
import React, { Fragment } from 'react';
import InputValue from '../../components/InputValue';
import {
  getGeoParams,
  getMailToParams,
  getSMSParams,
  getTelParams,
} from '../../utils/getTypeParams';

interface EmailInputProps {
  code: string;
  type?: string;
}
const GeoInputs = (props: EmailInputProps) => {
  const { code } = props;

  const params = getGeoParams(code);

  return (
    <Fragment>
      <InputValue header="Latitude" value={params.latitude.toString()} />
      <InputValue header="Longitude" value={params.longitude.toString()} />
    </Fragment>
  );
};

export default GeoInputs;
