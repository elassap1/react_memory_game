import React from 'react'

const CardElements = (props) => {
  
  let{id, tag, url} = props.prop;

  // style of container card
  let style_card = {background:'#61755e',position:'relative',margin:'5px',textAlign:'center',padding:'10px 0px 25px',borderRadius:'5px'};

  return (//container of Cards
    <div key={id} onClick={()=>{props.result(id)}} className='card col-2' data-key={id} style={style_card} >

        <img src={url} alt="card" style={{width:'96%',height:'20vh',borderRadius:'10px'}} />
      
        <h6 style={{width:'100%', position:"absolute",left:"50%",bottom:'-3px',transform:"translate(-50%,0)"}}>{tag}</h6>
      
      </div>

)
}

export default CardElements
