import "./index.css";

import { Component } from "react";

class RegistrationForm extends Component {
  state = {
    firstIp: "",
    lastIp: "",
    firstB: false,
    lastB: false,
    submit: false,
  };

  firstChange = (event) => {
    this.setState({ firstIp: event.target.value });
  };

  lastChange = (event) => {
    this.setState({ lastIp: event.target.value });
  };

  firstBlur = (event) => {
    const fb =
      event.target.value === ""
        ? this.setState({ firstB: true })
        : this.setState({ firstB: false });
  };

  lastBlur = (event) => {
    const lb =
      event.target.value === ""
        ? this.setState({ lastB: true })
        : this.setState({ lastB: false });
  };

  submit = (event) => {
    event.preventDefault();
    const { firstIp, lastIp } = this.state;

    if (firstIp === "") {
      this.setState({ firstB: true });
    }

    if (lastIp === "") {
      this.setState({ lastB: true });
    }
    if (firstIp !== "" && lastIp !== "") {
      this.setState((prev) => ({ submit: !prev.submit }));
    }
  };

  render() {
    const { firstIp, lastIp, firstB, lastB, submit } = this.state;
    console.log(firstB);

    return (
      <div className="bg-container">
        <h1 className="h1">Registration</h1>
        <form className="form" onSubmit={this.submit}>
          {submit === false ? (
            <>
              <div className="ip-div">
                <label className="label" htmlFor="first">
                  FIRST NAME
                </label>
                <input
                  value={firstIp}
                  onBlur={this.firstBlur}
                  onChange={this.firstChange}
                  className={firstB === true ? "input input-req" : "input"}
                  id="first"
                  type="text"
                  placeholder="First name"
                />
                {firstB === true ? <p className="p">Required</p> : null}
              </div>
              <div className="ip-div">
                <label className="label" htmlFor="last">
                  LAST NAME
                </label>
                <input
                  value={lastIp}
                  onBlur={this.lastBlur}
                  onChange={this.lastChange}
                  className={lastB === true ? "input input-req" : "input"}
                  id="last"
                  type="text"
                  placeholder="Last name"
                />
                {lastB === true ? <p className="p">Required</p> : null}
              </div>
            </>
          ) : (
            <div className="s-div">
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
              />
              <p>Submitted Successfully</p>
            </div>
          )}
          <button className="btn" type="submit">
            {submit === false ? "Submit" : "Submit Another Response"}
          </button>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;

// import "./index.css";
// import { Component } from "react";
// class RegistrationForm extends Component {
//   state = {
//     isSubmit: false,
//     showFirstReqFeild: false,
//     showLastReqFeild: false,
//     userInpFirst: "",
//     userInpLast: "",
//   };

//   onChangeFirstName = (event) =>
//     this.setState({ userInpFirst: event.target.value.trim() });
//   onChangeLastName = (event) =>
//     this.setState({ userInpLast: event.target.value.trim() });

//   onBlurFirstName = (event) => {
//     event.target.value.trim() === ""
//       ? this.setState({ showFirstReqFeild: true })
//       : this.setState({ showFirstReqFeild: false });
//   };

//   onBlurLastName = (event) => {
//     event.target.value.trim() === ""
//       ? this.setState({ showLastReqFeild: true })
//       : this.setState({ showLastReqFeild: false });
//   };

//   onSubmitDetails = (event) => {
//     event.preventDefault();

//     const { userInpFirst, userInpLast } = this.state;
//     if (userInpFirst === "") {
//       this.setState({ showFirstReqFeild: true });
//     }
//     if (userInpLast === "") {
//       this.setState({ showLastReqFeild: true });
//     }

//     if (userInpFirst !== "" && userInpLast !== "") {
//       this.setState({ isSubmit: true });
//     }
//   };
//   onClickAnotherResponse = () => {
//     this.setState((prevState) => ({
//       isSubmit: !prevState.isSubmit,
//       showFirstReqFeild: false,
//       showLastReqFeild: false,
//       userInpFirst: "",
//       userInpLast: "",
//     }));
//   };
//   render() {
//     const { isSubmit, showFirstReqFeild, showLastReqFeild } = this.state;
//     return (
//       <div className="container">
//         <h1>Registration Form</h1>
//         {isSubmit ? (
//           <div>
//             <p>SUCCESSFULLY SUBMITTED</p>
//             <button onClick={this.onClickAnotherResponse} className="btn">
//               submit another response
//             </button>
//           </div>
//         ) : (
//           <form onSubmit={this.onSubmitDetails}>
//             <label htmlFor="firstname">FIRSTNAME</label>
//             <br />
//             <input
//               type="text"
//               id="firstname"
//               onBlur={this.onBlurFirstName}
//               onChange={this.onChangeFirstName}
//             />
//             <p>{showFirstReqFeild && "*required feild"}</p>
//             <br />
//             <label htmlFor="lastname">LASTNAME</label>
//             <br />
//             <input
//               type="text"
//               id="lastname"
//               onBlur={this.onBlurLastName}
//               onChange={this.onChangeLastName}
//             />
//             <p>{showLastReqFeild && "*required feild"}</p>
//             <br />
//             <button className="btn" type="submit">
//               submit
//             </button>
//           </form>
//         )}
//       </div>
//     );
//   }
// }
// export default RegistrationForm;
