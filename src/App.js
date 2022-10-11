import logo from './logo.svg';
import './App.css';
import backgroundVideo from './backgroundVideo.mp4';
import React, {Component} from 'react';
import Ball from './Ball';

class App extends Component {
  constructor() {
    super();
    this.state = {
      responses: [
        'It is certain.',
        'It is decidedly so.',
        'Without a doubt.',
        'Yes, definitely.',
        'You may rely on it.',
        'As I see it, yes.',
        'Most likely.',
        'Outlook good.',
        'Signs point to yes.',
        'Reply hazy, try again.',
        'Ask again later.',
        'Better not tell you now.',
        'Cannot predict now.',
        'Concentrate and ask again.',
        'Don\'t count on it.',
        'My reply is no.',
        'My sources say no.',
        'Outlook not so good.',
        'Very doubtful.'
      ]
    }
  }
  render() {
    return (
      <main className="App">
        <video autoPlay muted loop id="myvideo" preload="auto">
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <h1>Magic 8 Ball</h1>
        <h2>Type your question below and give it a shake.</h2>
        <Ball {this.state} />
      </main>
    );
  }
}

export default App;
