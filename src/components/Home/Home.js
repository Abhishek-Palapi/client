import React from "react";
import './Home.css'
import {schema} from '../schema'
const Ajv = require('ajv');
export const Home = () => {
  const [items, setItmes] = React.useState([]);
  const [expandMap, setExpandMap] = React.useState({});
  const [selectedVal, setSelectedVal] = React.useState({});
  
  React.useEffect(() => {
    fetch("http://localhost:3300/api")
      .then((res) => res.json())
      .then((res) => {
        const validate = Ajv().compile(schema());
        var valid = validate(res);
        setItmes(res.items);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleClick = (data) => {
    setExpandMap({ ...expandMap, [data.label]: data.label });
  };

  const onChange = (e, label) => {
    let selectedValues = { ...selectedVal };
    selectedValues[label] = e.target.checked;
    setSelectedVal(selectedValues);
  };

  const renderChildren = (items) => {
    return items.map((item) => {
      return (
        <div key={item.label}>
          <div style={{ display: "inline-flex", padding:'10px' }}>
            {item.items && Array.isArray(item.items) ? (
              <button className="expand_button" onClick={() => handleClick(item)}>expnad</button>
            ) : (
              <input
                type="checkbox"
                style = {{marginRight:'10px'}}
                onChange={(e) => onChange(e, item.label)}
              />
            )}
            <div>{item.label}</div>
            {item.items && Array.isArray(item.items)
              ? null
              : selectedVal[item.label] && (
                  <div  style = {{marginLeft:'10px'}}>
                    <button style={{marginRight:'10px'}}>+</button>
                    <button>-</button>
                  </div>
                )}
          </div>
          {expandMap[item.label] === item.label &&
          item.items &&
          Array.isArray(item.items) ? (
            <div style={{ marginLeft: "2%" }}>{renderChildren(item.items)}</div>
          ) : null}
        </div>
      );
    });
  };

  return <div>{renderChildren(items)}<button className="expand_button">submit</button></div>;
};
