import React, { useState, useEffect } from "react";
import { useDispatch, connect, useSelector } from "react-redux";
import NavBar from "../../components/NavBar/NavBar";
import { addDriver, getTeams } from "../../Redux/Actions/actions";
import styles from "./Form.module.css";
import { useNavigate } from "react-router-dom";
import {
  validateDescription,
  validateDob,
  validateForename,
  validateImage,
  validateNationality,
  validateSurname
} from "./validations";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTeams());
  }, []);
  const teams = useSelector((state) => state.allTeams);

  const [selectedTeams, setSelectedTeams] = useState("");
  const [showTeams, setShowTeams] = useState("");
  const [driver, setDriver] = useState({
    forename: "",
    surname: "",
    dob: "",
    nationality: "",
    description: "",
    teams: "",
    image: "",
    createdinDB: true,
  });
  const [error, setError] = useState({
    forename: null,
    surname: null,
    dob: null,
    nationality: null,
    description: null,
    teams: null,
    image: null,
  });
  const [formValid, setFormValid] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
  
   
   setDriver({ ...driver, [name]: value });
  
    let errorMessage = "";
  
    if (name === "forename") {
      errorMessage = validateForename(value);
    } else if (name === "surname") {
      errorMessage = validateSurname(value);
    } else if (name === "dob") {
      errorMessage = validateDob(value);
    } else if (name === "description") {
      errorMessage = validateDescription(value);
    } else if (name === "nationality") {
      errorMessage = validateNationality(value);
    } else if (name === "image") {
      errorMessage = validateImage(value);
    }
  
    setError({ ...error, [name]: errorMessage });
    console.log(error)
    validateForm();
  };

  const validateForm = () => {
    const isValid =
      (error.forename !== null && error.forename.length < 1 ) &&
      ( error.surname !== null && error.surname.length < 1)&&
      (error.dob !== null && error.dob.length <1)&&
      ( error.description !== null && error.description.length <1)&&
      (error.nationality !== null && error.nationality.length <1 )&&
      (error.image !== null && error.image.length <1  );

    setFormValid(isValid);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addDriver(driver));
    console.log("SUBMIT", driver);
    setDriver({
      forename: "",
      surname: "",
      dob: "",
      nationality: "",
      description: "",
      teams: "",
      image: "",
      createdinDB: true,
    });
    navigate("/home");
  };

  const handleTeamSelection = (e) => {
    const options = e.target.options;
    let teamsSelected = "";

    for (let i = 0; i < options.length; i++) {
      if (options[i].selected && !selectedTeams.split(",").includes(options[i].value)) {
        const newTeam = options[i].value + ", ";
        teamsSelected = selectedTeams.concat(newTeam);
        setSelectedTeams(teamsSelected);
        let selectedTeamsRef = teamsSelected;
        selectedTeamsRef = selectedTeamsRef.split(",");
        selectedTeamsRef.pop();
        selectedTeamsRef = selectedTeamsRef.join(",");
        setShowTeams(selectedTeamsRef);
      }
    }
  };

  return (
    <div key="">
      <div>
        <NavBar />
      </div>
      <form key={"add-driver-form"} onSubmit={handleSubmit}>
        <div className={styles["form-container"]}>
          <div>
            <div className={styles.inputsIzq}>
              <input
                key={"driver-forename"}
                type="text"
                name="forename"
                value={driver.forename}
                onChange={handleChange}
                placeholder="Name"
                className={error.forename ? "error" : ""}
              />
              {error.forename && <div className="error">{error.forename}</div>}
              <input
                key={"driver-surname"}
                type="text"
                name="surname"
                value={driver.surname}
                onChange={handleChange}
                placeholder="Surname"
              />
              {error.surname && <div className="error">{error.surname}</div>}
              <input
                key={"driver-dob"}
                type="text"
                name="dob"
                value={driver.dob}
                onChange={handleChange}
                placeholder="Date of birth (DD-MM-YYYY)"
              />
              {error.dob && <div className="error">{error.dob}</div>}
            </div>
            <div className={styles.inputsDer}>
              <input
                key={"driver-description"}
                type="text"
                name="description"
                value={driver.description}
                onChange={handleChange}
                placeholder="Description"
              />
              {error.description && <div className="error">{error.description}</div>}
              <input
                key={"driver-nationality"}
                type="text"
                name="nationality"
                value={driver.nationality}
                onChange={handleChange}
                placeholder="Nationality"
              />
              {error.nationality && <div className="error">{error.nationality}</div>}
              <input
                key={"driver-img"}
                type="text"
                name="image"
                value={driver.image}
                onChange={handleChange}
                placeholder="URL image"
              />
              {error.image && <div className="error">{error.image}</div>}
            </div>
            <select value={"defaultValue"} name="teams" id="teams" onChange={handleTeamSelection}>
              <option value="defaultValue" disabled>          
              Choose your teams
              </option>
              {teams.map((team, index) => (
                <option key={team + index} value={team}>
                  {team}
                </option>
              ))}
            </select>
            <div className={styles.teamselected}>
              {showTeams.length > 0 ? <div>{showTeams}</div> : <div>Your teams</div>}
            </div>
          </div>
          <div>
            <button type="submit" disabled={!formValid}>
              Add driver
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  drivers: state.drivers,
});

export default connect(mapStateToProps)(Form);