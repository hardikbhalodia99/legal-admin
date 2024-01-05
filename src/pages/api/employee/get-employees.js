import { SERVER_BASE_URL } from "@/src/utils/constants"
import axios from "axios"

const handler = async (req, res) => {
  try{

    const data = await getEmployees({
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
    console.error("Server Error in api/employee/get-employee ==> Error : ",error)
    return res.status(500).json({
      message : "Failed to get employee"
    })
  }
}

export async function getEmployees({token,cookie}){
  try{

    const response = await axios.get(`${SERVER_BASE_URL}/admin/employees/all`,{
      headers : {
        Authorization : token,
        Cookie : cookie
      }
    })
    console.log("%c 🥪 response", "color:#42b983", response.data);

    return response.data
  }catch(error){
    console.error("Server Error in api/employee/get-employee at getEmployee==> Error : ",error)
    return null
  }
}

export default handler