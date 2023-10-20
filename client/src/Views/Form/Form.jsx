import React, { useState, useEffect } from "react";
import { useDispatch, connect, useSelector } from "react-redux";
import NavBar from "../../components/NavBar/NavBar";
import { addDriver, getTeams } from "../../Redux/Actions/actions";
import styles from "./Form.module.css";
import { useNavigate } from "react-router-dom";
import { validateDescription, validateDob,validateForename,validateImage,validateNationality,validateSurname } from "./validations";

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
    forename: "",
    surname: "",
    dob: "",
    nationality: "",
    description: "",
    teams: "",
    image: "",
  })
  const [formValid, setFormValid] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setDriver({ ...driver, [name]: value });

    if (name === "forename") {
      const forenameError = validateForename(value);
      setError({ ...error, forename: forenameError });
    } else if (name === "surname") {
      const surnameError = validateSurname(value);
      setError({ ...error, surname: surnameError });
    } else if (name === "dob") {
      const dobError = validateDob(value);
      setError({ ...error, dob: dobError });
    } else if (name === "description") {
      const descriptionError = validateDescription(value);
      setError({ ...error, description: descriptionError });
    } else if(name === "nationality") {
      const nationalityError = validateNationality(value);
      setError({...error, nationality: nationalityError})
    } else if (name === "image") {
      const imageError = validateImage(value);
      setError({ ...error, image: imageError });
    }   const allFieldValid = forenameError === "" &&
    surnameError === "" &&
    dobError === "" &&
    descriptionError === "" &&
    nationalityError === "" &&
    imageError === "";
    setFormValid(allFieldValid)
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

  let teamsSelected = "";
  const handleTeamSelection = (e) => {
    const options = e.target.options;
    for (let i = 0; i < options.length; i++) {
      if (
        options[i].selected &&
        !selectedTeams.split(",").includes(options[i].value)
      ) {
        const newTeam = options[i].value + ", ";
        teamsSelected = selectedTeams.concat(newTeam);
        setSelectedTeams(teamsSelected);
        // selectedTeams = []
        setDriver({ ...driver, teams: selectedTeams });
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
              placeholder="Nombre"
              className={error.forename ? "error" : ""}
            />
            {error.forename && <div className="error">{error.forename}</div>}
            <input
              key={"driver-surname"}
              type="text"
              name="surname"
              value={driver.surname}
              onChange={handleChange}
              placeholder="Apellido"
            />
            {error.surname && <div className="error">{error.surname}</div>}
            <input
              key={"driver-dob"}
              type="text"
              name="dob"
              value={driver.dob}
              onChange={handleChange}
              placeholder="Fecha de nacimiento (DD-MM-YYYY)"
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
              placeholder="Descripción"
            />
            {error.description && <div className="error">{error.description}</div>}
            <input
              key={"driver-nationality"}
              type="text"
              name="nationality"
              value={driver.nationality}
              onChange={handleChange}
              placeholder="Nacionalidad"
            />
            {error.nationality && <div className="error">{error.nationality}</div>}
            <input
              key={"driver-img"}
              type="text"
              name="image"
              value={driver.image}
              onChange={handleChange}
              placeholder="URL de la imagen"
            />
            {error.image && <div className="error">{error.image}</div>}
            </div>
            <select name="teams" id="teams" onChange={handleTeamSelection}>
              <option value="" disabled selected>
                Elije tus equipos
              </option>
              {teams.map((team, index) => (
                <option key={team + index} value={team}>
                  {team}
                </option>
              ))}
            </select>
            <div className={styles.teamselected}>
              {showTeams.length > 0 ? (
                <div>{showTeams}</div>
              ) : (
                <div>Tus equipos</div>
              )}
            </div>
          </div>
          <div>
            <button type="submit" disabled={!formValid}>Agregar Conductor</button>
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
