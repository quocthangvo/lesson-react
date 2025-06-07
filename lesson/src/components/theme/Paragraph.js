import React from "react";

const Paragraph = ({ theme }) => {
  console.log("theme", theme);
  return (
    <div className={theme}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque quos
      maxime tenetur voluptatibus sunt fuga eius? Id voluptas architecto soluta
      repudiandae, asperiores odit, adipisci, harum doloremque quibusdam
      deleniti aut iure.
    </div>
  );
};

export default Paragraph;
