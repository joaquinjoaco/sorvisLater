import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Ticket = () => {
     return (
          <div className="ticket">
               <Sidebar />
               <div className="content">
                    <Navbar />
                    <div className="formWrapper">
                         <form id="save" className="form">
                              <div className="topGrid">
                                   <div className="gridcontent" id="div1">
                                        <p className="inputLabel">Incident number</p>
                                        <input id="incNum" name="incNum" className="input" type="text" placeholder=" " readOnly />
                                   </div>

                                   <div className="gridcontent" id="div2">
                                        <p className="inputLabel">Requested by</p>
                                        <input id="reqBy" name="reqBy" className="input" type="text" placeholder=" " />
                                   </div>

                                   <div className="gridcontent" id="div3">
                                        <p className="inputLabel">Requested for</p>
                                        <input id="reqFor" name="reqFor" className="input" type="text" placeholder=" " />
                                   </div>

                                   <div className="gridcontent" id="div4">
                                        <p className="inputLabel">Service offering</p>
                                        <input id="srvcOf" name="srvcOf" className="input" type="text" placeholder=" " />
                                   </div>

                                   <div className="gridcontent" id="div5">
                                        <p className="inputLabel">Configuration item</p>
                                        <input id="confItem" name="confItem" className="input" type="text" placeholder=" " />
                                   </div>

                                   <div className="gridcontent" id="div6">
                                        <p className="inputLabel">Contact type</p>
                                        <select id="contactType" name="contactType" className="select">
                                             <option value="Discord">Discord</option>
                                             <option value="ingame">In-game chat</option>
                                             <option value="other">Other</option>
                                        </select>
                                   </div>

                                   <div className="gridcontent" id="div7">
                                        <p className="inputLabel">State</p>
                                        <select id="state" name="State" className="select">
                                             <option value="new">New</option>
                                             <option value="resolved">Resolved</option>
                                             <option value="pendingVendor">Pending (Awaiting vendor)</option>
                                             <option value="pendingAdmin">Pending (Admin action)</option>
                                             <option value="pendingTechnical">Pending (Technical)</option>
                                             <option value="pendingOther">Pending (Other)</option>
                                        </select>
                                   </div>

                                   <div className="gridcontent" id="div8">
                                        <p className="inputLabel">Assigned to</p>
                                        <select id="assigned" name="Assigned" className="select">
                                        </select>
                                   </div>

                                   <div className="gridcontent" id="div9">
                                        <p className="inputLabel">Category</p>
                                        <input id="category" name="Category" className="input" type="text" placeholder=" " />
                                   </div>

                                   <div className="gridcontent" id="div10">
                                        <p className="inputLabel">Symptom</p>
                                        <input id="symptom" name="Symptom" className="input" type="text" placeholder=" " />
                                   </div>

                                   <div className="gridcontent" id="div11">
                                        <p className="inputLabel">Impact</p>
                                        <select id="impact" name="Impact" className="select">
                                             <option value="high">1 - High</option>
                                             <option value="medium">2 - Medium</option>
                                             <option value="low">3 - Low</option>
                                        </select>
                                   </div>

                                   <div className="gridcontent" id="div12">
                                        <p className="inputLabel">Urgency</p>
                                        <select id="urgency" name="Urgency" className="select">
                                             <option value="high">1 - High</option>
                                             <option value="medium">2 - Medium</option>
                                             <option value="low">3 - Low</option>
                                        </select>
                                   </div>

                                   <div className="gridcontent" id="div13">
                                        <p className="inputLabel">Priority</p>
                                        <input id="priority" name="Priority" className="input" type="text" placeholder=" " readOnly />
                                   </div>
                              </div>
                              <div className="bottomGrid" id="">
                                   <p id="shortDescP" className="inputLabel">Short description</p>
                                   <input id="shortDescI" name=" " className="input" type="text" placeholder=" " />

                                   <p id="knowledgeP" className="inputLabel">Knowledge base</p>
                                   <input id="knowledgeI" name=" " className="input" type="text" placeholder=" " />

                                   <p id="worknotesP" className="inputLabel">Worknotes</p>
                                   <textarea id="worknotesI" className="input" type="text" placeholder=" "></textarea>

                                   <p id="addcommentsP" className="inputLabel">Additional comments</p>
                                   <textarea id="addcommentsI" className="input" type="text" placeholder=" "></textarea>
                              </div>
                         </form>
                    </div>
               </div >
          </div >
     );
}

export default Ticket;