import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ListItem from './ListItem';

describe('<ListItem />', () => {
  it('renders correctly', () => {
    const NoteComponent = renderer.create(<ListItem primaryText='abc' secondaryText={1} />).toJSON();
    expect(NoteComponent).toMatchSnapshot();
  });
});
