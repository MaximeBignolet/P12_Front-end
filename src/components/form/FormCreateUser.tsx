import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useState } from "react";
import { addUser } from "../../store/UserSlice";
import { Modal } from "./Modal";
import { Dropdown } from "../dropdown/Dropdown";

const FormCreateUser = () => {
  const dispatch: AppDispatch = useDispatch();
  const stateSelect = useSelector((state: RootState) => state.states);
  const [openModal, setOpenModal] = useState(false);
  const departmentArray = [
    {
      id: 1,
      name: "Sales"
    },
    {
      id: 2,
      name: "Marketing"
    },
    {
      id: 3,
      name: "Engineering"
    },
    {
      id: 4,
      name: "Human Resources"
    },
    {
      id: 5,
      name: "Legal"
    }
  ]
  const initialState = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: 0,
    department: ""
  };

  const [formState, setFormState] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [id]: id === "zipCode" ? String(value) : value
    }));
  };

  const handleSubmitFormNewEmploye = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addUser(formState));
    setFormState(initialState);
    setOpenModal(true);
  };

  const handleDateForDepartment = (data: string) => {
    setFormState((prevState) => ({
      ...prevState,
      department: data,
    }));
  }

  const handleDataForState = (data: string) => {
    setFormState((prevState) => ({
      ...prevState,
      state: data,
    }));
  }

  return (
    <div className="container">
      <div className="nav">
        <h2>Create Employee</h2>
      </div>
      <form id="create-employee" onSubmit={handleSubmitFormNewEmploye}>
        <div className="infos_container">
          <p className="title_part">Infos</p>
          <div className="names">
            <div>
              <label htmlFor="first-name"></label>
              <input
                type="text"
                id="firstName"
                placeholder="FirstName"
                value={formState.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="last-name"></label>
              <input
                type="text"
                id="lastName"
                placeholder="LastName"
                value={formState.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="names">
            <div>
              <label htmlFor="date-of-birth"></label>
              <input
                id="dateOfBirth"
                type="date"
                placeholder="Date of Birth"
                value={formState.dateOfBirth}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="start-date"></label>
              <input
                id="startDate"
                type="date"
                placeholder="Start Date"
                value={formState.startDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="adress_and_department_container">
          <div className="address">
            <p className="title_part">Address</p>
            <div className="address_input">
              <div>
                <label htmlFor="street"></label>
                <input
                  id="street"
                  type="text"
                  placeholder="Street"
                  value={formState.street}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="city">
                <label htmlFor="city"></label>
                <input
                  id="city"
                  type="text"
                  placeholder="City"
                  value={formState.city}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="state">State</label>
              <Dropdown value={formState.state} dataFromStore={stateSelect} placeholder="Select a State" onData={handleDataForState}/>
            </div>
            <div className="zip-code">
              <label htmlFor="zip-code"></label>
              <input
                id="zipCode"
                type="text"
                placeholder="Zip Code"
                value={formState.zipCode === 0 ? "" : formState.zipCode}
                onChange={handleChange}
                required
                pattern="[0-9]{5}"
              />
            </div>
          </div>
          <label htmlFor="department" className="title_part">Department</label>
          <div>
            <Dropdown value={formState.department} dataFromStore={departmentArray} placeholder={'Choose a department'} onData={handleDateForDepartment}/>
          </div>
        </div>
        <button type="submit" className="btn_save_employee">Save</button>
      </form>
      {openModal && <Modal />}
    </div>
  );
};

export default FormCreateUser;
