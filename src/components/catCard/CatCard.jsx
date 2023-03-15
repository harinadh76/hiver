import React from 'react'
import { Link } from 'react-router-dom'
import "./CatCard.scss"

const CatCard = ({item}) => {
  return (
    <Link to="/gigs?cat=design">
    <div className='catCard'>
        <img src={item.img} alt="" />
        <span className="desc">{item.description}</span>
        <span className="title">{item.title}</span>
    </div>
    </Link>
  )
}

export default CatCard

// import React from "react";
// import { Link } from "react-router-dom";
// import "./CatCard.scss";

// function CatCard({ card }) {
//   return (
//     <Link to="/gigs?cat=design">
//       <div className="catCard">
//         <img src={card.img} alt="" />
//         <span className="desc">{card.desc}</span>
//         <span className="title">{card.title}</span>
//       </div>
//     </Link>
//   );
// }
// export default CatCard;