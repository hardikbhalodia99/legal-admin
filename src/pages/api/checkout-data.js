import { SERVER_BASE_URL } from "@/src/utils/constants"
import axios from "axios"

const handler = async (req, res) => {
  try{
    const {organization_id,slug} = req.query

    const data = await getCheckoutData({
      organization_id : organization_id,
      slug : slug
    })

    if(data){
      return res.status(200).json({
        data : data
      })
    }else{
      return res.status(400).json({
        message : "Failed to get checkout page data"
      })
    }

    
  }catch(error){
    console.error("Server Error in api/checkout-data ==> Error : ",error)
    return res.status(500).json({
      message : "Failed to get checkout page data"
    })
  }
}

export async function getCheckoutData({organization_id,slug}){
  try{

    const response = await axios.get(`${SERVER_BASE_URL}/product/${organization_id}/${slug}`)
    console.log("%c 🥪 response", "color:#42b983", response.data);

    return response.data
  }catch(error){
    console.error("Server Error in api/checkout-data at getCheckoutData==> Error : ",error)
    return null
  }
}

export default handler