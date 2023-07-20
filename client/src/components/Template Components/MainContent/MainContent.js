import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { templateData } from "../TemplateData/TemplateData";
import TemplateLibrary from "../TemplateLibrary/TemplateLibrary";
import SearchBar from "../SearchBar/SearchBar";
import TargetTemplate from "../TargetTemplate/TargetTemplate"
import "./MainContent.css"
import "../../../images/searchIcon.svg"

export default function MainContent({setTemplateId}) {
    const [selectedTemplate, setSelectedTemplate] = useState(1);
    const [tData, setTData] = useState(templateData);
    const [selectedTags, setSelectedTags] = useState([]);
    const { id } = useParams();

    return (
        <div className="main-content">
            <TargetTemplate selectedTemplate={selectedTemplate} id={id} setTemplateId={setTemplateId}/>
            <div className="search-segment" style={{ position: "relative" }}>
                <SearchBar
                    tData={tData}
                    setTData={setTData}
                    selectedTags={selectedTags}
                    setSelectedTags={setSelectedTags}
                />
                <TemplateLibrary
                    tData={tData}
                    setSelectedTemplate={setSelectedTemplate}
                    selectedTags={selectedTags}
                />
            </div>
        </div>
    )
}