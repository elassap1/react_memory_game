import React, { Component } from 'react'

export class Score extends Component {
  
  render() {
    let {level, score, highScore, highLevel} = this.props.result;
    
    return (
      <div className='container d-flex flex-wrap col-12 '>
        <div className='col-12 d-flex justify-content-center mt-3'>
        <h1>THE MEMORY GAME CARD</h1>
        </div>
        <div className='col-12 d-flex justify-content-center mt-3'>
        <h3 className='mr-5'>Level : {level} </h3>
        <h3 className='mr-5'>Score : {score} </h3>
        <h3 className='offset-1 mr-5'>HighScore : {highScore} </h3>
        <h3>HighLevel: {highLevel}</h3>
        </div>
      </div>
    )
  }
}

export default Score
