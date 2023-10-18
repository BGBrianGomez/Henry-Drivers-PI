import { filterOrigin, orderDrivers } from "../../Redux/Actions/actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
  const dispatch = useDispatch();

  const filter = (e) => {
    const option = e.target.value;
    console.log("log de option", option);
    dispatch(filterOrigin(option));
  };

  const order = (e) => {
    const option = e.target.value;
    dispatch(orderDrivers(option))
  };

  return (
    <div>
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
        <select onChange={(e) => filter(e)}>
          <option value="select" disabled>
            Seleccione una opcion
          </option>
          <option value="all">Todos</option>
          <option value="database">Base de Datos</option>
          <option value="API">API</option>
        </select>
        <select onChange={(e) => order(e)}>
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
