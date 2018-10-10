/// <reference types="jest" />

import * as React from 'react';
import { configure, mount, ReactWrapper } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

import { ErrorPlaceholder } from '../components/ErrorPlaceholder/ErrorPlaceholder';
import { IErrorPlaceholderProps } from '../components/ErrorPlaceholder/IErrorPlaceholderProps';
import { IErrorPlaceholderState } from '../components/ErrorPlaceholder/IErrorPlaceholderState';

describe('Enzyme basics', () => {

  let reactComponent: ReactWrapper<IErrorPlaceholderProps, IErrorPlaceholderState>;

  beforeEach(() => {

    reactComponent = mount(React.createElement(
        ErrorPlaceholder,
        {
            errorData: 'dssd'
        }
      
    ));
  });

  afterEach(() => {
    reactComponent.unmount();
  });

  test("Should exist", () => {
    expect(reactComponent).toBeDefined();
  });
});