import { initializeApp } from "firebase/app"
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where
} from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCTrvpo7fMIBtlSl8PCKV51-EvxGTdMtT0",
  authDomain: "saunago-cf93f.firebaseapp.com",
  projectId: "saunago-cf93f",
  storageBucket: "saunago-cf93f.appspot.com",
  messagingSenderId: "491267882883",
  appId: "1:491267882883:web:3faad993c9cff32ac8c0b6"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const saunasRef = collection(db, "saunas")

const getSaunas = async () => {
  try {
    const snapshot = await getDocs(saunasRef)
  
    const saunas = snapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
    }))
    return saunas
  } catch (error) {
    console.error("Error getting saunas:", error)
    return []
  }
}

const getSauna = async (id) => {
  try {
    const docRef = doc(db, "saunas", id)
    const snapshot = await getDoc(docRef)
    if (snapshot.exists()) {
      return {
        ...snapshot.data(),
        id: snapshot.id
      }
    } else {
      console.log("No such document!")
      return null
    }
  } catch (error) {
    console.error("Error getting sauna:", error)
    return null
  }
}


const getHostSaunas = async () => {
  const auth = getAuth()
  const user = auth.currentUser
  const uid = user.uid
  try {
    const q = query(saunasRef, where("hostId", "==", uid))
    const snapshot = await getDocs(q)

    const saunas = snapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id

    }))
    return saunas
  } catch (error) {
    console.error("Error getting host saunas:", error)
    return []
  }
}

export { getSaunas, getSauna, getHostSaunas }