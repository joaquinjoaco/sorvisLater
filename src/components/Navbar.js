import { Link, useHistory } from "react-router-dom";

const Navbar = () => {

     const history = useHistory();

     const handleClick = (e) => {
          e.preventDefault();
          history.push('/home');
     }

     return (
          <nav className="navbar">
               <div className="navbar__container">
                    <Link to="/home" className="navbar__title">sorvis<span>Later</span></Link>

                    <ul className="navbar__menu">
                         <li className="navbar__btn">
                              <button onClick={handleClick} className="button nav">Save</button>
                         </li>
                    </ul>
               </div>
          </nav>
     );
}

export default Navbar;