import { Container } from "react-bootstrap";
import PDFFile from "../PDFFile";
import PDFDownload from "../PDFDownload";

const Blog = () => {
  return (
    <Container>
      <PDFDownload></PDFDownload>
      <PDFFile></PDFFile>
    </Container>
  );
};

export default Blog;
