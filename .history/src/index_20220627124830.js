import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux/es/exports';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider import React from 'react'
   import renderer from 'react-test-renderer'
   
   import { index } from '../index'
   
   describe('<index />', () => {
     const defaultProps = {}
     const wrapper = renderer.create(<index {...defaultProps} />)
   
     test('render', () => {
       expect(wrapper).toMatchSnapshot()
     })
   })>
    <App />
  </React.StrictMode>
  </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

