import banner from "../../../assets/hilisha.jpg";
import "./Home.css";
import Chefs from "../Chefs/Chefs";
import { Card, CardGroup, Container } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <div className=" d-flex flex-column   flex-sm-row gap-4 align-items-center  bg-warning">
        <img className="banner img-fluid" src={banner} alt="" />

        <div className="text-center mt-4  w-100">
          <h1 className="title ">Test the Bengali foods</h1>
          <h4>with the touch of the best chefs of Bangladesh</h4>
        </div>
      </div>
      <Container>
        <div className="mt-5">
          <h1 className="text-center mt-3 mb-5">
            6 well known chefs of Bangladesh
          </h1>
          <Chefs></Chefs>
        </div>{" "}
        <section className="mt-5 ">
          <h1 className="text-center mb-5">Best recipe of each chef</h1>
          <CardGroup className="gap-4 mb-5">
            <Card className="border">
              <Card.Img
                className="p-3 img-fluid"
                style={{ height: "300px" }}
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOJTN3I5l98fSspfTdwEDF7TsvdWlj8QiNjXw-mrVLpQHDk46rMFdppjfXHDpUqefgrYE&usqp=CAU"
              />
              <Card.Body>
                <Card.Title>Shorshe Ilish (Mustard Hilsa)</Card.Title>
                <Card.Text className="fw-semibold">
                  <span className="fw-bold">Chef</span> Kamal Hossain
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="border">
              <Card.Img
                className="p-3"
                style={{ height: "300px" }}
                variant="top"
                src="https://img-global.cpcdn.com/recipes/0c64af79db763257/1200x630cq70/photo.jpg"
              />
              <Card.Body>
                <Card.Title>Spicy Chicken Curry</Card.Title>
                <Card.Text className="fw-semibold">
                  <span className="fw-bold">Chef</span> Abdul Rahman
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="border">
              <Card.Img
                className="p-3"
                style={{ height: "300px" }}
                variant="top"
                src="https://nishkitchen.com/wp-content/uploads/2016/04/Lamb-Korma-B-480x480.jpg"
              />
              <Card.Body>
                <Card.Title>Lamb Korma</Card.Title>
                <Card.Text className="fw-semibold">
                  <span className="fw-bold">Chef</span>
                  Imran Ahmed
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
          <CardGroup className="gap-4">
            <Card className="border">
              <Card.Img
                className="p-3 img-fluid "
                style={{ height: "300px" }}
                variant="top"
                src="https://www.saveur.com/uploads/2019/02/08/GG4TS7RE3O7XBRYPKGQ2RLS3NY-e1630714905711.jpg?auto=webp&auto=webp&optimize=high&quality=70&width=1440"
              />
              <Card.Body>
                <Card.Title>Chicken Kebab</Card.Title>
                <Card.Text className="fw-semibold">
                  <span className="fw-bold">Chef</span>
                  Kamal Ahmed
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="border">
              <Card.Img
                className="p-3 img-fluid"
                style={{ height: "300px" }}
                variant="top"
                src="https://i0.wp.com/palatablepastime.com/wp-content/uploads/2017/12/fish-bhuna-sq.jpg?resize=500%2C500&ssl=1"
              />
              <Card.Body>
                <Card.Title>Fish Bhuna</Card.Title>
                <Card.Text className="fw-semibold">
                  <span className="fw-bold">Chef</span>
                  Nasir Uddin
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="border">
              <Card.Img
                className="p-3 img-fluid"
                style={{ height: "300px" }}
                variant="top"
                src="https://yellowchilis.com/wp-content/uploads/2020/11/chicken-biryani-pressure-cooker-south-india-square-500x500.jpg"
              />
              <Card.Body>
                <Card.Title>Mutton Curry</Card.Title>
                <Card.Text className="fw-semibold">
                  <span className="fw-bold">Chef</span> Saif Hasan
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </section>
        <section className="mt-5">
          <h1 className="mb-5 text-center">Categories</h1>
          <CardGroup className="gap-4">
            <Card className="border">
              <Card.Img
                className="p-3 img-fluid"
                style={{ height: "300px" }}
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOJTN3I5l98fSspfTdwEDF7TsvdWlj8QiNjXw-mrVLpQHDk46rMFdppjfXHDpUqefgrYE&usqp=CAU"
              />
              <Card.Body>
                <Card.Title>Fish</Card.Title>
              </Card.Body>
            </Card>
            <Card className="border">
              <Card.Img
                className="p-3 img-fluid"
                style={{ height: "300px" }}
                variant="top"
                src="https://yellowchilis.com/wp-content/uploads/2020/11/chicken-biryani-pressure-cooker-south-india-square-500x500.jpg"
              />
              <Card.Body>
                <Card.Title>Chicken</Card.Title>
              </Card.Body>
            </Card>
            <Card className="border">
              <Card.Img
                className="p-3 img-fluid"
                style={{ height: "300px" }}
                variant="top"
                src="https://yellowchilis.com/wp-content/uploads/2020/11/chicken-biryani-pressure-cooker-south-india-square-500x500.jpg"
              />
              <Card.Body>
                <Card.Title>Biryani</Card.Title>
              </Card.Body>
            </Card>
          </CardGroup>
          <CardGroup className="gap-4 mt-4">
            <Card className="border">
              <Card.Img
                className="p-3 img-fluid"
                style={{ height: "300px" }}
                variant="top"
                src="https://www.dinneratthezoo.com/wp-content/uploads/2019/02/vegetable-stir-fry-3-500x500.jpg"
              />
              <Card.Body>
                <Card.Title>Vegetable</Card.Title>
              </Card.Body>
            </Card>
            <Card className="border">
              <Card.Img
                className="p-3 img-fluid"
                style={{ height: "300px" }}
                variant="top"
                src="https://yellowchilis.com/wp-content/uploads/2020/11/chicken-biryani-pressure-cooker-south-india-square-500x500.jpg"
              />
              <Card.Body>
                <Card.Title>Mutton</Card.Title>
              </Card.Body>
            </Card>
            <Card className="border">
              <Card.Img
                className="p-3 img-fluid"
                style={{ height: "300px" }}
                variant="top"
                src="https://www.bigbasket.com/media/uploads/recipe/w-l/2582_1_1.jpg"
              />
              <Card.Body>
                <Card.Title>Chutney</Card.Title>
              </Card.Body>
            </Card>
          </CardGroup>
        </section>
      </Container>
    </div>
  );
};

export default Home;
