import {Link} from "react-router-dom";

const card = (driver)=>{
    const {id, forename, surname, image, teams} = driver;

    return(
        <div>
            <Link to={`/detail/${id}`}>
                <img src={image} alt="Driver"/>
                <h2>{`${forename}`}</h2>
                <h2>{`${surname}`}</h2>
                <h3>{`${teams}`}</h3>
            </Link>
        </div>
    )
}

export default card;