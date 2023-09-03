import { Page, Text, Document, StyleSheet } from "@react-pdf/renderer";
const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",

    fontFamily: "Times-Roman",
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "gray",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "gray",
  },
});

const PDFFile = () => {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed></Text>
        <Text style={styles.text}>
          <Text style={styles.title}>
            1.What is the difference between uncontrolled and controlled
            components?
          </Text>
          <Text style={styles.text}>
            Ans: Controlled components means the components that have their
            state and behavior controlled by the parent component and
            uncontrolled components means the components that manage their own
            state internally.
          </Text>
          <Text style={styles.title}>
            2.How to validate React props using PropTypes?
          </Text>
          <Text style={styles.text}>
            Ans: At first, we have to install prop-types library.
          </Text>
          <Text style={styles.title}>
            3.Difference between nodejs and express js?
          </Text>
          <Text style={styles.text}>
            Ans: Node.js is a run-time environment created to run JavaScript on
            the server side.Express.js is a framework for Node.js.
          </Text>
        </Text>

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed></Text>
      </Page>
    </Document>
  );
};

export default PDFFile;
