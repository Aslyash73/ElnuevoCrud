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

  
  const search = (identificacion) => {
    
    return db.filter((user) => user.identificacion == identificacion).length > 0
  }

  console.log(search(4))

  

  

    // console.log("encontrado: " + test)


  const createData = (data) => {
    console.log(data);
     setDb([...db, data]);
  };

  const updateData = (data) => {
    const newData = db.map((el) => (el.identificacion === data.identificacion ? data : el));
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
