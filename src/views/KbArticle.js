import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const KbArticle = () => {
     return (
          <div className="kbarticle">
               <Sidebar />
               <div className="content">
                    <Navbar />
                    <div className="formWrapper">
                         <form id="save" className="form">
                              <div className="bottomGrid kb" id="">
                                   <p id="kbArticlePkb" className="inputLabel kb">Knowledge article id</p>
                                   <input id="kbArticleIkb" name="kbarticle" className="input kb" type="text" placeholder=" " readOnly />

                                   <p id="titlePkb" className="inputLabel kb">Title</p>
                                   <input id="titleIkb" name="title" className="input kb" type="text" placeholder=" " />

                                   <p id="knowledgePkb" className="inputLabel kb">Knowledge</p>
                                   <textarea id="knowledgeIkb" name="knowledge" className="input kb" type="text" placeholder=" "></textarea>
                              </div>
                         </form>

                    </div>
               </div>
          </div>
     );
}

export default KbArticle;