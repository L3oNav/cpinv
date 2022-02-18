import firebaseApp from "../credenciales";
import {getFirestore, collection, query, where, getDocs } from "firebase/firestore";
const db = getFirestore();

async function filtrarDatos(stringBusqueda) {
  const docusFiltrado = [];

  const collecionRef = collection(db, "productos2");
  
  const queryBrand = query(collecionRef, where("brand", "==", stringBusqueda));
  const querycpCode = query(collecionRef, where("cpCode", "==", stringBusqueda));

  const arraySnapshots = await Promise.all([
    getDocs(queryBrand),
    getDocs(querycpCode),
  ]);

  arraySnapshots.forEach((snapshot) => {
    snapshot.forEach((doc) => {
      docusFiltrado.push(doc.data());
    });
  });
  console.log(docusFiltrado);
  return docusFiltrado;
}

export default filtrarDatos;