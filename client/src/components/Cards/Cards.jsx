import Card from "../Card/Card";

const Cards = (drivers)=>{
    return (
        <div>
            {drivers.map((driver)=>{<Card driver={driver}/>})}
        </div>
    )
}

export default Cards;