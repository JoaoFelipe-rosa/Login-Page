import * as React from 'react';
import Form from './form';

export default function App() {
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <Form />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
