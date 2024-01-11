import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/auth";

export async function GetSliderData() {
    const ref = collection(db, 'sliderInfo')
    const data = await getDocs(ref)
    const formattedData = data.docs.map((doc) => ({...doc.data(), id: doc.id})) 
    console.log(formattedData)
    return formattedData   
}