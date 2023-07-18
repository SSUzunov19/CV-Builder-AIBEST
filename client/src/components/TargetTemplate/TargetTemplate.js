import React from "react";
import backButton from "../../images/buttons/Back button.png"
import confirmButton from "../../images/buttons/Confirm button.png"
import "./TargetTemplate.css"

export default function TargetTemplate({ selectedTemplate }) {

    function getImageFilePath(){
        return require(`../../images/templates/template${selectedTemplate.toString()}.png`);
    }

    return (
        <div className="target-template-container">
            <img src={backButton} id="back-button" alt="back button" ></img>
            <div className="target-template">
                <img src={getImageFilePath()} className="selected-template" alt="selected template"></img>
            </div>
            <img src={confirmButton} id="confirm-button" alt="confirm button"></img>
        </div>
    )
}