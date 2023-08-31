import React from "react";
import { createRoot } from "react-dom";
import ResumeForm from "./src/components/ResumeForm";
import ResumeTemplate from "./src/components/ResumeTemplate";

const App = () => {
  return (
    <div>
      <ResumeForm />
      <ResumeTemplate />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(<App />);
