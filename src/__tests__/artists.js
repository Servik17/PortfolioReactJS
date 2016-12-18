import React from 'react';
import Artists from '../Artists';
import renderer from 'react-test-renderer';

test('Input for search', () => {
    const artists = renderer.create(
        <Artists />
    );

    let tree = artists.toJSON();
    expect(tree).toMatchSnapshot();

});