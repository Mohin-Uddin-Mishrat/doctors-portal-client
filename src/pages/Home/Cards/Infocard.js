import React from 'react';
const Infocard = ({data}) => {
    const {name, icon , description, bgClass } = data ;
    return (
        <div>
            <div className={`p-6 card card-side  shadow-xl ${bgClass}`}>
                <figure><img src={icon} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                
                </div>
            </div>
        </div>
    );
};

export default Infocard;