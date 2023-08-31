"./Gallery.css";
const Gallery = () => {
  const foods = [
    "../../../public/bhunakichuri.jpg",
    "../../../public/dal.jpg",
    "../../../public/kacchi.png",
    "../../../public/kalabhuna.jpg",
    "../../../public/shikkabab.jpeg",
    "../../../public/shrosheilish.jpg",
    "../../../public/bortha.jpg",
    "../../../public/fuchka.jpg",
  ];

  return (
    <div className="row row-cols-2 row-cols-sm-3 mt-5 mx-auto gap-4">
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
