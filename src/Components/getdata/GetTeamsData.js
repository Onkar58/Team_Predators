import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/auth";

export async function GetTeamsData(teamYear) {
    const ref = collection(db, 'teams')
    const data = await getDocs(ref)
    var formattedData = data.docs.map((doc) => ({...doc.data(), id: doc.id})) 
    formattedData = formattedData.filter((e) => e.year === teamYear);
    console.log(formattedData)
    return formattedData   
}