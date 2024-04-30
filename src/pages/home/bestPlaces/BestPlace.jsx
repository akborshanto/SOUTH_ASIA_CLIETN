import React from 'react'
import UseTitle from './../../../hook/useTitle/UseTitle';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const BestPlace = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
  return (
    <div className='my-8 '>
    <UseTitle heading="WHOLE SOUTEST ASIA" title='There are 48 countries in Asia today, according to the United Nations. The full list is shown in the table below,. '></UseTitle>
    <div style={{ height: '80vh', width: '100%' }} className='rounded-lg'>
    <GoogleMapReact
      bootstrapURLKeys={{ key: "" }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent
        lat={59.955413}
        lng={30.337844}
        text="My Marker"
      />
    </GoogleMapReact>
  </div>


    


    </div>
  )
}

export default BestPlace
