import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ListView from './ListView';

describe('<ListView />', () => {
  it('renders correctly', () => {
    const NoteComponent = renderer.create(<ListView data={[{ name: 'abc', stargazers_count:100 }]} />).toJSON();
    expect(NoteComponent).toMatchSnapshot();
  });
});
