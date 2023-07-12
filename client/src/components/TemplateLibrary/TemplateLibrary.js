import React from "react";
import { templateData } from "../TemplateData/TemplateData"
import "./TemplateLibrary.css"


export default function TemplateLibrary() {
    function getImageFilePath(str){
        return require(`../../images/templates/template${str}.png`);
    }

    return (
        <div className="templates-wrapper">
            {
                templateData.map((data, index) => (
                <div key={index} className="template">
                    <img src={getImageFilePath((index+1).toString())} alt={"template"+(index+1).toString()} className="template-image"/>
                </div>))
            }
        </div>
    );
}