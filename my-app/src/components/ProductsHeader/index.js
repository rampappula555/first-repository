import "./index.css";
import { Component } from "react";
class ProductsHeader extends Component {
  state = { userInp: "" };
  onChangeFilter = (event) => {
    const { onChangeOptionId } = this.props;
    onChangeOptionId(event.target.value);
  };

  onChangeUserInp = (event) => this.setState({ userInp: event.target.value });
  onKeyDownEvent = (event) => {
    if (event.key === "Enter") {
      const { userInp } = this.state;
      const { onClickEnter } = this.props;
      onClickEnter(userInp);
    }
  };

  render() {
    const { userInp } = this.state;
    const { sortbyOptions, activeOptionId } = this.props;
    return (
      <div className="all-products-header">
        <input
          type="search"
          value={userInp}
          onKeyDown={this.onKeyDownEvent}
          onChange={this.onChangeUserInp}
        />
        <select value={activeOptionId} onChange={this.onChangeFilter}>
          {sortbyOptions.map((eachOption) => (
            <option value={eachOption.optionId} key={eachOption.optionId}>
              {eachOption.displayText}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
export default ProductsHeader;
