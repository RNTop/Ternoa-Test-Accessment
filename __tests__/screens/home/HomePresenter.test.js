import React from 'react';
import renderer from 'react-test-renderer';
import  {Home}  from '../../../src/screens';

jest.mock('react-native-progress', () => {
    return {
        Circle: (props) => {},
    };
});

jest.mock('react-native-permissions', () => {
    return {
        check: () => {},
    };
});

jest.mock('react-native-image-picker', () => {
  return {
    launchImageLibrary: () => {},
  };
});

describe('--- Home Screen Component ---', () => {
  it('to render empty', async () => {
    const tree = renderer.create(<Home />);
    await renderer.act(async () => {
      await tree.root.findByProps({ testID: 'select-file' }).props.onPress();
      await tree.root.findByProps({ testID: 'upload-selected-file' }).props.onPress();
    });
    expect(tree.root.findByProps({ testID: 'home-screen' }).props).toBeDefined();
    expect(tree.root.findByProps({ testID: 'select-file' }).props).toBeDefined();
    expect(tree.root.findByProps({ testID: 'upload-selected-file' }).props).toBeDefined();
  });
});
