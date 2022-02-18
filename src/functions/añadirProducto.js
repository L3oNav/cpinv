import firebaseApp from "../credenciales";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
const db = getFirestore(firebaseApp);

function añadirProducto(infoProducto) {
    const collectionRef = collection(db, "productos2");
    const docRef = doc(collectionRef, infoProducto.cpCode); 
//  const docRef = doc(collectionRef, infoProducto.id);
    setDoc(docRef, infoProducto);
}

export default añadirProducto;