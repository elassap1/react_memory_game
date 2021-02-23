const RefreshCard = (arr) => {

  let refresh = [];// new array

  let lents = arr.length;// count number of cards

  for (let index = 0; index < lents; index++) {// loop on all item

    let random = Math.floor(Math.random()*arr.length);//get radom number not great then linght of array

    // assign the value to the new array
    refresh[index] = arr[random];

    // remove from the root array
    arr.splice(random,1);

  }

  return refresh;

}
export default RefreshCard;