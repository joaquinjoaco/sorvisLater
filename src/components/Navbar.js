import { Link } from "react-router-dom";

const Navbar = () => {
     return (
          <nav className="navbar">
               <div className="navbar__container">
                    <Link to="/home" className="navbar__title">sorvis<span>Later</span></Link>

                    <ul className="navbar__menu">
                         <li className="navbar__btn">
                              <button className="button nav">Save</button>
                         </li>
                    </ul>
               </div>
          </nav>
     );
}

export default Navbar;