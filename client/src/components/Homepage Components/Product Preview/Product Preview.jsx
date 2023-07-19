import React from "react"
import previewImage from "../../../images/preview.jpg"
import "./Product Preview.css"

export default function ProductPreview() {
    return (
        <div className="preview-container">
            <p className="preview-text">
                The faster way to create professional-looking resumes
            </p>
            <img
                id="preview-image"
                src={previewImage}
                alt="This image couldn't load"
            />
        </div>
    );
}