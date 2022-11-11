import { useHistory } from "react-router-dom";

const Card = ({ id, title, path }) => {

     const history = useHistory();

     const handleClick = (e) => {
          e.preventDefault();
          history.push(path);
     }

     return (
          <div className="result">
               <p className="kbID">{id}</p>
               <p className="kbTitle">{title}</p>
               <button onClick={handleClick} className="button">Open</button>
          </div>
     );
}

export default Card;