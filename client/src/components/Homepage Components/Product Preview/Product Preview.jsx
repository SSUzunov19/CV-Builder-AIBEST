import React from "react"
import previewImage from "../../../images/preview/builderPreview.jpg"
import "./Product Preview.css"

export default function ProductPreview() {
    return (
        <div className="preview-container">
            <p className="preview-text">
                The faster way to create professional-looking resumes
            </p>
            <img
                className="preview-image"
                src={previewImage}
                alt="This image couldn't load"
            />
        </div>
    );
}