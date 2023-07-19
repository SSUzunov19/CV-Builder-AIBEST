import React from "react";
import { useState } from "react";
import { tagTypes } from "../TemplateData/TemplateData";
import TemplateTags from "../TemplateTags/TemplateTags";
import ToolTip from "../ToolTip/ToolTip"
import searchIcond from "../../../images/searchIcon.svg";
import "./SearchBar.css";

export default function SearchBar({tData, setTData, selectedTags, setSelectedTags}) {
    const [input, setInput] = useState('');

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
                if (!newSelectedTags.includes(tagType.type)) {
                    newSelectedTags.push(tagType.type);
                }
            }
        });

        if (newSelectedTags.length !== selectedTags.length && selectedTags.length !== 3) {
            setSelectedTags(newSelectedTags);
            UpdateTemplateRelativity(newSelectedTags);
        }

        if(selectedTags.length !== 3){
            document.getElementById("user-input").value = temp;
        }
        else{
            document.getElementById("user-input").value = "3 tags already selected";
        }
    }

    return (
        <div>
            <div className="input-wrapper">
                <img src={searchIcond} alt="search-icon" className="search-icon"></img>
                <input id="user-input" placeholder="Search template tags... " 
                onChange={(e) => handleChange(e.target.value)}>

                </input>
            </div>
            <div className="tags-section-wrapper">
                <ToolTip setSelectedTags={setSelectedTags}/>
                <p className="tags-section-text">Selected tags: </p>
                <TemplateTags
                    selectedTags={selectedTags}
                    setSelectedTags={setSelectedTags}
                    tData={tData}
                    setTData={setTData}
                />
            </div>
        </div>
    );
}