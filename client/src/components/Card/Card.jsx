import {Link} from "react-router-dom";

const card = (driver)=>{
    const {id, forename, surname, image, teams} = driver;

    return(
        <div>
            <Link to={`/detail/${id}`}>
                <div>
                <img src={image} alt="Driver"/>
                </div>
                <div> 
                    {/* flex: colum */}
                <h2>{`${forename}`}</h2>
                <h2>{`${surname}`}</h2>
                <h3>{`${teams}`}</h3>
                </div>
            </Link>
        </div>
    )
}

export default card;