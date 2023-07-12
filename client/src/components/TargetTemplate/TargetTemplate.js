import React from "react";
import { useState } from "react";
import "./TargetTemplate.css"

export default function TargetTemplate(template) {
    const [selectedTemplate, setSelectedTemplate] = useState(1)

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