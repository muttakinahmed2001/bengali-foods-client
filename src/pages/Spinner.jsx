const Spinner = () => {
  return (
    <div>
      <section>
        {" "}
        <div
          style={{ height: "400px" }}
          className="d-flex justify-content-center align-items-center">
          <div id="spin" className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Spinner;
