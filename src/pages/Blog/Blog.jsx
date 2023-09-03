import { Container } from "react-bootstrap";

const Blog = () => {
  return (
    <Container>
      <div className="mt-5">
        <h1 className="text-center text-3xl">Blogs</h1>
        <h1>
          1.What is the difference between uncontrolled and controlled
          components?
        </h1>
        <h3>
          Ans: Controlled components means the components that have their state
          and behavior controlled by the parent component and uncontrolled
          components means the components that manage their own state
          internally.
        </h3>
        <h1>2.How to validate React props using PropTypes?</h1>
        <h3>Ans: At first, we have to install prop-types library.</h3>
        <h1>3.Difference between nodejs and express js?</h1>
        <h3>
          Ans: Node.js is a run-time environment created to run JavaScript on
          the server side.Express.js is a framework for Node.js.
        </h3>
      </div>
    </Container>
  );
};

export default Blog;
