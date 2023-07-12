import React from "react";
import "./TargetTemplate.css"

export default function TargetTemplate({ selectedTemplate }) {

    function getImageFilePath(){
        return require(`../../images/templates/template${selectedTemplate.toString()}.png`);
    }

    return (
        <div className="target-template-container">
            <div className="target-template">
                <img src={getImageFilePath()} className="selected-template" alt=""></img>
            </div>
        </div>
    )
}