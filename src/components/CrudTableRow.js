import React from "react";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  //console.log(el)
  const { name, apellido, edad, identificacion,nacionalidad} = el;

  return (
    <tr>
      <td>{name}</td>
      <td>{apellido}</td>
      <td>{edad}</td>
      <td>{identificacion}</td>
      <td>{nacionalidad}</td>

      <td>
        
        <button onClick={() => deleteData(identificacion)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
