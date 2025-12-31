
import PageMap from "./PageMap";
import '../../Styles/mainContentCSS.css';

function MainContent(props) {
  
  return (
    <>
      <div className="mainContent">
        <PageMap page={props.page} />
      </div>
    </>
  );
}

export default MainContent;
