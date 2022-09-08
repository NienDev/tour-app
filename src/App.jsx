import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import data from "./data";

console.log(data);

function App() {
  return <Tours data={data} />;
}

export default App;
