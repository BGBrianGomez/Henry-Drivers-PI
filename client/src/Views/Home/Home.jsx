import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDrivers, getTeams } from "../../Redux/Actions/actions";
import Cards from "../../components/Cards/Cards";
import NavBar from "../../components/NavBar/NavBar";
import Paginado from "../../components/Paginado/Paginado";

const Home = () => {
  const dispatch = useDispatch();
  const filtredDrivers = useSelector((state) => state.filtredDrivers);
  const allDrivers = useSelector((state) => state.allDrivers);
  const driverPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastDriver = currentPage * driverPerPage;
  const indexOfFirstDriver = indexOfLastDriver - driverPerPage;
  const currentDrivers = filtredDrivers.slice(
    indexOfFirstDriver,
    indexOfLastDriver
  );
  
useEffect(()=>{
  dispatch(getTeams())
  dispatch(getAllDrivers())
},[dispatch])


  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };



  window.scrollTo(0, 0);
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <Cards drivers={currentDrivers} />
      </div>
      <div>
        <Paginado
          allDrivers={filtredDrivers}
          driverPerPage={driverPerPage}
          paginado={paginado}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Home;
