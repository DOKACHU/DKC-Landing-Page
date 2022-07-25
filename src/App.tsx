import React, { useState } from "react";
import { HospitalForm, PasonalForm } from "./pages";
import { FormTemplate } from "./templates";

export default function App() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = (e: any) => {
    e.preventDefault();
    setToggle(!toggle);
  };

  return (
    <div>
      <button onClick={handleToggle}> {toggle ? "개인" : "병원"}변경 </button>
      <FormTemplate toggle={toggle}>
        {toggle ? <HospitalForm /> : <PasonalForm />}
      </FormTemplate>
    </div>
  );
}
