import { SERVER_BASE_URL } from "@/src/utils/constants"
import axios from "axios"

export async function getForm({token,cookie,slug,client_id}){
  try{

    const response = await axios.get(`${SERVER_BASE_URL}/admin/forms/${slug}/${client_id}`,{
      headers : {
        Authorization : token,
        Cookie : cookie
      }
    })
    console.log("%c 🥪 response", "color:#42b983", response.data);

    return response.data
  }catch(error){
    console.error("Server Error in api/orders/get-forms at getForm==> Error : ",error)
    return null
  }
}

