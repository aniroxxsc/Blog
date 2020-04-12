import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './mainarea.css';
import blog from './blog.png';
function Mainarea(){
    return(
        <Router>
        <div className="index">
        <div className="index-appside"><img src={blog} width="512px" height="512px" mode="fit"></img></div>
        <div className="index-formside">
         
        
        
              <form>
                <div><a href="#"className="FormTitle__Link">Signin</a>|<a href="#" className="FormTitle__Link">Signup</a></div>
                <div className="form-group">
                    <label >Email address</label>
                    <input type="email" className="form-control"  />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control"  />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="button">Submit</button>
                <p className="forgot-password-text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        
             
          
      </div>
       </div>
       </Router>
    );
}
export default Mainarea;

