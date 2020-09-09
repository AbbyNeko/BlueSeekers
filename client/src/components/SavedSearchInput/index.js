import React from "react";

function SavedSearchInput(props) {

    return (
        <div className="add-new-saved-search">
            <input type="text" ref={props.savedSearchRef} name="saved-search-name" className="saved-search-input" placeholder="Saved Search Name"/>
            <input type="submit" name="job-search-btn" value="Save Search"/>
        </div> 
    );
  }


export default SavedSearchInput;
