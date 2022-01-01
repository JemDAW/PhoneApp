import React , { useState } from "react";
import Details from "./Details";

const PhoneList = (props) => {
    const results = props.results.phones;    
    const [isShowDetail, setShowDetail] = useState(false);
    var renderedPhones = [];

    function showDetail(id) {
        results[id].showDetail ? results[id].showDetail= false : results[id].showDetail = true;
        return isShowDetail ? setShowDetail(false) : setShowDetail(true);
    }

    if (typeof results !== 'undefined'){
     renderedPhones = results.map((result) => {
         if (result.showDetail == null){
            result.showDetail = false;
         }
        return(
            <div className="item" key={result.id}>
                <div className="ui small image">
                        <img src={result.imageFileName}  alt="phoneImage"/>
                </div>
                <div className="content">
                    <h1 className="header">{result.name}</h1>
                        <Details data={result} isDetail={isShowDetail}/>
                    <div className="extra">
                        <button className="ui right floated primary button" onClick={() => showDetail(result.id)}>
                        See more
                        </button>
                    </div>
                </div>
            </div>
        );
    });
}
    return(
            <div className="ui container">
                <div className="ui relaxed divided items">
                    <br></br>
                   {renderedPhones}
                </div>
            </div>
        );

}

export default PhoneList;