import Card from "../components/Card";
import Sidebar from "../components/Sidebar";

const Incidents = () => {
     return (
          <div className="incidents">
               <Sidebar />
               <div className="content">
                    <p className="title">Incidents</p>
                    <div className="resultsWrapper">

                         <Card id='INC0000038' title='voter-keys' path='/ticket' />
                         <Card id='INC0000039' title='spawn-error' path='/ticket' />
                         <Card id='INC0000040' title='online-shop-error' path='/ticket' />
                         <Card id='INC0000041' title='supplies-issue' path='/ticket' />
                         <Card id='INC0000042' title='account-migration' path='/ticket' />
                         <Card id='INC0000043' title='account-migration' path='/ticket' />
                         <Card id='INC0000044' title='account-migration' path='/ticket' />
                         <Card id='INC0000045' title='bug-lost-pickaxe' path='/ticket' />
                         <Card id='INC0000046' title='bug-player-death' path='/ticket' />
                         <Card id='INC0000047' title='structure-relocation' path='/ticket' />

                    </div>
               </div>
          </div>
     );
}

export default Incidents;