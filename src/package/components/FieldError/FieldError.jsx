import React from 'react';
import { Field, getIn } from 'formik';
import { Spacer } from '../Spacer/Spacer';
import { StyledError } from './styles';
import _ from 'lodash';

const FieldError = props => {
  const { name, ...rest } = props;

  const buildFieldError = () => {
    if (name) {
      return (
        <Field name={name}>
          {({ form }) => {
            const { errors, touched } = form;
            const msg = getIn(errors, name);
            const isTouched = getIn(touched, name);
            const showError = !_.isEmpty(msg) && isTouched;

            if (showError) {
              return (
                <StyledError {...rest}>
                  <Spacer size={0.5} />
                  {msg}
                </StyledError>
              );
            }

            return null;
          }}
        </Field>
      );
    }
  };

  return buildFieldError();
};

export { FieldError };