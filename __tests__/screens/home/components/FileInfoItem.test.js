import React from 'react';
import renderer from 'react-test-renderer';
import  {FileInfoItem}  from '../../../../src/screens/home/components';


describe('--- FileInfoItem Component ---', () => {
  it('to render successfully', async () => {
    const tree = renderer.create(<FileInfoItem label={'test'} value={'test'} />);
    expect(tree.root.findByProps({ testID: 'test' }).props).toBeDefined();
  });
});
