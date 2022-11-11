import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Home = () => {

     return (
          <div className="home">
               <Sidebar />
               <div className="content">
                    <div className="backlog">
                         <p className="bLogTitle">Backlog</p>
                         <div className="backlogGrid">
                              <div className="resolved">
                                   <Link to="/incidents" className="rBtn">
                                        <p className="rCount">90</p>
                                        <p className="rLabel">Resolved</p>
                                   </Link>
                              </div>
                              <div className="inProgress">
                                   <Link to="/incidents" className="ipBtn">
                                        <p className="ipCount">3</p>
                                        <p className="ipLabel">Pending</p>
                                   </Link>
                              </div>
                              <div className="new">
                                   <Link to="/incidents" className="nBtn">
                                        <p className="nCount">1</p>
                                        <p className="nLabel">New</p>
                                   </Link>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Home;