import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
     // create some state as boolean to open/close the menu.
     const [close, setClose] = useState(true);
     // set the value to the opposite on click.
     const toggleMenu = () => {
          setClose(!close);
     }

     return (
          <nav className={close ? 'sidebar close' : 'sidebar'}>
               <header>
                    <div className="image-text">
                         <span className="image">
                         </span>

                         <div className="text logo-text">
                              <span className="name">Sorvis<span>Later</span></span>
                              <span className="adminName">%adminName%</span>
                         </div>
                    </div>

                    <i onClick={toggleMenu} className="bx bx-chevron-right toggle"></i>
               </header>

               <div className="menu-bar">
                    <div className="menu">
                         <li className="search-box">
                              <i className="bx bx-search icon"></i>
                              <input type="text" placeholder="Search KB, INC" />
                         </li>

                         <ul className="menu-links">
                              <li className="nav-link">
                                   <Link to="/ticket">
                                        <i className="bx bx-edit icon"></i>
                                        <span className="text nav-text">New incident</span>
                                   </Link>
                              </li>

                              <li className="nav-link">
                                   <Link to="/kbarticle"> <i className="bx bx-book-add icon"></i> <span className="text nav-text">New KB Article</span> </Link>
                              </li>

                              <li className="nav-link">
                                   <Link to="/incidents">
                                        <i className="bx bx-cabinet icon"></i>
                                        <span className="text nav-text">Incidents</span>
                                   </Link>
                              </li>

                              <li className="nav-link">
                                   <Link to="/assigned">
                                        <i className="bx bx-user-pin icon"></i>
                                        <span className="text nav-text">My incidents</span>
                                   </Link>
                              </li>

                              <li className="nav-link">
                                   <Link to="/knowledgebasearticles">
                                        <i className="bx bx-book-bookmark icon"></i>
                                        <span className="text nav-text">KB articles</span>
                                   </Link>
                              </li>

                              <li className="nav-link">
                                   <Link to="/home">
                                        <i className="bx bx-bar-chart icon"></i>
                                        <span className="text nav-text">Backlog</span>
                                   </Link>
                              </li>
                         </ul>
                    </div>

                    <div className="bottom-content">
                         <li className="nav-link">
                              <Link to="/login" href="index.html">
                                   <i className="bx bx-log-out icon"></i>
                                   <span className="text nav-text">Logout</span>
                              </Link>
                         </li>
                    </div>
               </div>
          </nav>

     );
}

export default Sidebar;