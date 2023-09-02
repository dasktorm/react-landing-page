import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";
import Navigator from "./Navigator.jsx";

//create your first component
const Home = () => {
  const [cardContent, setCardContent] = useState([
    {
      title: "First card",
      image: "https://web.dev/images/courses/privacy/card.svg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      buttonText: "First button",
    },
    {
      title: "Second card",
      image: "https://web.dev/images/courses/accessibility/card.svg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      buttonText: "Second button",
    },
    {
      title: "Third card",
      image: "https://web.dev/images/courses/html/card.svg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      buttonText: "Third button",
    },
    {
      title: "Fourth card",
      image: "https://web.dev/images/courses/images/card.svg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      buttonText: "Fourth button",
    },
  ]);

  return (
    <div className="container-fluid m-0 p-0">
      <div className="row d-flex justify-content-center m-0">
        <div className="col-12 p-0">
          <Navbar />
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-lg-10">
            <Navigator />
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
              {cardContent.map((card) => {
                return <Card {...card} />;
              })}
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
