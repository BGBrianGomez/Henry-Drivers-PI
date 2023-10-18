import axios from "axios";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./Detail.module.css"

const Detail = () => {
  const { id } = useParams();

  const [driver, setDriver] = useState({});

  useEffect(() => {
    let formattedData = {};
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/drivers/${id}`);
        const data = response.data;

        if (Object.keys(data).length === 0) {
          setDriver(null);
        } else {
          if (data.createInDb) {
            formattedData = {
              ...data,
              image: data.image,
            };
          } else {
            formattedData = {
              ...data,
              image: data.image.url,
            };
          }
          setDriver(formattedData);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  const formatTeams = (teams) => {
    if (typeof teams === "string") {
      return teams;
    } else if (Array.isArray(teams)) {
      return teams.map((team) => team.name).join(", ");
    } else {
      return "";
    }
  };

  if(!driver || !driver.name) {
    return(
        <div>
            <p>No se encontro el conductor</p>
        </div>
    )
  }

  const {forename, surname} = driver.name

console.log(driver);
  return (
    <div>
      <NavBar />
    <div className={styles.container} >
      {/* DIV GENERAL, FLEX ROW, FOTO FONDO DIFUMINADA */}
      <div className={styles.info}>
        <h3>{driver.id}</h3>
        <h3>{driver.nationality}</h3>
        <h3>{driver.dob}</h3>
        <h3>{formatTeams(driver.teams)}</h3>
        <h3>{driver.description}</h3>
        {/* id, nacionalidad, etc, FLEX COL*/}</div>
      <div className={styles.dni}>
        <img src={driver.image} className={styles.img} />
        <h2>{forename}</h2>
        <h2>{surname}</h2>
        {/* IMG  y NOMBRE APELLIDO, FLEX COL*/}</div>
    </div>
    </div>
  );
};

export default Detail;
