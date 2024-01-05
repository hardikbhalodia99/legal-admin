import { SERVER_BASE_URL } from "@/src/utils/constants"
import axios from "axios"

const handler = async (req, res) => {
  try{
    const {name,email,phone,employee_id} = req.body

    const data = await updateEmployee({
     name,
     email,
     phone,
     employee_id,
     token : req.headers.authorization, 
     cookie: req.headers.cookie
    })

    if(data){
      return res.status(200).json({
        data : data
      })
    }else{
      return res.status(400).json({
        message : "Failed to update-details employee"
      })
    }

    
  }catch(error){
    console.error("Server Error in api/employee/update-details ==> Error : ",error)
    return res.status(500).json({
      message : "Failed to update employee"
    })
  }
}

export async function updateEmployee({name,email,phone,employee_id,token,cookie}){
  try{

    const payload = {
      employee_email : email,
      employee_name : name,
      employee_phone : phone,
      employee_id : employee_id,
    }

    const response = await axios.put(`${SERVER_BASE_URL}/admin/employees/update-details`,payload,{
      headers : {
        Authorization : token,
        Cookie : cookie
      }
    })
    console.log("%c 🥪 response", "color:#42b983", response.data);

    return response.data
  }catch(error){
    console.error("Server Error in api/employee/update-details at updateEmployee==> Error : ",error)
    return null
  }
}

export default handler