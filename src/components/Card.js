import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';





function Card(props)
{
    return <div className="myCard">
      <h2 className="cardTitle"><span> <FontAwesomeIcon icon={faCircleUser} size="2xl" /></span>    {props.title}</h2>
       <div className="cardBody">
       <p>{props.content}</p>
       </div>

    </div>
}




export default Card;