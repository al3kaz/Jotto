import App from './App';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without error', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});
test('renders button', () => {});
test('renders counter', () => {});
test('counter start at 0', () => {});
test('CLICKING ON BUTTON INCREMENT COUNTER DISPLAY', () => {});
