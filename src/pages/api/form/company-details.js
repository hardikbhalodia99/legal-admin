import { SERVER_BASE_URL } from "@/src/utils/constants"
import axios from "axios"

const handler = async (req, res) => {
  try{

    if(req.method === "PUT"){
      const {company_details, client_id} = req.body
      console.log("%c 🍣 company_details", "color:#b03734", company_details);
      console.log("%c 🍣 client_id", "color:#b03734", client_id);
      
      const response = await axios.put(`${SERVER_BASE_URL}/admin/forms/company`, req.body, {
        headers : {
          Authorization: req.headers.authorization, Cookie: req.headers.cookie
        }
      })
      console.log("%c 🥖 response", "color:#e41a6a", response.data);
      
      return res.status(200).json(response.data)
    }

    
  }catch(error){
    console.error("Server Error in api/forms/company-details ==> Error : ",error)
    return res.status(500).json({
      message : "Server Error Failed to get company details"
    })
  }
}
export default handler