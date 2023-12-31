import React from "react";
import backButton from "../../../images/buttons/back.svg"
import confirmButton from "../../../images/buttons/confirm.svg"
import { useNavigate } from "react-router-dom";
import "./TargetTemplate.css"

export default function TargetTemplate({ selectedTemplate, id, setTemplateId }) {
    
    const navigate = useNavigate();

    function getImageFilePath(){
        return require(`../../../images/templates/templatee${selectedTemplate.toString()}.png`);
    }

    const handleConfirmClick = () => {
        navigate(`/builder/${id}`);
        setTemplateId(selectedTemplate);
    };

    const handleBackClick = () => {
        navigate(`/builder/${id}`);
    };

    return (
        <div className="target-template-container">
            <img src={backButton} id="back-button" alt="back button" onClick={handleBackClick}></img>
            <div className="target-template">
                <img src={getImageFilePath()} className="selected-template" alt="selected template"></img>
            </div>
            <img src={confirmButton} id="confirm-button" alt="confirm button" onClick={handleConfirmClick}></img>
        </div>
    )
}
