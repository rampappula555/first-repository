import "./index.css";

import ContentContext from "../../context";

const ConfigurationController = () => (
  <ContentContext.Consumer>
    {(value) => {
      const {
        content,
        onToggleContent,
        leftNavbar,
        onToggleLeft,
        rightNavbar,
        onToggleRight,
      } = value;

      const onClickContent = () => onToggleContent();

      const onClickLeft = () => onToggleLeft();

      const onClickRight = () => onToggleRight();

      return (
        <div>
          <h1>Layout</h1>

          <input
            checked={content}
            onChange={onClickContent}
            id="content"
            type="checkbox"
          />
          <label htmlFor="content">Content</label>
          <input
            checked={leftNavbar}
            onChange={onClickLeft}
            id="left"
            type="checkbox"
          />
          <label htmlFor="left">Left Navbar</label>
          <input
            checked={rightNavbar}
            onChange={onClickRight}
            id="right"
            type="checkbox"
          />
          <label htmlFor="right">Right navbar</label>
        </div>
      );
    }}
  </ContentContext.Consumer>
);

export default ConfigurationController;
