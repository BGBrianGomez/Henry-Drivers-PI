import React from "react";
import {Link} from "react-router-dom";
import styles from "./Landing.module.css"

const landing = ()=>{
    return(
<div className={style.landing}>
    <img src="src/assets/FondoLanding.jpg"></img>
    <Link to="/home">
    <button className={styles.button}>Ingresar</button>
    </Link>
</div>
    )
}

export default landing;