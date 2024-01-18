import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/auth";

export async function GetMoments() {
    const ref = collection(db, 'moments')
    const data = await getDocs(ref)
    const formattedData = data.docs.map((doc) => ({...doc.data(), id: doc.id})) 
    return formattedData   
}