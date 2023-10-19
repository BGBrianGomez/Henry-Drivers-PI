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

  return (
    <div className={styles.totalConteiner}>
      <img src={logof1} className={styles.img}/>
      <Link to="/home">
        <button>Home</button>
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
            >
              <option value="" disabled selected>Selecciona un equipo</option>
              {teams.map((team, index) => (
                <option key={index} value={team}>
                  {team}
                </option>
              ))}
            </select>
        <select onChange={(e) => filter(e)}>
        <option value="" disabled selected>Selecciona una opción</option>
          <option value="all">Todos</option>
          <option value="database">Base de Datos</option>
          <option value="API">API</option>
        </select>
        <select value="select"onChange={(e) => order(e)}>
          <option value="select" disabled>
            Seleccione una opcion
          </option>
          <option value="A-Z">Alfabetico A-Z</option>
          <option value="Z-A">Alfabetico Z-A</option>
          <option value="dobA">Dob(Asc)</option>
          <option value="dobD">Dob(Desc)</option>
        </select>
      </div>
    </div>
  );
};

export default NavBar;
