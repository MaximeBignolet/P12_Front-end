/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table } from "table-plugin-react-ts";

const CurrentEmployees = () => {
  const persistedState = localStorage.getItem("persist:root");
  let userData: Record<string, any>[] = [{ user: [] }];

  if (persistedState) {
    try {
      const parsedState = JSON.parse(persistedState);
      userData = JSON.parse(parsedState.user) || { user: [] };
    } catch (error) {
      console.error("Erreur de parsing des données persistées", error);
    }
  }

  const columnsToSort = ["firstName", "lastName", "dateOfBirth", "startDate", "street", "city", "state", "zipCode", "department"];
  const columnsToSearch = ["firstName", "lastName", "dateOfBirth", "startDate", "street", "city", "state", "zipCode", "department"];

  const columns: { title: string, dataKey: string }[] = [
    { title: "First Name", dataKey: "firstName" },
    { title: "Last Name", dataKey: "lastName" },
    { title: "Date of Birth", dataKey: "dateOfBirth" },
    { title: "Start Date", dataKey: "startDate" },
    { title: "Street", dataKey: "street" },
    { title: "City", dataKey: "city" },
    { title: "State", dataKey: "state" },
    { title: "Zip Code", dataKey: "zipCode" },
    { title: "Department", dataKey: "department" }
  ];

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <div className="table_div">
        {Array.isArray(userData) ? (
          <Table columns={columns} data={userData} colmunToSort={columnsToSort} columnQuery={columnsToSearch} />
        ) : (
          <p>Aucun employé trouvé</p>
        )}
      </div>
    </div>
  );
};

export default CurrentEmployees;
