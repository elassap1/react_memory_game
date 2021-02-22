import './App.css';
import React, {Component} from "react";
import ControlPlayGame from './compenet/ControlPlayGame'
// import ApiCards from './compenet/ApiCards'
import CardElements from './compenet/CardElements';
import SetRandom from './compenet/SetRandom';
import AnimetedCard from './compenet/AnimetedCard';
import RefreshCard from './compenet/RefreshCard';


class App extends Component {
  
  state = {
    score:0,
    scoreLevel:0,
    highScore:0,
    level:1,
    highLevel:0,
    gameState:'start',
    listCard:[]
  }

  // get cards
  setRandomCard = () => {

    let {level} = this.state;

    // set state to start play
    this.setState({gameState:'play'})

    // save the card on state listCard
    this.setState({ listCard: SetRandom(level).props.children })

  }

  // detecte the result of game
  theGameResult = (id) => {
    
    let {score, gameState, level, highScore, highLevel, listCard, scoreLevel} = this.state;//distructuring
    let lent = listCard.length;// length
    let newcard = [...listCard];//assignment

    AnimetedCard(id);

      setTimeout(()=>{

      listCard.filter((items,index) => {// looping to find the id

      let item = items[0];

      if(item.id===id){// is same id

        if(item.statu){//the card never clicked
        
          newcard[index][0].statu=false; // mark was clicked

          if(scoreLevel===lent-1){// check win in this level
            
            this.setState({gameState:'win'})//set statu
            this.setState({level: level + 1, score: score + 1, scoreLevel: 0})// set new level
            
          }else{// not win yet

            this.setState({score:score + 1,scoreLevel: scoreLevel + 1})// increment the score

          }
        }else{// the card was clicked then is lost

          if(score>highScore)this.setState({highScore:score})//set high score
          if(level>highLevel)this.setState({highLevel:level})//set high level
          
          this.setState({score: 0,level:1,gameState:'lose',scoreLevel:0})

        }

      }
        return gameState // eslink ask the return
    })

    //save the the change in state (listCard)
    this.setState({listCard: RefreshCard(listCard)})

  },1000)
  
  }

  render(){

    //maping cards
    let theMemory = this.state.listCard.map((item) =>{

      return (<CardElements prop={item[0]} result={this.theGameResult} />)
    })

    return (
      <div className="App">
        <ControlPlayGame theMemory={theMemory} random={this.setRandomCard} gameState={this.state.gameState} result={this.state} />
      </div>
    );
  }

}

export default App;
