import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDocs,
  getDoc,
  collection,
  doc,
  query,
  where,
} from "firebase/firestore";
import { useParams } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyDYlHm_ikG-wg3wJX7i8JcMyxyhPztFyuQ",
  authDomain: "barberstyle-a6055.firebaseapp.com",
  projectId: "barberstyle-a6055",
  storageBucket: "barberstyle-a6055.appspot.com",
  messagingSenderId: "237466357198",
  appId: "1:237466357198:web:5508091a7bcf7a6c512f9f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export function testDB() {
  console.log(db);
}

export async function getAllProducts() {
  const productsCollectionRef = collection(db, "products");
  const docSnapshot = await getDocs(productsCollectionRef);
  const dataProducts = docSnapshot.docs.map((item) => {
    const product = {
      ...item.data(),
      id: item.id,
    };
    return product;
  });
  return dataProducts;
}

export async function getProduct(id) {
  const productsCollectionRef = collection(db, "products");
  const productRef = doc(productsCollectionRef, id);
  const docSnapshot = await getDoc(productRef);
  console.log(docSnapshot);
}

export default db;
