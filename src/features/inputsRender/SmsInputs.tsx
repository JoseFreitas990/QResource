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
const SmsInputs = (props: EmailInputProps) => {
  const { code } = props;

  const params = getSMSParams(code);

  return (
    <Fragment>
      <InputValue header="To" value={params.to} />
      <InputValue header="Body" value={params.body} />
    </Fragment>
  );
};

export default SmsInputs;
