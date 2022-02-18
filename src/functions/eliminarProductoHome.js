import firebaseApp from "../credenciales";
import { getFirestore, deleteDoc, collection, doc } from 'firebase/firestore';
const db = getFirestore(firebaseApp);

export default function eliminarProductoHome(producto) {
    console.log(producto);
    const coleccionRef = collection(db, "productos2");
    const docuRef = doc(coleccionRef, producto.cpCode);
    deleteDoc(docuRef);
}

