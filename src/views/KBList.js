import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
const KBList = () => {
     return (
          <div className="KBList">
               <Sidebar />
               <div className="content">
                    <p className="titleKB">Knowledge base articles</p>
                    <div className="resultsWrapper">
                         <Card id='KB0000001' title='Account migrations' path='/kbarticle' />
                         <Card id='KB0000002' title='Coreblock tips & tricks' path='/kbarticle' />
                         <Card id='KB0000003' title='Basic moderation commands' path='/kbarticle' />
                         <Card id='KB0000004' title='How to control situations that are in the grey zones of the rules' path='/kbarticle' />
                         <Card id='KB0000005' title='ActionHouse tips & tricks' path='/kbarticle' />
                         <Card id='KB0000006' title='Mcmmo party chat spy' path='/kbarticle' />
                         <Card id='KB0000007' title='CE Enchantment removal' path='/kbarticle' />
                         <Card id='KB0000008' title='Steps to check for aura, autoClicker, autoEat' path='/kbarticle' />

                    </div>
               </div>

          </div>
     );
}

export default KBList;