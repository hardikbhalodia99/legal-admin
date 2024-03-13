import { MagnifyingGlassIcon, TrashIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
	Card,
	CardHeader,
	Input,
	Typography,
	CardBody,
	Chip,
	CardFooter,
	Tabs,
	TabsHeader,
	Tab,
	Avatar,
	IconButton,
	Tooltip,
} from "@material-tailwind/react";
import Button from "../../core/button";
import { AddEmployeeModal } from "./AddEmployeeModal";
import { useState } from "react";

const TABLE_HEAD = ["Employee", "Function", "Phone", "Status", ""];
const TABLE_IMAGES = [
  "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
  "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
  "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
  "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
  "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg"
]


export function EmployeesTable({employees}) {
  console.log("%c 🥑console.log(); employees", "color:#6ec1c2", employees);
  const [data,setData] = useState(employees ? employees : [])
  const [open, setOpen] = useState(false);
  const [selectedEmployee,setSelectedEmployee] = useState(null)
  const handleOpen = () => setOpen((cur) => !cur);
	return (
    <>
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Employees list
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                See information about all employees
              </Typography>
            </div>
          </div>
          <div className="flex flex-col items-center justify-end gap-4 md:flex-row px-5">
            {/* <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div> */}
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button
                type="primary"
                size="small"
                icon={<UserPlusIcon className="w-5 h-5" />}
                label="Add Employee"
                onClick={() => {setSelectedEmployee(null); handleOpen(true)}}
              />
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-auto px-0">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head,index) => (
                  <th
                    key={index}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data?.map((eachEmployee, index) => {
                  const isLast = index === data.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={index}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Avatar src={TABLE_IMAGES[index%4]} alt={eachEmployee.employee_name} size="sm" />
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {eachEmployee.employee_name}
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              {eachEmployee.employee_email}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {eachEmployee.employee_type}
                          </Typography>
                          {/* <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {org}
                          </Typography> */}
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {eachEmployee.employee_phone}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            variant="ghost"
                            size="sm"
                            value={eachEmployee.disabled === 0 ? "Active" : "Disabled"}
                            color={eachEmployee.disabled === 0 ? "green" : "blue-gray"}
                          />
                        </div>
                      </td>
                      
                      <td className={classes}>
                        <Tooltip content="Edit User">
                          <IconButton variant="text" onClick={()=>{
                            setSelectedEmployee(eachEmployee)
                            handleOpen(true)
                          }}>
                            <PencilIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                        {/* <Tooltip content="Remove User">
                          <IconButton variant="text" onClick={()=>{
                            setSelectedEmployee(eachEmployee)
                            handleOpen(true)
                          }}>
                            <TrashIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip> */}
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page 1 of 10
          </Typography>
          <div className="flex gap-2">
            <Button type="primary" label="<" hollow={true} />
            <Button type="primary" label=">" hollow={true} />
          </div>
        </CardFooter>
      </Card>
      <AddEmployeeModal open={open} handleOpen={handleOpen} setData={setData} selectedEmployee={selectedEmployee}/>
    
    </>
	);
}
