import React, {useRef} from "react";

function Login() {

    const emailRef = useRef();
    const passwordRef = useRef();

    return (
        <div className="container">
    
                 <div className="row">
                  <div className="col-lg-12">
                    <a className="devseekers-logo center-logo" href="/"><span className="dev-part">Dev</span>Seekers</a>
                  </div>
                </div>   

                <div className="row login-section">
                    <form className="col-lg-12 login-form">
                        <input type="email" ref={emailRef} name="email" className="email-input" placeholder="Email Address"/>
                        <input type="password" ref={passwordRef} name="password" className="password-input" placeholder="Password"/>
                        <input type="submit" name="login-btn" className="login-btn" value="Login"/>
                    </form>   
                    <p>Don't have an account? Sign up <a href="/sign-up">here.</a> </p>            
                </div>

        </div>
    );
  }


export default Login;
