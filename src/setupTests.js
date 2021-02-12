import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

const config = {
  jest: {
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  },
};
