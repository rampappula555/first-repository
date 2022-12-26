import "./index.css";
const Alert = (props) => {
  const { children } = props;
  console.log(children);
  return <div>{children}</div>;
};
export default Alert;
