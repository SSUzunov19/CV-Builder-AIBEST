import React from "react";
import { tagTypes } from "../TemplateData/TemplateData";
import "./TemplateTags.css"

export default function TemplateTags({selectedTags}) {
    if (selectedTags.length !== 0) {
        let temps = [];

        for (let i = 0; i < selectedTags.length; i++) {
            for (let j = 0; j < tagTypes.length; j++) {
                if (selectedTags[i] === tagTypes[j].type) {
                    temps.push(tagTypes[j])
                }
            }
        }

        return <div className="template-tags">
            {
                temps.map((temp, index) => {
                    return <div
                        key={index}
                        className="template-tag"
                        style={{
                            width: temp.size[0],
                            height: temp.size[1],
                            backgroundColor: temp.colors[0],
                            borderColor: temp.colors[1]
                        }}
                    >
                        <p style={{ color: temp.colors[2] }}>{temp.type}</p>
                    </div>
                })
            }
        </div>
    }
    else {
        return <div></div>
    }
}  