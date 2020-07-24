import React from "react";
import Header from "./navigation/header";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import {
  faGithubAlt,
  faGoogle,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div>
      <Header />
      <FontAwesomeIcon icon={faHome} />
      <FontAwesomeIcon icon={faGithubAlt} />
      <FontAwesomeIcon icon={faGoogle} />
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faTwitter} />
    </div>
  );
}

export default App;
