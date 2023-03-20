import { View, Text } from 'react-native';
import React, { Fragment } from 'react';
import InputValue from '../../components/InputValue';
import {
  getMailToParams,
  getSMSParams,
  getTelParams,
} from '../../utils/getTypeParams';

interface EmailInputProps {
  code: string;
  type?: string;
}
const TelInputs = (props: EmailInputProps) => {
  const { code } = props;

  const params = getTelParams(code);

  return (
    <Fragment>
      <InputValue header="Telephone" value={params.number} />
    </Fragment>
  );
};

export default TelInputs;
