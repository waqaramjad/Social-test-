import React from 'react';
import {View, ActivityIndicator} from 'react-native';
// import {Colors} from '../../theme';

const LoadingView = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
    <ActivityIndicator size={35} color={'red'} style={{alignSelf:"center"}} />
  </View>
);

export default LoadingView;
