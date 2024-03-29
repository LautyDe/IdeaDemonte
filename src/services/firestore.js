import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDocs,
  getDoc,
  collection,
  Timestamp,
  doc,
  addDoc,
  Firestore,
} from "firebase/firestore";
import { Alert } from "bootstrap";

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
  console.log("Consola de test: ", docSnapshot);
  const product = {
    ...docSnapshot.data(),
    id: docSnapshot.id,
  };

  return product;
}

export async function createBuyOrder(orderData) {
  const buyTimer = Timestamp.now();
  const orderWithDate = { ...orderData, date: buyTimer };

  const myColec = collection(db, "buyOrders");
  const orderDoc = await addDoc(myColec, orderWithDate);
  console.log("order Id de consola: ", orderDoc.id);
  alert("Su compra ha sido realizada, este es el id: " + orderDoc.id);
}

export default db;
