import Card from "../components/Card";
import Sidebar from "../components/Sidebar";

const Assigned = () => {
     return (
          <div className="assigned">
               <Sidebar />
               <div className="content">
                    <p className="titleKB">My assigned incidents</p>
                    <div className="resultsWrapper">
                         <Card id='INC0000038' title='voter-keys' path='/ticket' />
                         <Card id='INC0000044' title='account-migration' path='/ticket' />
                         <Card id='INC0000047' title='structure-relocation' path='/ticket' />
                    </div>
               </div>
          </div>
     );
}

export default Assigned;