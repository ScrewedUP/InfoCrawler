/* eslint-disable react-hooks/exhaustive-deps */
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
export default function NewsPage(props) {
  const [dataFetched, setDataFetched] = useState([]);

  function fetchData() {
    console.log("here");
    const link = `/${props.data}`;
    console.log(link);
    fetch(link)
      .then((response) => {
        console.log("here also");
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setDataFetched(data.result);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);
  const content = dataFetched.map((ele, index) => {
    console.log(ele.Heading);
    return (
      <p className="w-[60vw] h-max" key={index}>
        Heading : {ele.Heading}
      </p>
    );
  });
  return (
    <div>
      <Navbar />
      {content}
    </div>
  );
}
