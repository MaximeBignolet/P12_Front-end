/* eslint-disable @typescript-eslint/no-explicit-any */


import { Table } from "table-plugin-react-ts";

const CurrentEmployees = () => {
  const userData = JSON.parse(localStorage.getItem("userData") || "[]");
  
  const coloumnToSort = ["firstName", "lastName", "dateOfBirth", "startDate", "street", "city", "state", "zipCode", "department"]
  const coloumnToSearch = ["firstName", "lastName", "dateOfBirth", "startDate", "street", "city", "state", "zipCode", "department"]

  const columns: {title: string, dataKey: string}[] = [
    {title: "City", dataKey: "city"},
    {title: "Date of Birth", dataKey: "dateOfBirth"},
    {title: "Department", dataKey: "department"},
    {title: "First Name", dataKey: "firstName"},
    {title: "Last Name", dataKey: "lastName"},
    {title: "Start Date", dataKey: "startDate"},
    {title: "State", dataKey: "state"},
    {title: "Street", dataKey: "street"},
    {title: "Zip Code", dataKey: "zipCode"}
  ];

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <Table columns={columns} data={userData} colmunToSort={coloumnToSort} columnQuery={coloumnToSearch} />
    </div>
  );
};

export default CurrentEmployees;
