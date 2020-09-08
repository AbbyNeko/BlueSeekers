import React from "react";

function SkillsProfile(props) {

  return (

        <div className="col-lg-5 col-md-12">
            <h3><strong>Skills Profile</strong></h3>
            <input type="text" name="add-skill-input" className="add-skill-input"/>
            <button>Add Skill</button>
            <ul className="uk-sortable skills-list" data-uk-sortable>
                <li><button className="uk-close-large" type="button" uk-close="true"></button>React</li>
                <li><button className="uk-close-large" type="button" uk-close="true"></button>JavaScript</li>
            </ul>
        </div>
        
  );
}

export default SkillsProfile;
