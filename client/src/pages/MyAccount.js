import React, {useRef, useState} from "react";
import Nav from "../components/Nav";
import API from "../utils/API";


function MyAccount() {

  const [isLoggedIn, setLogin] = useState(false);

//checks if logged in
if(!isLoggedIn) {
  API.isLoggedIn()
    .then(res => {
      
      if(res.data.message === "no auth") {
        setLogin(false);
      } else {
        setLogin(true);
      }

    })
    .catch(err => console.log(err));
}

    const fullNameRef = useRef();
    const emailRef = useRef();
    const notifyRef = useRef();

    return (
        <div>
        <Nav isLoggedIn={isLoggedIn}/>
          <div className="container">

            <div className="row account-profile">

                <div className="col-12">
                    <h1>My Account</h1>
                </div>

                    <form className="col-12">

                        <div className="row my-account">

                                <div className="col-lg-7 col-md-12">
                                    <label>Name<input type="text" ref={fullNameRef} name="full-name-input" className="full-name-input" placeholder="John Smith"/></label>
                                    <label>Email Address<input type="text" ref={emailRef} name="account-email-input" className="account-email-input" placeholder="jobseeker@gmail.com"/></label>
                                    <label>Push Notifications for New Jobs<input type="checkbox" ref={notifyRef} name="notify-checkbox" className="notify-checkbox"/></label>
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
