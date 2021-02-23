import React from 'react'

const CardElements = (props) => {
  
  let{id, tag, url} = props.prop;

  // style of container card
  let style_card = {background:'#7b1010',position:'relative',textAlign:'center',borderRadius:'5px',margin:'5px'};

  return (//container of Cards
    <div key={id} onClick={()=>{props.result(id)}} className='card col-2' data-key={id} style={style_card} >

        <img src={url} alt="card" style={{width:'99%',height:'30vh',borderRadius:'10px',padding:'10px 0px 25px'}} />
      
        <h6 style={{width:'100%', position:"absolute",left:"50%",bottom:'-3px',transform:"translate(-50%,0)"}}>{tag}</h6>
      
      </div>

)
}

export default CardElements
