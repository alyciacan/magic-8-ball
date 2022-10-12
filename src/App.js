import logo from './logo.svg';
import './App.css';
import backgroundVideo from './backgroundVideo.mp4';
import React, {Component} from 'react';
import Ball from './Ball';
import Form from'./Form';
import wetTriangle from './wetTriangle.png';


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
      ],
      randomResponse: " ",
      triangleImg: null,
      animationClass: null,
      formValue: ' ',
    }
  }
  generateRandomResponse() {
    return this.state.responses[Math.floor(Math.random() * this.state.responses.length)];
  }

  shakeBall = () => {
    this.setState({ animationClass: 'wiggle' })
    this.setState({ randomResponse: this.generateRandomResponse() });
}

  showTriangle = () => {
    this.setState({ triangleImg: wetTriangle } );
  }
  
  clearInput = () => {
    this.setState({ formValue: " " })
  }

  updateInput = (input) => {
    this.setState({ formValue: input })
  }

  render() {
    return (
      <main className="App">
        <video autoPlay muted loop id="myvideo" preload="auto">
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <h1>Magic 8 Ball</h1>
        <h2>Type your question below and give it a shake.</h2>
        <Form 
          shakeBall={this.shakeBall} 
          showTriangle={this.showTriangle}
          formValue={this.state.formValue}
          updateInput={this.updateInput}
          clearInput={this.clearInput}
        />
        <Ball 
          response={this.state.randomResponse} 
          triangleImg={this.state.triangleImg} 
          animationClass={this.state.animationClass} 
        />
      </main>
    );
  }
}

export default App;
