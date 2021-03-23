import React from 'react';
import ReactDOM from 'react-dom';
import { App as Title } from '../../chloe-fec-title-service/client/src/index.jsx';
const container = document.getElementById('root');

console.log('Title: ', Title);

class Proxy extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    console.log('hi');
    return (
      <div>
        Hi?
      </div>
    );
  }
}

ReactDOM.render(<h1>hello</h1>, document.getElementById('root'));