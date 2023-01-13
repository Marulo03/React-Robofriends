import React from "react";

const Card = ({ name, email, id }) => {
    return(
        <div className="tc bg-light-red dib br4 pa3 ma3 grow shadow-5">
            <img src={`https://robohash.org/${id}?200x200`} alt="" />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;