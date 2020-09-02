import React, {useRef} from "react";
import Nav from "../components/Nav";

function MyAccount() {

    const fullNameRef = useRef();
    const emailRef = useRef();
    const notifyRef = useRef();

    return (
        <div>
        <Nav/>
          <div className="container">

            <div className="row account-profile">

                <div className="col-12">
                    <h1>My Account</h1>
                </div>

                    <form className="col-12">

                        <div className="row my-account">

                                <div className="col-lg-7 col-md-12">
                                    <label>Name<input type="text" ref={fullNameRef} name="full-name-input" className="full-name-input" placeholder="John Smith"/></label>
                                    <label>Email Address<input type="text" ref={emailRef} name="account-email-input" className="email-input" placeholder="jobseeker@gmail.com"/></label>
                                    <label>Push Notifications for New Jobs<input type="checkbox" ref={notifyRef} name="notify-checkbox" className="notify-checkbox"/></label>
                                </div>

                                <div className="col-lg-5 col-md-12">
                                    <h3>Skills Profile</h3>
                                    <input type="text" name="add-skill-input" className="add-skill-input"/>
                                    <button>Add Skill</button>
                                    <ul className="uk-sortable skills-list" data-uk-sortable>
                                        <li><button className="uk-close-large" type="button" uk-close="true"></button>React</li>
                                        <li><button className="uk-close-large" type="button" uk-close="true"></button>JavaScript</li>
                                    </ul>
                                </div>

                        </div>
                             
                        <input type="submit" className="save-account-changes" value="Save Changes"/>

                    </form>

            </div>

          </div>
        </div>
    );
  }


export default MyAccount;
