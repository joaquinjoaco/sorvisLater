import Sidebar from "../components/Sidebar";

const Incidents = () => {
     return (
          <div className="incidents">
               <Sidebar />
               <div className="content">
                    <p className="title">Incidents</p>
                    <div className="resultsWrapper">
                         <div className="result">
                              <p className="kbID">INC0000038</p>
                              <p className="kbTitle">lack of sex</p>
                              <button onclick="location.href='/ticket'" className="button" form="save">Open</button>
                         </div>

                         <div className="result">
                              <p className="kbID">INC0000039</p>
                              <p className="kbTitle">postulación staff</p>
                              <button onclick="location.href='ticket.html'" className="button" form="save">Open</button>
                         </div>
                         <div className="result">
                              <p className="kbID">INC0000040</p>
                              <p className="kbTitle">items</p>
                              <button onclick="location.href='ticket.html'" className="button" form="save">Open</button>
                         </div>
                         <div className="result">
                              <p className="kbID">INC0000041</p>
                              <p className="kbTitle">ayuda-svmati</p>
                              <button onclick="location.href='ticket.html'" className="button" form="save">Open</button>
                         </div>
                         <div className="result">
                              <p className="kbID">INC0000041</p>
                              <p className="kbTitle">aldeanos</p>
                              <button onclick="location.href='ticket.html'" className="button" form="save">Open</button>
                         </div>
                         <div className="result">
                              <p className="kbID">INC0000041</p>
                              <p className="kbTitle">cuenta</p>
                              <button onclick="location.href='ticket.html'" className="button" form="save">Open</button>
                         </div>
                         <div className="result">
                              <p className="kbID">INC0000041</p>
                              <p className="kbTitle">fpspack-crash</p>
                              <button onClick="location.href='ticket.html'" className="button" form="save">Open</button>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Incidents;