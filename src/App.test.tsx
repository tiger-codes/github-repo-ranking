import * as renderer from 'react-test-renderer';
import App from './App';

describe('<App />', () => {
  it('renders correctly', () => {
    const AppComponent = renderer.create(<App />).toJSON();
    expect(AppComponent).toMatchSnapshot();
  });
});
