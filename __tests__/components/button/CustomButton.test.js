import React from 'react';
import renderer from 'react-test-renderer';
import { CustomButton } from '../../../src/components/button';


describe('--- CustomButton Component ---', () => {
    it('to render empty', async () => {
        const tree = renderer.create(<CustomButton onPress={()=>{}} />);
        expect(tree.root.findByProps({ testID: 'custom-button' }).props).toBeDefined();
    });
});
