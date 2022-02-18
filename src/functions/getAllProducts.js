import firebaseApp from "../credenciales";
import { getFirestore, collection, getDocs } from "firebase/firestore";
const db = getFirestore(firebaseApp);

export default async function getAllProducts() {
    const productos = [];
    const collectionRef = collection(db, "productos2");
    const snapshot = await getDocs(collectionRef);
    snapshot.forEach((doc) => {
        productos.push(doc.data());
    });
    return productos;
}