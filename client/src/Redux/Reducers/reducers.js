import {
  GET_BYNAME,
  GET_DRIVERS,
  FILTER_ORIGIN,
  ORDER_DRIVER,
} from "../Actions/actionTypes";

const initialState = {
  allDrivers: [],
  allTeams: [],
  filtredDrivers: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BYNAME:
      return { ...state, filtredDrivers: action.payload };

    case GET_DRIVERS:
      return {
        ...state,
        allDrivers: action.payload,
        filtredDrivers: action.payload.map((driver) => ({ ...driver })),
      };

    case FILTER_ORIGIN:
      const origin = action.payload;
      const drivers = state.allDrivers;

      console.log("ORIGIN", origin);

      const filtered =
        origin === "database"
          ? drivers.filter((driver) => driver.createdinDB === true)
          : drivers.filter((driver) => driver.createdinDB === false);
      console.log("filtered", filtered);
      return {
        ...state,
        filtredDrivers: origin === "all" ? state.allDrivers : filtered,
      };

    case ORDER_DRIVER:
      const order = action.payload;

      if (order === "A-Z") {
        const orderAZ = [...state.filtredDrivers].sort((a, b) => {
          const nameA = a.forename.toLowerCase();
          const nameB = b.forename.toLowerCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        return { ...state, filtredDrivers: orderAZ };
      } else if (order === "Z-A") {
        const orderZA = [...state.filtredDrivers].sort((a, b) => {
          const nameA = a.forename.toLowerCase();
          const nameB = b.forename.toLowerCase();
          if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }
          return 0;
        });
        return { ...state, filtredDrivers: orderZA };
      } else if (order === "dobA") {
        const orderDOBA = [...state.filtredDrivers].sort(
          (a, b) => {const dateA = new Date(a.dob.split('-')[2]);
          const dateB = new Date(b.dob.split('-')[2]);
          return dateA - dateB;}
        );
        return { ...state, filtredDrivers: orderDOBA };
      } else if (order === "dobD") {
        const orderDOBD = [...state.filtredDrivers].sort(
          (a, b) => {const dateA = new Date(a.dob.split('-')[2]);
          const dateB = new Date(b.dob.split('-')[2]);
          return dateB - dateA;}
        );
        return { ...state, filtredDrivers: orderDOBD };
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default reducer;
