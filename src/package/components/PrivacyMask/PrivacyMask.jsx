import React from 'react';

const PrivacyMask = props => {
  const { length } = props;

  const buildMask = () => {
    let mask = '•••';

    if (length) {
      mask = '';

      for (let i = 0; i < length; i++) {
        mask += '•';
      }
    }

    return mask;
  };

  return (
    <>
      {buildMask()}
    </>
  );
};

export { PrivacyMask };