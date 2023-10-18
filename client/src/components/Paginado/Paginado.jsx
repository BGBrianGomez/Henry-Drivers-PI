import React from "react";

const Paginado = ({allDrivers,driverPerPage,paginado})=>{

const pageNumbers = [];

for(let i = 1;i<=Math.ceil(allDrivers.length/driverPerPage); i++){
    pageNumbers.push(i)
}
return(
    <div>
        {pageNumbers?.map(numerito => (<button key={numerito} onClick={()=>paginado(numerito)}>{numerito}</button>))}
    </div>
)

}

export default Paginado;