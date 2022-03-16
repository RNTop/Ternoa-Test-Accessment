
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../src';

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

describe('--- App Component ---', () => {
  it('to render empty', async () => {
    const tree = renderer.create(<App />);
    expect(tree.root.findByProps({ testID: 'home-screen' }).props).toBeDefined();
  });
});
