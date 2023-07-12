import React from "react";
import { templateData } from "../TemplateData/TemplateData"
import "./TemplateLibrary.css"


export default function TemplateLibrary({ setSelectedTemplate }) {
    function getImageFilePath(str){
        return require(`../../images/templates/template${str}.png`);
    }

    function handleImageClick(index) {
        setSelectedTemplate(index + 1);
    }

    return (
        <div className="templates-wrapper">
            {
                templateData.map((data, index) => (
                <div key={index} className="template">
                    <img 
                        src={getImageFilePath((data.number).toString())} 
                        alt={"template"+(data.number).toString()} 
                        className="template-image"
                        onClick={() => handleImageClick(index)}
                    />
                </div>))
            }
        </div>
    );
}