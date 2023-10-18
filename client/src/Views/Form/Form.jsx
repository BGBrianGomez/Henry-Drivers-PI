import NavBar from "../../components/NavBar/NavBar";

<div>
  <div>
    {/* DIV PARA SEPARAR TODO EL FORMULARIO DE INFO */}
    <div>
      {/* DIV FLEX: ROW*/}
      <div>{/* div contenedor de nombre y nacionalidad, columna */}</div>
      <div>{/* div contenedor de apellido y nacimiento, columna */}</div>
    </div>
    <div>{/* FLEX COLUM, TEAMS Y DESCRIPTION */}</div>
  </div>
  <div></div>
</div>;

const Form = () => {
  return (
    <div>
      <NavBar />
      <h2>Soy el FORM</h2>
    </div>
  );
};

export default Form;
