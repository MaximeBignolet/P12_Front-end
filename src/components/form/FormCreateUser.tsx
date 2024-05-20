import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useState } from "react";
import { addUser } from "../../store/UserSlice";

const FormCreateUser = () => {
  const stateSelect = useSelector((state: RootState) => state.states);
  const dispatch: AppDispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [startDate, setStartDate] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState(0);
  const [department, setDepartment] = useState("");

  const handleSubmitFormNewEmploye = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addUser({
        firstName,
        lastName,
        dateOfBirth,
        startDate,
        street,
        city,
        state,
        zipCode,
        department,
      })
    );
  };
  return (
    <div>
      <div className="container">
        <div className="nav">
          <h2>Create Employee</h2>
        </div>
        <form
          action="#"
          id="create-employee"
          onSubmit={handleSubmitFormNewEmploye}
        >
          <p className="title_part">Infos</p>
          <div className="names">
            <div>
              <label htmlFor="first-name"></label>
              <input
                type="text"
                id="first-name"
                placeholder="FirstName"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFirstName(e.target.value)
                }
                required
              />
            </div>
            <div>
              <label htmlFor="last-name"></label>
              <input
                type="text"
                id="last-name"
                placeholder="LastName"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setLastName(e.target.value)
                }
                required
              />
            </div>
          </div>
          <div className="names">
            <div>
              <label htmlFor="date-of-birth"></label>
              <input
                id="date-of-birth"
                type="text"
                placeholder="Date of Birth"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setDateOfBirth(e.target.value)
                }
                required
              />
            </div>
            <div>
              <label htmlFor="start-date"></label>
              <input
                id="start-date"
                type="text"
                placeholder="Start Date"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setStartDate(e.target.value)
                }
                required
              />
            </div>
          </div>

          <div className="address">
            <p className="title_part">Address</p>
            <div className="address_input">
              <div>
                <label htmlFor="street"></label>
                <input
                  id="street"
                  type="text"
                  placeholder="Street"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setStreet(e.target.value)
                  }
                  required
                />
              </div>
              <div className="city">
                <label htmlFor="city"></label>
                <input
                  id="city"
                  type="text"
                  placeholder="City"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setCity(e.target.value)
                  }
                  required
                />
              </div>
            </div>
            <div className="state">
              <label htmlFor="state">State</label>
              <select
                name="state"
                id="state"
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setState(e.target.value)
                }
                required
              >
                <option value="default" disabled>
                  Choose employee's state
                </option>
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
                id="zip-code"
                type="number"
                placeholder="Zip Code"
                onChange={(e) =>
                  setZipCode(e.target.value === "" ? 0 : Number(e.target.value))
                }
                required
              />
            </div>
          </div>

          <label htmlFor="department" className="title_part">
            Department
          </label>
          <select
            name="department"
            id="department"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setDepartment(e.target.value)
            }
            required
          >
            <option value="default" disabled>
              Choose department
            </option>
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default FormCreateUser;
