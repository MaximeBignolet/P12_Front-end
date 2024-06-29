import { useSelector } from "react-redux";
import { RootState } from "../store/store";

import { Table } from "table-plugin-react-ts";

const CurrentEmployees = () => {
  const userData = useSelector((state: RootState) => state.user);
  const coloumnToSort = ["firstName", "lastName", "dateOfBirth", "startDate", "street", "city", "state", "zipCode", "department"]
  const coloumnToSearch = ["firstName", "lastName", "dateOfBirth", "startDate", "street", "city", "state", "zipCode", "department"]
  const columns: {
    title: string;
    dataKey: string;
  }[] = [];

  columns.push(
    { title: "First Name", dataKey: "firstName" },
    { title: "Last Name", dataKey: "lastName" },
    { title: "Date of Birth", dataKey: "dateOfBirth" },
    { title: "Start Date", dataKey: "startDate" },
    { title: "Street", dataKey: "street" },
    { title: "City", dataKey: "city" },
    { title: "State", dataKey: "state" },
    { title: "Zip Code", dataKey: "zipCode" },
    { title: "Department", dataKey: "department" }
  )

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <Table columns={columns} data={userData} colmunToSort={coloumnToSort} columnQuery={coloumnToSearch} />
    </div>
  );
};

export default CurrentEmployees;
