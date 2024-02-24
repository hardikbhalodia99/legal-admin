import { SERVER_BASE_URL } from "@/src/utils/constants"
import axios from "axios"

const handler = async (req, res) => {
  try{

    if(req.method === "PUT"){
      console.log("%c 🥒 req.body", "color:#3f7cff", req.body);
      
      const response = await axios.put(`${SERVER_BASE_URL}/admin/forms/director`, req.body, {
        headers : {
          Authorization: req.headers.authorization, Cookie: req.headers.cookie
        }
      })
      console.log("%c 🥖 response", "color:#e41a6a", response.data);
      
      return res.status(200).json(response.data)
    }

    
  }catch(error){
    console.error("Server Error in api/forms/director ==> Error : ",error)
    return res.status(500).json({
      message : "Server Error Failed to update director details"
    })
  }
}
export default handler