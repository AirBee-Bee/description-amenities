import React from 'react';
import ReactDOM from 'react-dom';
import Title from './components/Title.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      host: '',
      guests: 0,
      rooms: 0,
      beds: 0,
      baths: 0,
      description: '',
      amenities: [],
      highlights: []
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <span>I am the App</span>
        <br/>
        <Title />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
