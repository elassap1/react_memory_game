import React from 'react'
import Score from './Score'

let style_playButton = {fontSize:'1.2em', position:'absolute', left:'50%', top:'50%', transform:'translate(-50%,-50%)'};

export default function ControlPlayGame(props) {

  let {theMemory, random, gameState, result} = props;//distructuring

  // text on button
  let buttonContent = gameState ==='start'||gameState==='lose'?'New Game':gameState==='win'?`Next Level ${result.level}`:'Play';

  return (
    <div>
      {gameState==='start'||gameState==='lose'||gameState==='win'
        ?<div style={{textAlign:'center'}}>
          <h1 style={{color:'goldenrod',paddingTop:'25vh',textShadow:'5px 5px 5px black'}}>The Memory Card Game</h1>
          <h3 style={{color:'goldenrod',paddingTop:'5vh',textShadow:'#e27777 2px 3px 5px'}}>{gameState==='lose'?'You Lost Try Again':gameState==='win'?`It Is Win Go To Level ${result.level}`:''}</h3>
          <button onClick={random}
          className='btn btn-warning col-2' style={style_playButton}
          >{buttonContent}</button>
        </div>
        :gameState==='play'
        ?<div key={100}>
          <Score result={result}/>
          <div className='container-fluid col-12 d-flex flex-wrap justify-content-center align-items-center'style={{height:'70vh'}}>
          {theMemory}
          </div>
          </div>
        :<button>level {result.level}</button>
      }
    </div>

  )
}
