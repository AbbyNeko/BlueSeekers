import React, {useRef} from "react";

function RegisterAccount() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();

    return (
        <div className="container">
    
                 <div className="row">
                  <div className="col-lg-12">
                    <a className="devseekers-logo center-logo" href="/"><span className="dev-part">Dev</span>Seekers</a>
                  </div>
                </div>   

                <div className="row sign-up-section">
                    <form className="col-lg-12 sign-up-form">
                        <input type="text" ref={firstNameRef} name="first-name" className="first-name-input" placeholder="First Name"/>
                        <input type="text" ref={lastNameRef} name="last-name" className="last-name-input" placeholder="Last Name"/>
                        <input type="email" ref={emailRef} name="email" className="email-input" placeholder="Email Address"/>
                        <input type="password" ref={passwordRef} name="password" className="password-input" placeholder="Password"/>
                        <input type="submit" name="sign-up-btn" className="sign-up-btn" value="Sign Up"/>
                    </form>   
                    <p>Already have an account? Login <a href="/login">here.</a> </p>            
                </div>

        </div>
    );
  }


export default RegisterAccount;
