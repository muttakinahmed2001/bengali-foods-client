"./Gallery.css";

import { Container } from "react-bootstrap";

const Gallery = () => {
  const foods = [
    "https://rumkisgoldenspoon.com/wp-content/uploads/2021/05/Bhuna-khichuri-recipe-585x585.jpg",
    "https://www.cookinwithmima.com/wp-content/uploads/2020/04/lebanese-lentil-soup-5.jpg",
    "https://www.tbsnews.net/sites/default/files/styles/big_3/public/images/2020/09/25/dhaka-kachchi-tbs.jpg",
    "https://www.tbsnews.net/sites/default/files/styles/big_3/public/images/2022/07/10/kalabhuna.jpg",
    "https://www.ndtv.com/cooks/images/seekh-kebab-620.jpg",
    "https://img-global.cpcdn.com/recipes/43c47858c7446283/400x400cq70/photo.jpg",
    "https://i0.wp.com/cookingcanary.com/wp-content/uploads/2022/07/Begun-bhorta-in-serving-dish.jpg?resize=600%2C530&ssl=1",
    "https://static.toiimg.com/thumb/imgsize-23456,msid-93980278,width-600,resizemode-4/93980278.jpg",
  ];

  return (
    <div
      style={{ marginTop: "150px", marginBottom: "150px" }}
      className="row row-cols-2 row-cols-sm-4  ">
      {foods.map((food, index) => (
        <div
          className="col"
          style={{ width: "200px", height: "200px" }}
          key={index}>
          <img className="img-fluid w-100 h-100" src={food}></img>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
