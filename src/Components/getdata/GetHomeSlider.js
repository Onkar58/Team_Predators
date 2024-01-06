import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/auth";

export async function GetHomeSlider() {
    const ref = collection(db, 'vehicles')
    const data = await getDocs(ref)
    const formattedData = data.docs.map((doc) => ({...doc.data(), id: doc.id})) 
    const qata = formattedData.map((e) => e.img);
    return qata
}