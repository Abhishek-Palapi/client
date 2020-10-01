import React from "react";
import { FormBuilder } from "../form/FormBuilder";
import axios from 'axios'
export const DeleteItem = () => {
  const submitHandler = (data) => {
    data['foodLabel'] = "Rice"
    axios.post("http://localhost:3300/api/food/deleteItems", data)
    .then((res) => console.log("respo", res))
    .catch((err) => console.log(err));
     
    }
  const formJson = [
    {
      label: "label",
      filed: "input",
      type: "text",
    }
  ];
  return (
    <div>
       
      <FormBuilder data={formJson} onSubmit={submitHandler} />
    </div>
  );
};
