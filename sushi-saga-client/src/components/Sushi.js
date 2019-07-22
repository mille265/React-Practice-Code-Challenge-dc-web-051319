import React from 'react'

const Sushi = (props) => {
  return (
  
    <div className="sushi">
      <div className="plate">
        { 
          props.sushi.eaten
           ?
            null
          :
            <img src={props.sushi.img_url} width="100%" alt={props.sushi.name} onClick={() => props.eatSushi(props)}/>
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi
