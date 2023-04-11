import React from 'react';
import "./index.scss";
const Card = (props) => {
    console.log(props);

    const {item:{email, first_name, last_name, avatar}} = props;
    return (

        <div className='card'>
            <img className='card-img' src={avatar} alt="img" width={300} height={250}/>
            <div className="card-body">
                <h3 className='card-title'>{first_name}</h3>
                <p className='card-text'>{email}</p>
            </div>
        </div>
    );
};


// const User = (props) => {
//     console.log(props);

//     const {item:{email, first_name, last_name, avatar}} = props;
//     return (

//         <div className='card'>
//             <img className='card-img' src={avatar} alt="img" width={300} height={250}/>
//             <div className="card-body">
//                 <h3 className='card-title'>{first_name}</h3>
//                 <p className='card-text'>{email}</p>
//             </div>
//         </div>
//     );
// };
// export default User;
export default Card;