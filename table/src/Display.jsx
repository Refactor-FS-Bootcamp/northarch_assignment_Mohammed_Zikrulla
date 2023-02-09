import React from "react";
import './ChooseFile.css'

function Display(props) {
  const { jsonData } = props;

  // get table column
  const column = Object.keys(jsonData[0] || {});
  // get table heading data
  const ThData = () => {
    return column.map((data, i) => {
      return <th key={i}>{data}</th>;
    });
  };

  const tdData = () => {
    return jsonData.map((data, i) => {
      return (
        <tr key={i}>
          {column.map((v, i) => {
            return <td key={i}>{data[v]}</td>;
          })}
        </tr>
      );
    });
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>{ThData()}</tr>
        </thead>
        <tbody>{tdData()}</tbody>
      </table>
    </div>
  );
}
export default Display;