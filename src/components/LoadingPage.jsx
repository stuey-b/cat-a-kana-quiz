import React from "react";
import { ClimbingBoxLoader } from "react-spinners";
import Card from "./Card";

const LoadingPage = () => {
  return (
    <Card>
      <ClimbingBoxLoader color="#36d7b7" size={20} />;
    </Card>
  );
};

export default LoadingPage;
