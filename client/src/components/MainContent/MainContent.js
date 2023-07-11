import React from "react"
import SearchSegment from "../SearchSegment/SearchSegment"
import TargetTemplate from "../TargetTemplate/TargetTemplate"
import "./MainContent.css"
import "../../images/searchIcon.svg"

export default function MainContent() {
    return (
        <div className="main-content">
            <TargetTemplate />
            <SearchSegment />
        </div>
    )
}