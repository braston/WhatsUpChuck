import React, { Component } from 'react';
import './App.css';
import ChuckButton from '../components/ChuckButton';


class App extends Component {

  constructor(){
    super();
    this.state = {
      joke: "",
    }
  }



 getData = async function (){
    const res = await fetch('https://api.chucknorris.io/jokes/random');
  const data = await res.json();
    //console.log('Should be the joke: ', data.value);
    this.setState({joke: data.value});

  }

  clickChuck = () => {
    this.getData();
  }
  

  render(){
  
      if(this.state.joke.length === 0){
        return(
           <div className="tc f1">
              <h1> What Would Chuck Say?</h1>
              <ChuckButton testFunc={this.clickChuck}/>
          </div>)
      }
      else{
          return(  
            <div className="tc f1">
              <h1> What Would Chuck Say?</h1>
              <ChuckButton testFunc={this.clickChuck}/>
              <p className="tc f1 br3 bg-white">{this.state.joke}</p>
            </div>
          )     
      }
  }
}

export default App;
