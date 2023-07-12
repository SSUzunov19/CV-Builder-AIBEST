import React, {useState} from "react"
import TemplateLibrary from "../TemplateLibrary/TemplateLibrary";
import SearchBar from "../SearchBar/SearchBar";
import TargetTemplate from "../TargetTemplate/TargetTemplate"
import "./MainContent.css"
import "../../images/searchIcon.svg"

export default function MainContent() {
    const [selectedTemplate, setSelectedTemplate] = useState(1);

    return (
        <div className="main-content">
            <TargetTemplate selectedTemplate={selectedTemplate}/>
            <div className="search-segment">
                <SearchBar />
                <TemplateLibrary setSelectedTemplate={setSelectedTemplate}/>
            </div>
        </div>
    )
}