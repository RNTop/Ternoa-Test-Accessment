import React from 'react';
import HomeScreen, {IHomeScreen} from './HomeScreen';

/*
Here, please do define the contollers && handlers
*/

const HomePresenter = () => {
  const homeScreenProps: IHomeScreen = {};
  return <HomeScreen {...homeScreenProps} />;
};

export default HomePresenter;
