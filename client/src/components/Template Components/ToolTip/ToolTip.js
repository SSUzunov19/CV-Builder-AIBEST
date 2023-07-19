import React from "react";
import { tagTypes } from "../TemplateData/TemplateData";
import "./ToolTip.css"

const handleMouseOver = ({ setSelectedTags }) => {
    document.getElementById("tag-tooltip").style.display = "flex";
}

const handleMouseOut = () => {
    document.getElementById("tag-tooltip").style.display = "none";
}

export default function ToolTip({ setSelectedTags }) {
    return (
        <div>
            <span className="info-container"
                onMouseOver={(e) => {
                    handleMouseOver({ setSelectedTags });
                    e.currentTarget.style.transform = "scale(1.3)";
                }}
                onMouseOut={(e) => {
                    handleMouseOut();
                    e.currentTarget.style.transform = "scale(1)";
                }}
            >?
                <div id="tag-tooltip" className="tags-container">
                    <p className="info-text">You can search with 3 of the following tags:</p>
                    <div className="tag-row-container">
                        {tagTypes.map((tag, index) => {
                            return (
                                <div
                                    key={index}
                                    className="tag"
                                    style={{
                                        width: `calc(${tag.size[0]} - 18px)`,
                                        height: tag.size[1],
                                        backgroundColor: tag.colors[0],
                                        borderColor: tag.colors[2],
                                    }}
                                >
                                    <p style={{ color: tag.colors[3] }}>{tag.type}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </span>
        </div>
    )
}