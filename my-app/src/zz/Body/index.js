import "./index.css";
import ContentContext from "../../context";
const Body = () => (
  <ContentContext.Consumer>
    {(value) => {
      const { content, leftNavbar, rightNavbar } = value;
      console.log(leftNavbar);
      return (
        <div className="body-container">
          {leftNavbar && (
            <div className="left">
              <h1>left navbar menu</h1>
            </div>
          )}
          {content && (
            <div className="mid">
              <h1>content</h1>
            </div>
          )}
          {rightNavbar && (
            <div className="right">
              <h1>right navbar</h1>
            </div>
          )}
        </div>
      );
    }}
  </ContentContext.Consumer>
);
export default Body;
