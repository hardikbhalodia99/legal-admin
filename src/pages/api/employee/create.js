import { SERVER_BASE_URL } from "@/src/utils/constants"
import axios from "axios"

const handler = async (req, res) => {
  try{
    const {name,email,phone,password,type} = req.body

    const data = await createEmployee({
     name,
     email,
     phone,
     password,
     type,
     token : req.headers.authorization, 
     cookie: req.headers.cookie
    })

    if(data){
      return res.status(200).json({
        data : data
      })
    }else{
      return res.status(400).json({
        message : "Failed to create employee"
      })
    }

    
  }catch(error){
    console.error("Server Error in api/employee/create ==> Error : ",error)
    return res.status(500).json({
      message : "Failed to add employee"
    })
  }
}

export async function createEmployee({name,email,password,phone,type,token,cookie}){
  try{

    const payload = {
      employee_email : email,
      employee_name : name,
      employee_phone : phone,
      employee_type : type,
      password : password
    }

    const response = await axios.post(`${SERVER_BASE_URL}/admin/employees/create`,payload,{
      headers : {
        Authorization : token,
        Cookie : cookie
      }
    })
    console.log("%c 🥪 response", "color:#42b983", response.data);

    return response.data
  }catch(error){
    console.error("Server Error in api/employee/create at createEmployee==> Error : ",error)
    return null
  }
}

export default handler