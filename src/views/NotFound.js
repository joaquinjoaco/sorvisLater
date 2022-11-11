import { Link } from "react-router-dom";

const NotFound = () => {
     return (
          <div className="not-found">
               <h2 className="h2-notfound">
                    Oops!
               </h2>
               <h1 className="h1-notfound">
                    Sorry, we could not find that page.
               </h1>
               <Link to="/home" className="link-notfound">Go to the homepage 👋</Link>
          </div>
     );
}

export default NotFound;