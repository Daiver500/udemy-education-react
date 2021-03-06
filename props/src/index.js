import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Button} from "./App"
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapTest from './BootstrapTest';

// Модифицируем стили у нового элемента

const BigButton = styled(Button)`
  margin: 0 auto;
  width: 245px;
  text-align: center;
`;

ReactDOM.render(
  <React.StrictMode>
    <App />
    <BigButton as="a">Отправить отчет</BigButton>   {/** так мы можем поменять тег к которому применяем стили, через as */}
    <BootstrapTest></BootstrapTest>
  </React.StrictMode>,
  document.getElementById('root')
);

