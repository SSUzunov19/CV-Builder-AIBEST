import React from "react";
import { tagTypes } from "../TemplateData/TemplateData";
import "./TemplateTags.css";

export default function TemplateTags({ selectedTags, setSelectedTags, tData, setTData }) {
    const filteredTags = tagTypes.filter((tag) => selectedTags.includes(tag.type));

    if (filteredTags.length === 0) {
        return <div></div>;
    }

    const UpdateTemplateRelativity = (newSelectedTags) => {
        let tempData = [...tData];

        if (newSelectedTags.length === 0) {
            tempData.forEach(template => {
                template.relativity = 0;
            });
        } else {
            tempData.forEach(template => {
                template.relativity = newSelectedTags.every(tag => template.tags.includes(tag)) ? 1 : 0;
            });
        }

        setTData(tempData);
    }

    const handleTagRemoval = (indexToRemove) => {
        const updatedTags = selectedTags.filter((tag) => tag !== filteredTags[indexToRemove].type);
        setSelectedTags(updatedTags);
        UpdateTemplateRelativity(updatedTags);
    };

    return (
        <div className="template-tags">
            {filteredTags.map((temp, index) => {
                const color = temp.colors[3];
                return (
                    <div
                        key={index}
                        className="template-tag"
                        style={{
                            width: temp.size[0],
                            height: temp.size[1],
                            backgroundColor: temp.colors[0],
                            borderColor: temp.colors[2],
                        }}
                    >
                        <p style={{ color: temp.colors[3] }}>{temp.type}</p>
                        <div
                            className="remove-button-holder"
                            style={{ backgroundColor: temp.colors[1] }}
                            onClick={() => handleTagRemoval(index)}
                        >
                            <svg width="10" height="10" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="6.10352e-05" y="6.52222" width="9.22376" height="1" rx="0.5" transform="rotate(-45 6.10352e-05 6.52222)" fill={color} />
                                <rect width="9.22376" height="1" rx="0.5" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 7.22931 6.52222)" fill={color} />
                            </svg>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}