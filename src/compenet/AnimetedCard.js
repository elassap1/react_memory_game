const AnimetedCard = (id) => {
  
  let element = document.querySelector(`[data-key='${id}']`);
  if(element)element.style.transform='rotateY(180deg)'

  setTimeout(()=>{
    if(element)element.style.transform='rotateX(0deg)'
  },300)

}

export default AnimetedCard;