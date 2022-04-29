import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";



const CrudApp = () => {
  //Estado general
  const [db, setDb] = useState([]);
  console.log(db)

  
  const [dataToEdit, setDataToEdit] = useState();

   if (db.length > 0) {
     console.log(db[0].id)
   }

  //nfn te crea la estructura de una función flecha
  //ahora si debe ser === porque debe validar que el valor sea el mismo y además que el tipo sea el mismo
  const search = (identificacion) => {
    //si el array devuelto tiene una longitud mayor a 0 entonces el usuario existe en los registros
    //Debes filtar por identificación
    return db.filter((user) => user.identificacion == identificacion).length > 0
  }

  console.log(search(4))

  //ahora sí está funcionando xD jaja
  //como va a salir si no lo estoy imprimiendo en consola jajaja
  //ahora salen dos true porque hay dos registros
  //console.log(search(1028020543))

  //    //cuál id usas para identificar los usuarios dentro del estado? id solo
    // const test = userSearch()

    // console.log("encontrado: " + test)


  const createData = (data) => {
    data.id = Date.now();
    console.log(data);
     setDb([...db, data]);
  };

  const updateData = (data) => {
    const newData = db.map((el) => (el.identificacion === dataToEdit.identificacion));
    setDb(newData);
  };

  const deleteData = (id) => {
    const isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      const newData = db.filter((el) => el.identificacion !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  

  return (
    <div>
      <h2>CRUD</h2>
      <article className="grid-1-2">
        <CrudForm
           createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
          db={db}
          setDb={setDb}
          search={search}
        />
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </article>
    </div>
  );
};

export default CrudApp;
