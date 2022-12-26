import "./index.css";
const FiltersGroup = (props) => {
  const { categoryOptions, ratingsList } = props;
  const onClickRating = () => console.log("ram");
  return (
    <div>
      <h4>CATEGORIES</h4>
      {categoryOptions.map((eachCategory) => (
        <p key={eachCategory.categoryId}>{eachCategory.name}</p>
      ))}
      <h4>RATING</h4>
      {ratingsList.map((eachRating) => (
        <div className="btn-container" key={eachRating.ratingId}>
          <img
            onClick={onClickRating}
            className="rating-image"
            src={eachRating.imageUrl}
            alt="img"
          />
          <p>& up</p>
        </div>
      ))}
    </div>
  );
};
export default FiltersGroup;
