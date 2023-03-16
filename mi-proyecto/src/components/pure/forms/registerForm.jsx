import React, { useState } from "react";

const Registerform = () => {
  const initialData = [
    {
      use: "",
      name: "",
      email: "",
      password: "",
    },
  ];

  const [data, setData] = useState(initialData);

  return <div></div>;
};

export default Registerform;
