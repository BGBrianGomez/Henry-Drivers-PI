import React, { useState, useEffect } from "react";
import { useDispatch, connect, useSelector } from "react-redux";
import NavBar from "../../components/NavBar/NavBar";
import { addDriver, getTeams } from "../../Redux/Actions/actions";
import styles from "./Form.module.css";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeams());
  }, []);

  const teams = useSelector((state) => state.allTeams);

  const navigate = useNavigate()
  // console.log("teams", teams);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDriver({ ...driver, [name]: value });
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
navigate("/home")
  };

  
  let teamsSelected = "";
  const handleTeamSelection = (e) => {
    const options = e.target.options;
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected && !selectedTeams.split(",").includes(options[i].value)) {
        const newTeam = options[i].value + ", ";
        teamsSelected = selectedTeams.concat(newTeam)
        setSelectedTeams(teamsSelected);
        // selectedTeams = []
        setDriver({...driver, teams: selectedTeams})
        let selectedTeamsRef = teamsSelected
        selectedTeamsRef = selectedTeamsRef.split(",");
        selectedTeamsRef.pop();
        selectedTeamsRef = selectedTeamsRef.join(",")
        setShowTeams(selectedTeamsRef)
      }
    }
  };






  console.log("SELECT", selectedTeams);

  return (
    <div key="">
      <div>
        <NavBar />
      </div>
      <form key={"add-driver-form"} onSubmit={handleSubmit}>
        <div className={styles["form-container"]}>
          <div>
            <input
            key={"driver-forename"}
              type="text"
              name="forename"
              value={driver.forename}
              onChange={handleChange}
              placeholder="Nombre"
            />
            <input
            key={"driver-surname"}
              type="text"
              name="surname"
              value={driver.surname}
              onChange={handleChange}
              placeholder="Apellido"
            />
            <input
            key={"driver-dob"}
              type="text"
              name="dob"
              value={driver.dob}
              onChange={handleChange}
              placeholder="Fecha de nacimiento"
            />
            <input
            key={"driver-description"}
              type="text"
              name="description"
              value={driver.description}
              onChange={handleChange}
              placeholder="Descripción"
            />
            <input
            key={"driver-nationality"}
              type="text"
              name="nationality"
              value={driver.nationality}
              onChange={handleChange}
              placeholder="Nacionalidad"
            />
            <select
              name="teams"
              id="teams"
              onChange={handleTeamSelection}
            >
              <option value="" disabled selected>Elije tus teams</option>
              {teams.map((team, index) => (
                <option key={team+index} value={team}>
                  {team}
                </option>
              ))}
            </select>
            <div className={styles.teamselected}>
              {showTeams.length > 0 ? <div>{showTeams}</div>: <div>Seleccione los teams</div>}
            </div>
          </div>
          <div>
            <input
            key={"driver-img"}
              type="text"
              name="image"
              value={driver.image}
              onChange={handleChange}
              placeholder="URL de la imagen"
            />
            <button type="submit">Agregar Conductor</button>
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
