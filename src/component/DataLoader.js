import React from 'react';
import Loader from 'react-js-loader';
export default function DataLoader() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Loader
        type="bubble-spin"
        bgColor={'#0856CC'}
        title={'Loading...'}
        color={'#0856CC'}
        size={60}
      />
    </div>
  );
}
