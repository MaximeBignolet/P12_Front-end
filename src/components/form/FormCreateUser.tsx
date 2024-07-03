import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useState } from "react";
import { addUser } from "../../store/UserSlice";

const FormCreateUser = () => {
  const stateSelect = useSelector((state: RootState) => state.states);
  const dispatch: AppDispatch = useDispatch();
  const existingData = localStorage.getItem("userData");
  const parsedData = existingData ? JSON.parse(existingData) : [];

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
      [id]: id === "zipCode" ? Number(value) : value
    }));
  };

  const handleSubmitFormNewEmploye = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addUser(formState));
    const updatedData = [...parsedData, formState];
    localStorage.setItem("userData", JSON.stringify(updatedData));
    setFormState(initialState);
  };

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
            <div className="state">
              <label htmlFor="state">State</label>
              <select
                id="state"
                value={formState.state}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Choose employee's state</option>
                {stateSelect.map((s) => (
                  <option value={s.abbreviation} key={s.abbreviation}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="zip-code">
              <label htmlFor="zip-code"></label>
              <input
                id="zipCode"
                type="number"
                placeholder="Zip Code"
                value={formState.zipCode === 0 ? "" : formState.zipCode}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <label htmlFor="department" className="title_part">Department</label>
          <select
            id="department"
            value={formState.department}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Choose department</option>
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </div>
        <button type="submit" className="btn_save_employee">Save</button>
      </form>
    </div>
  );
};

export default FormCreateUser;
