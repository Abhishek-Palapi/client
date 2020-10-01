import React from "react";
// builds form based on the json can be extended to diferent fields
export const FormBuilder = ({ data, onSubmit }) => {
  const [state, setState] = React.useState({});

  React.useEffect(() => {
    let stateObj = {};
    data.forEach((item) => (stateObj[item.label] = ""));
    setState(stateObj)
  }, []);
  const handleInput = (ev) => {
    const new_state = {...state}
    new_state[ev.target.name] = ev.target.value
    setState(new_state)
  };
  const handleSubmit =() => {
    onSubmit(state)
  }
  const renderFormItem = (item) => {
    let element = null;
    switch (item.filed) {
      case "input":
        element = (
          <div style={{ padding: "10px" }}>
            <label>{item.label}</label>
            <input
              type={item.type}
              value={state[item.label]}
              name={item.label}
              onChange={handleInput}
            ></input>
          </div>
        );
        break;
    }
    return element;
  };
  return <div>{data.map((formItem) => renderFormItem(formItem))}<button onClick={handleSubmit}>Submit</button></div>;
};
