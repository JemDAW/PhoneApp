import React from "react";

const PhoneList = (props) => {
    const results = props.results.phones;
    var renderedPhones = [];
    if (typeof results !== 'undefined'){
     renderedPhones = results.map((result) => {
        return(
            <div className="item" key={result.id}>
                <div className="ui small image">
                        <img src={result.imageFileName}  alt="phoneImage"/>
                </div>
                <div className="content">
                    <h1 className="header">{result.name}</h1>
                    <div className="meta">
                        <p>RAM: {result.ram} gb</p>
                        <p>Price: {result.price}€</p>
                        <p>Processor: {result.processor}</p>
                    </div>
                    <div className="extra">
                        <div className="ui right floated primary button">
                        See more
                        </div>
                    </div>
                </div>
            </div>
        );
    });
}
    return(
            <div className="ui container">
                <div className="ui relaxed divided items">
                   {renderedPhones}
                </div>
            </div>
        );

}

export default PhoneList;