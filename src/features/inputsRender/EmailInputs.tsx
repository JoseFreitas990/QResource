import { View, Text } from 'react-native';
import React, { Fragment } from 'react';
import InputValue from '../../components/InputValue';
import { getMailToParams, getMatMsgToParams } from '../../utils/getTypeParams';

interface EmailInputProps {
  code: string;
  type?: 'MAILTO' | 'MATMSG';
}
const EmailInputs = (props: EmailInputProps) => {
  const { code, type } = props;

  const params =
    type === 'MATMSG' ? getMatMsgToParams(code) : getMailToParams(code);

  console.log(type);
  return (
    <Fragment>
      <InputValue header="To" value={params.to} />
      <InputValue header="Subject" value={params.body} />
      <InputValue header="Body" value={params.subject} />
    </Fragment>
  );
};

export default EmailInputs;
