import React from "react";
import { FormBuilder } from "../form/FormBuilder";
import axios from 'axios'
export const UpdateItem = () => {
  const submitHandler = (data) => {
    data['foodLabel'] = "Rice"
    axios.post("http://localhost:3300/api/food/updateFoodItem", data)
    .then((res) => console.log("respo", res))
    .catch((err) => console.log(err));
     
    }
  const formJson = [
    {
      label: "label",
      filed: "input",
      type: "text",
    },
    {
        label: "price",
        filed: "input",
        type: "number",
    }
  ];
  return (
    <div>
       
      <FormBuilder data={formJson} onSubmit={submitHandler} />
    </div>
  );
};
