import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux'; // 追加
import UserForm from './components/UserForm'; // 追加
import Store from './Store'; // 追加

const container = document.getElementById('contents');

ReactDom.render(
    <p>こんにちは、世界</p>,
    container,
);
