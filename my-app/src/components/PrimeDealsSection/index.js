import "./index.css";
import { LineWave } from "react-loader-spinner";
import { Component } from "react";
const apiStatusConst = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  process: "PROCESS",
};
class PrimeDealsSection extends Component {
  state = { primeList: [], apiStatus: apiStatusConst.initial };
  componentDidMount() {
    this.getDeals();
  }
  getDeals = async () => {
    this.setState({ apiStatus: apiStatusConst.process });
    const options = {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU",
      },
    };
    const response = await fetch("https://apis.ccbp.in/prime-deals", options);
    const data = await response.json();
    console.log(response);
    console.log(data);
    if (response.ok === true) {
      const updatedData = data.prime_deals.map((eachData) => ({
        imageUrl: eachData.image_url,
        id: eachData.id,
      }));
      this.setState({
        primeList: updatedData,
        apiStatus: apiStatusConst.success,
      });
    } else if (response.status === 401) {
      this.setState({ apiStatus: apiStatusConst.failure });
    }
  };
  getPrimeDeals = () => {
    const { primeList } = this.state;
    return (
      <div>
        {primeList.map((eachData) => (
          <img
            className="image"
            src={eachData.imageUrl}
            alt="img"
            key={eachData.id}
          />
        ))}
      </div>
    );
  };
  getFailure = () => <h1>Failed</h1>;
  getProcess = () => (
    <div>
      <LineWave type="ThreeDots" color="#0b69ff" height="200" width="250" />
    </div>
  );

  render() {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case apiStatusConst.success:
        return this.getPrimeDeals();
      case apiStatusConst.failure:
        return this.getFailure();
      case apiStatusConst.process:
        return this.getProcess();
      default:
        return null;
    }
  }
}
export default PrimeDealsSection;
