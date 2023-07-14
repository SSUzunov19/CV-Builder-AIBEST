import React from "react";
import { useState } from "react";
import { tagTypes } from "../TemplateData/TemplateData";
import TemplateTags from "../TemplateTags/TemplateTags";
import searchIcond from "../../images/searchIcon.svg";
import "./SearchBar.css";

export default function SearchBar({tData, setTData}) {
    const [input, setInput] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);

    const UpdateTemplateRelativity = (newSelectedTags) => {
        let tempData = [...tData];
    
        tempData.forEach(template => {
            template.relativity = newSelectedTags.every(tag => template.tags.includes(tag)) ? 1 : 0;
        });
    
        setTData(tempData);
    }

    const handleChange = (value) => {
        setInput(value);

        let temp = value;
        let newSelectedTags = [...selectedTags];

        tagTypes.forEach(tagType => {
            if (temp.includes(tagType.type)) {
                temp = temp.replace(tagType.type, "");
                if(!newSelectedTags.includes(tagType.type)){
                    newSelectedTags.push(tagType.type);
                }
            }
        });

        if (newSelectedTags.length !== selectedTags.length) {
            setSelectedTags(newSelectedTags);
            UpdateTemplateRelativity(newSelectedTags);
        }

        document.getElementById("user-input").value = temp;
    }

    return (
        <div>
            <div className="input-wrapper">
                <img src={searchIcond} alt="search-icon" className="search-icon"></img>
                <input id="user-input" placeholder="Search template tags... " onChange={(e) => handleChange(e.target.value)}></input> 
            </div>
            <div className="tags-section-wrapper">
                <p className="tags-section-text">Selected themes: </p>
                <TemplateTags selectedTags = {selectedTags}/>
            </div>
        </div>
    );
}