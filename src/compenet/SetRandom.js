import ApiCards from './ApiCards'

const SetRandom = (level) => {

  let cardArr = [...ApiCards];//assignment all card
  let newCard = [];//new empty array to sort the random card
  let length = 2+level*2;//how much the card display

  if(length>16)length=16;//control the max cards can display


  for (let index = 0; index < length; index++) {//loop to make card for playing

    let random = Math.floor(Math.random()*cardArr.length);//get radom number not great then linght of array

    newCard[index]=cardArr.splice(random,1);//sort the card in empty array
    newCard[index][0].statu=true;// tag is indeed true
  }

  // let theMemory = newCard.map((item, index) =>{
  //   console.log(item[0].id)
  // })
  return <div>
    {newCard}
  </div>
}

export default SetRandom
