import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/auth";

export async function GetRecentPartner() {
    const ref = collection(db, 'partners')
    const data = await getDocs(ref)
    const formattedData = data.docs.map((doc) => ({...doc.data(), id: doc.id})) 
    const qata = formattedData[1];
    return qata.recent
}