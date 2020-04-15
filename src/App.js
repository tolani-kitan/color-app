import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import AddColor from './components/AddColor'
import { Switch, Route, withRouter } from 'react-router-dom';
import ColorDisplay from './components/ColorDisplay';


const pryColors = [
  {name: 'red', hexColor: "#a8030e"},
  {name: 'green', hexColor: "#048757"},
  {name: 'blue', hexColor: "#1456db"}
];

class App extends Component{
  state = {
    pryColors: pryColors,
    userInput: '',
    colorValue: ''
  }

  getColorName = (e) => {

    console.log(e.target.value);
        this.setState({
          userInput: e.target.value
          })
  }

  getColorValue = (e) => {
        this.setState({
          colorValue: e.target.value
        })
  }

  newColor = (e) => {
    e.preventDefault();

    const details = [{
      name: this.state.userInput,
      hexColor: this.state.colorValue
    }];

    const updatedColor = details.concat(this.state.pryColors);
    this.setState({
      pryColors: updatedColor
    })
    this.props.history.push('/')

  }

  render(){
    return(
      <div>
        <Switch>
          <Route exact path ='/' component={() => 
          <Home pryColors={this.state.pryColors} />
            } 
          />
          <Route 
            path='/colors/new'
            render={() => 
            <AddColor 
              pryColors = {this.pryColors}
              getColorName = {this.getColorName}
              getColorValue = {this.getColorValue}
              newColor = {this.newColor}
            />
            }
          />
          <Route path='/colorDisplay/:color' component={ColorDisplay} />


        </Switch>
        
      </div>
    )
  }

}

export default withRouter(App);
