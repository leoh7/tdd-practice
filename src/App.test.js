import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';
/**
 * 
 * Todo list 계획
 * 1. 할 일을 적을 수 있는 칸이 있다
 * 2. 칸에 글씨를 채워넣고 입력을 하면 리스트가 된다
 * 3. 리스트는 체크해서 완료 처리 할 수 있다
 * 
 */
describe('', () => {
  it('should render', () => {
    const appWrapper = shallow(<App />).
    expect(appWrapper).toHaveLength(1)
  });
})

