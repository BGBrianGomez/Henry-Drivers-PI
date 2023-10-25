import { filterOrigin, orderDrivers, filterByTeam } from "../../Redux/Actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css"
import logof1 from "../../assets/logof1.png"

const NavBar = () => {
  const dispatch = useDispatch();

const teams = useSelector((state)=> state.allTeams)

  const filter = (e) => {
    const option = e.target.value;
    console.log("log de option", option);
    dispatch(filterOrigin(option));
  };

  const order = (e) => {
    const option = e.target.value;
    dispatch(orderDrivers(option))
  };

const teamsFilter = (e)=>{
  const option = e.target.value;
  dispatch(filterByTeam(option))
}

const handleHomeButton = () =>{
  if(location.pathname === "/home"){
    window.location.reload();
  }
}

  return (
    <div className={styles.totalConteiner}>
      <img src={logof1} className={styles.img}/>
      <Link to="/home">
        <button onClick={handleHomeButton} >Home</button>
      </Link>
      <Link to="/form">
        <button>Form</button>
      </Link>
      <div>
        <SearchBar />
      </div>
      <div>
      <select
              name="team-filter"
              id="team-filter"
              onChange={(e)=> teamsFilter(e)}
              defaultValue={"defaultoption"}
            >
              <option value="defaultoption" disabled >Select a team</option>
              {teams.map((team, index) => (
                <option key={index} value={team}>
                  {team}
                </option>
              ))}
            </select>
        <select onChange={(e) => filter(e)} defaultValue={"optiondefault"}>
        <option value="optiondefault" disabled>Select a option</option>
          <option value="all">All</option>
          <option value="database">Data base</option>
          <option value="API">API</option>
        </select>
        <select value="select"onChange={(e) => order(e)}>
          <option value="select" disabled>
          Select a option
          </option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          <option value="dobA">Dob(Asc)</option>
          <option value="dobD">Dob(Desc)</option>
        </select>
      </div>
    </div>
  );
};

export default NavBar;
