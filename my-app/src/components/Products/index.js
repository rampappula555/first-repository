import "./index.css";
import Header from "../Header";
import PrimeDealsSection from "../PrimeDealsSection";
import { Component } from "react";
import Cookies from "js-cookie";
import ProductsHeader from "../ProductsHeader";
import FiltersGroup from "../FiltersGroup";
import { Link } from "react-router-dom";

const categoryOptions = [
  {
    name: "Clothing",
    categoryId: "1",
  },
  {
    name: "Electronics",
    categoryId: "2",
  },
  {
    name: "Appliances",
    categoryId: "3",
  },
  {
    name: "Grocery",
    categoryId: "4",
  },
  {
    name: "Toys",
    categoryId: "5",
  },
];

const sortbyOptions = [
  {
    optionId: "PRICE_HIGH",
    displayText: "Price (High-Low)",
  },
  {
    optionId: "PRICE_LOW",
    displayText: "Price (Low-High)",
  },
];

const ratingsList = [
  {
    ratingId: "4",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/rating-four-stars-img.png",
  },
  {
    ratingId: "3",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png",
  },
  {
    ratingId: "2",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/rating-two-stars-img.png",
  },
  {
    ratingId: "1",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/rating-one-star-img.png",
  },
];

class Products extends Component {
  state = {
    allProducts: [],
    activeOptionId: sortbyOptions[0].optionId,
    category: "",
    titleSearch: "",
    rating: "",
  };
  componentDidMount() {
    this.getProducts();
  }
  getProducts = async () => {
    const { activeOptionId, category, titleSearch, rating } = this.state;
    const jwtToken = Cookies.get("jwt_token");
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken} `,
      },
    };

    const response = await fetch(
      `https://apis.ccbp.in/products?sort_by=${activeOptionId}&category=${category}&title_search=${titleSearch}&rating=${rating}`,
      options
    );
    const data = await response.json();
    console.log(response);
    console.log(data);
    if (response.ok === true) {
      const updatedData = data.products.map((eachProduct) => ({
        imageUrl: eachProduct.image_url,
        id: eachProduct.id,
        title: eachProduct.title,
      }));
      this.setState({ allProducts: updatedData });
    }
  };
  onChangeOptionId = (value) =>
    this.setState({ activeOptionId: value }, this.getProducts);

  onGivenRating = (value) => this.setState({ rating: value }, this.getProducts);
  onClickEnter = (value) => {
    this.setState({ titleSearch: value }, this.getProducts);
  };
  render() {
    const { allProducts, activeOptionId } = this.state;
    return (
      <div>
        <Header />
        <PrimeDealsSection />
        <div>
          <ProductsHeader
            sortbyOptions={sortbyOptions}
            activeOptionId={activeOptionId}
            onChangeOptionId={this.onChangeOptionId}
            onClickEnter={this.onClickEnter}
          />
          <div className="filter-images">
            <FiltersGroup
              ratingsList={ratingsList}
              onGivenRating={this.onGivenRating}
              categoryOptions={categoryOptions}
            />
            <div className="images-container">
              {allProducts.map((eachProduct) => (
                <div key={eachProduct.id}>
                  <Link to={`/products/${eachProduct.id}`}>
                    <img
                      src={eachProduct.imageUrl}
                      className="product-image"
                      alt="img"
                    />
                    <p>{eachProduct.title}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Products;
