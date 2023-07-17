import React, { useState } from "react"
import { templateData } from "../TemplateData/TemplateData";
import TemplateLibrary from "../TemplateLibrary/TemplateLibrary";
import SearchBar from "../SearchBar/SearchBar";
import TargetTemplate from "../TargetTemplate/TargetTemplate"
import "./MainContent.css"
import "../../images/searchIcon.svg"

export default function MainContent() {
    const [selectedTemplate, setSelectedTemplate] = useState(1);
    const [tData, setTData] = useState(templateData);
    const [selectedTags, setSelectedTags] = useState([]);

    return (
        <div className="main-content">
            <TargetTemplate selectedTemplate={selectedTemplate} />
            <div className="search-segment">
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