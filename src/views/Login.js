import { useHistory } from "react-router-dom";

const Login = () => {

     const history = useHistory();

     const handleClick = (e) => {
          e.preventDefault();
          history.push('/home');
     }

     return (
          <div className="login-wrapper">
               <div className="formWrapper login">
                    <form className="form-login">
                         <p className="subtitle login">Log in now, or<span> later!</span></p>
                         <p className="title login">sorvis<span>Later</span></p>
                         <div className="input-container ic1 login">
                              <input className="input login" type="text" placeholder=" " />
                              <div className="cut"></div>
                              <label className="placeholder">Username</label>
                         </div>
                         <div className="input-container ic2 login">
                              <input className="input login" type="password" placeholder=" " />
                              <div className="cut"></div>
                              <label className="placeholder">Password</label>
                         </div>
                         <button onClick={handleClick} className="loginBtn">login</button>
                    </form>
               </div >
          </div>

     );
}

export default Login;