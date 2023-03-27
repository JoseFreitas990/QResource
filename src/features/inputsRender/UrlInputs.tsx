import React, { Fragment } from 'react';
import InputValue from '../../components/InputValue';
import { getTelParams } from '../../utils/getTypeParams';

interface EmailInputProps {
  code: string;
  type?: string;
}
const UrlInputs = (props: EmailInputProps) => {
  const { code } = props;

  return (
    <Fragment>
      <InputValue header="Value" value={code} />
    </Fragment>
  );
};

export default UrlInputs;
