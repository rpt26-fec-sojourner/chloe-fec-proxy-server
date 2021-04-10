import React from 'react';
import ReactDOM from 'react-dom';
const container = document.getElementById('root');

console.log('Title: ', Title);

class Proxy extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <h1>AirBnB</h1>
    );
  }
}

ReactDOM.render(<Proxy />, document.getElementById('root'));