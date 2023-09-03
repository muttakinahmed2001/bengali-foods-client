import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFFile from "./PDFFile";
import { Spinner } from "react-bootstrap";

const PDFDownload = () => {
  return (
    <PDFDownloadLink document={<PDFFile />} fileName="Blog">
      {({ loading }) =>
        loading ? (
          <Spinner />
        ) : (
          <button className="btn btn-primary">Download</button>
        )
      }
    </PDFDownloadLink>
  );
};

export default PDFDownload;
