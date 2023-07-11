import React from "react";
import { useState } from "react";
import { tagTypes } from "../TemplateData/TemplateData";
import TemplateTags from "../TemplateTags/TemplateTags";
import searchIcond from "../../images/searchIcon.svg";
import "./SearchBar.css";

export default function SearchBar() {
    const [input, setInput] = useState('')
    const [selectedTags, setSelectedTags] = useState([])

    const handleChange = (value) => {
        setInput(value);

        const userInput = document.getElementById("user-input");
        let temp = value;

        for (let i = 0; i < tagTypes.length; i++) {
            if (value.includes(tagTypes[i].type)) {
                temp = temp.replace(tagTypes[i].type, "");

                if(!selectedTags.includes(tagTypes[i].type)){
                    const update = [...selectedTags, tagTypes[i].type];
                    setSelectedTags(update);
                }
            }
        }
        
        userInput.value = temp;
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