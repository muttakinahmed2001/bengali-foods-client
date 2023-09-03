import { useContext, useEffect, useState } from "react";
import Chef from "../Chef/Chef";
import "./Chefs.css";
import { AuthContext } from "../../../providers/AuthProvider";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);
  const { setLoading } = useContext(AuthContext);
  // const { setIsLoading } = useContext(LoadingContext);
  useEffect(() => {
    fetch("https://assignment-10-server-muttakinahmed2001.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => {
        setChefs(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [setLoading]);
  return (
    <div className="chefs">
      {chefs.map((chef) => (
        <Chef key={chef.id} chef={chef}></Chef>
      ))}
    </div>
  );
};

export default Chefs;
