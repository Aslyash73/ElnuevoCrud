import React, { useState, useEffect } from "react";

const initialForm = {
  name: "",
  apellido: "",
  edad: "",
  identificacion: "",
  nacionalidad: "",
};

const CrudForm = ({ createData, db, updateData, dataToEdit, setDataToEdit, setDb, search,  }) => {
  
  const [form, setForm] = useState();

   useEffect(() => {
     if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
   }, [dataToEdit]);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  
  console.log(form)
  const handleSubmit = (e) => {
    e.preventDefault();
    
     if (!form.name || !form.apellido || !form.edad || !form.identificacion || !form.nacionalidad) {
        alert("Datos incompletos");
        return;
      }
      
      
      
      console.log("db: " + db)
      
      
      
      
      console.log(Object.keys(form).length)
      //el tamaño mayor o igual a 5 porque tienes 5 inputs
      if(form && Object.keys(form).length === 5) {
        !search(form.identificacion) ? createData(form) : updateData(form)
        console.log(Object.keys(form).length)
      } else {
      alert("Debes llenar todos los campos.")
    }

    
    
  };


  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };


  return (
    <div>
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3> 
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleChange}
          value={dataToEdit && dataToEdit.name}  //value={form.nombre}
        />
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          onChange={handleChange}
          value={dataToEdit && dataToEdit.apellido}
        />
        <input
          type="number"
          name="edad"
          placeholder="Edad"
          onChange={handleChange}
          value={dataToEdit && dataToEdit.edad}
        />
        <input
          type="number"
          name="identificacion"
          placeholder="Identificacion"
          onChange={handleChange}
          value={dataToEdit && dataToEdit.identificacion}
        />
        <input
          type="text"
          name="nacionalidad"
          placeholder="Nacionalidad"
          onChange={handleChange}
          value={dataToEdit && dataToEdit.nacionalidad}
        />

        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
