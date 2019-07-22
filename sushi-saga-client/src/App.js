import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushi: [], 
    sushiIndex: 0,
    amount: 100
  }

componentDidMount(){
  fetch(API)
  .then(resp => resp.json())
  .then(sushis => {let nuArr = sushis.map(sushi => {return {...sushi, eaten: false}})
    
    this.setState({
    sushi: nuArr
  })})
}

fourSushi(){
  if(this.state.sushiIndex === 100){
    this.setState({sushiIndex: 0})
  return this.state.sushi.slice(this.state.sushiIndex,this.state.sushiIndex+4)}
    else{ 
      return this.state.sushi.slice(this.state.sushiIndex,this.state.sushiIndex+4)
    }
}

getMore = () => {
  return this.setState({
        sushiIndex: this.state.sushiIndex+4
        })
}

eatSushi = (fish) => {
  let lessSushi = this.state.sushi.map(sushi => {
    if(sushi.id === fish.sushi.id){
      sushi.eaten = true
      return sushi
    }else{return sushi}
  })
  
  if(this.state.amount < fish.sushi.price){
    alert("You Don't Have Enough Money!")
  }else{
    this.setState({
      sushi: lessSushi, 
      amount: this.state.amount - fish.sushi.price
    })
  }
}

eatenSushi(){
 let eaten = this.state.sushi.filter(sushi => {
   return sushi.eaten === true
  })

  return eaten 
}

  render() {
    return (
      <div className="app">
        <SushiContainer getMore={this.getMore} sushi={this.fourSushi()} eatSushi={this.eatSushi}/>
        <Table sushiArr={this.eatenSushi()} amount={this.state.amount}/>
      </div>
    );
  }
}

export default App;