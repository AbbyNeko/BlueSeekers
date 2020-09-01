import React from "react";

function SavedSearchList() {

  return (

        <li>
            <a className="uk-accordion-title" href="#">Saved Job Searches</a>
            <div className="uk-accordion-content">
                <ul>
                    <li><button className="uk-close-large" type="button" uk-close="true"></button><a href="#">Default Search</a></li>
                </ul>
            </div>
        </li>

  );
}

export default SavedSearchList;
