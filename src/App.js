// import { useState } from "react";
import { Form } from "./components/form/Form";
import { Container } from "./components/tableContainer/Container";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h1>Counter app without redux</h1>
      <Container />

      <Form />
    </div>
  );
};

export default App;
