import React, { Component } from 'react';
import GameGrid from './game_grid';
import './App.css';

class App extends Component {
  state = { matrix: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] };

  componentDidMount() {
    document.addEventListener("keydown", this.keyPress, false);
    this.generateNewTile();
    this.generateNewTile();
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyPress, false);
  }

  //gets a random int in [min, max)
  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  keyPress = (event) => {
    const key = event.keyCode;
    if (key === 37) {
      this.handleLeftRight('left');
    } else if (key === 38) {
      this.handleUpDown('up');
    } else if (key === 39) {
      this.handleLeftRight('right');
    } else if (key === 40) {
      this.handleUpDown('down');
    }
    this.generateNewTile();
  }

  generateNewTile = () => {
    const { matrix } = this.state;
    if (matrix.some((num) => (num === 0))) {
      let index = this.getRandomInt(0, 16);
      while (matrix[index] !== 0) {
        index = this.getRandomInt(0, 16);
      }
      matrix[index] = 2;
      this.setState({matrix: matrix});
    } else {
      //lose
    }
  }

  handleMerge = (dir) => {
    let { matrix } = this.state;
    for (let i = 0; i < matrix.length; i++){
      if (matrix[i] === matrix[i+4]) {//up case
        
      }
    }
  }

  handleUpDown = (dir) => {
    let { matrix } = this.state;
    matrix = dir === 'down' ? matrix.reverse() : matrix;
    for (let i = 4; i < matrix.length; i++) {
      for (let j = 0; j < 3; j++) {
        //the current index divided by 4 floored is the number of vertical steps to the top/bottom,
        //but each vertical step is four steps in the matrix
        const moveOp = 4 * (Math.floor(i / 4) - j);
        const newIndex = i - moveOp;
        if (matrix[i] !== 0 && matrix[newIndex] === 0) {
          matrix[newIndex] = matrix[i];
          matrix[i] = 0;
        }
      }
    }
    matrix = dir === 'down' ? matrix.reverse() : matrix;
    this.setState({ matrix: matrix });
  }

  handleLeftRight = (dir) => {
    let { matrix } = this.state;
    matrix = dir === ('right') ? matrix.reverse() : matrix;
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < 3; j++) {
        // the current index modulo 4 is the amount of steps to the left/right side
        const moveOp = (i%4) - j;
        const newIndex = i - moveOp;
        if (matrix[i] !== 0 && matrix[newIndex] === 0 && i%4 !== 0) {
          matrix[newIndex] = matrix[i];
          matrix[i] = 0;
          break;
        }
      }
      console.log(i);
    }
    matrix = dir === ('right') ? matrix.reverse() : matrix;
    this.setState({ matrix: matrix });
  }

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <h1>2048</h1>
        </header>
        <GameGrid matrix={this.state.matrix} />
      </div>
    );
  }
}

export default App;
