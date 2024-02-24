import { SERVER_BASE_URL } from "@/src/utils/constants"
import axios from "axios"

const handler = async (req, res) => {
  try{

    const data = await getOrders({
     token : req.headers.authorization, 
     cookie: req.headers.cookie
    })

    if(data){
      return res.status(200).json({
        data : data
      })
    }else{
      return res.status(400).json({
        message : "Failed to get employee"
      })
    }

    
  }catch(error){
    console.error("Server Error in api/orders/get-orders ==> Error : ",error)
    return res.status(500).json({
      message : "Failed to get employee"
    })
  }
}

export async function getOrders({token,cookie,slug}){
  try{

    const response = await axios.get(`${SERVER_BASE_URL}/admin/orders/${slug}`,{
      headers : {
        Authorization : token,
        Cookie : cookie
      }
    })
    console.log("%c 🥪 response", "color:#42b983", response.data);

    return response.data
  }catch(error){
    console.error("Server Error in api/orders/get-orders at getOrders==> Error : ",error)
    return null
  }
}

export default handler