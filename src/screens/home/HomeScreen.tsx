import React from 'react';
import {SafeAreaView} from 'react-native';
import {CustomButton} from '../../components';
import {STRINGS} from '../../constants';

export interface IHomeScreen {}

const HomeScreen = (props: IHomeScreen) => {
  return (
    <SafeAreaView>
      <CustomButton name={STRINGS.selectFile} onPress={() => {}} />
      <CustomButton name={STRINGS.uploadSelectedFile} onPress={() => {}} />
    </SafeAreaView>
  );
};

export default HomeScreen;
