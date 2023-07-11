import React from "react";
import TemplateLibrary from "../TemplateLibrary/TemplateLibrary";
import SearchBar from "../SearchBar/SearchBar";
import "./SearchSegment.css"

export default function SearchSegment() {
    return(
        <div className="search-segment">
            <SearchBar />
            <TemplateLibrary />
        </div>
    );
}