import React from "react";

const Details = (props) => {
var data= props.data;
    if(data.showDetail === false){
        return(
            <div className="meta column">
                <p>RAM: {data.ram} gb</p>
                <p>Price: {data.price}€</p>
                <p>Processor: {data.processor}</p>
            </div>
        );
    }else if (data.showDetail === true){
        return(
            <div className="ui two column stackable grid container">
                <div className="meta column">
                    <p>RAM: {data.ram} gb</p>
                    <p>Price: {data.price}€</p>
                    <p>Processor: {data.processor}</p>
                    <p>Description: {data.description}</p>
                </div>
                <div className="meta column">
                    <p>Screen: {data.screen}</p>
                    <p>Color: {data.color}</p>
                    <p>Manufacturer: {data.manufacturer}</p>
                </div>
            </div>
        );
    }else{
        return(
            <div></div>
        );
    }
}

export default Details;