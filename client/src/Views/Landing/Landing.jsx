import React from "react";
import {Link} from "react-router-dom";
import styles from "./Landing.module.css"
import bgImg from "../../assets/FondoLanding.jpg"

const Landing = ()=>{
    return(
<div className={styles.landing}>
    <img src={bgImg}/>
    <Link className={styles.button} to="/home">
    <button >Ingresar</button>
    </Link>
</div>
    )
}

export default Landing;