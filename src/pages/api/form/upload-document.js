import { SERVER_BASE_URL } from "@/src/utils/constants"
import axios from "axios"

const handler = async (req, res) => {
  try{

    if(req.method === "POST"){      
      
      const response = await axios.post(`${SERVER_BASE_URL}/admin/forms/documents`, req.body, {
        headers : {
          Authorization: req.headers.authorization, Cookie: req.headers.cookie
        }
      })
      console.log("%c 🥖 response", "color:#e41a6a", response.data);
      
      return res.status(200).json(response.data)
    }

    
  }catch(error){
    console.error("Server Error in api/forms/upload-documents ==> Error : ",error)
    return res.status(500).json({
      message : "Server Error Failed to upload documents"
    })
  }
}
export default handler