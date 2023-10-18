import {
  GET_BYNAME,
  GET_DRIVERS,
  FILTER_ORIGIN,
  ORDER_DRIVER,
} from "./actionTypes";
import axios from "axios";

export const getByName = (name) => {
  return async function (dispatch) {
    try {
      let json = await axios.get("http://localhost:3001/drivers?name=" + name);
      dispatch({
        type: GET_BYNAME,
        payload: json.data,
      });
    } catch (error) {
      throw Error({ error: error.message });
    }
  };
};

export const getAllDrivers = () => {
  return async function (dispatch) {
    try {
      let drivers = await axios.get("http://localhost:3001/drivers");
      dispatch({
        type: GET_DRIVERS,
        payload: drivers.data,
      });
    } catch (error) {
      throw Error({ error: error.message });
    }
  };
};

export const filterOrigin = (option) => {
  // all, database, API
  return function (dispatch) {
    try {
      dispatch({
        type: FILTER_ORIGIN,
        payload: option,
      });
    } catch (error) {
      throw Error({ error: error.message });
    }
  };
};

export const orderDrivers = (option) => {
  return function (dispatch) {
    try {
      dispatch({
        type: ORDER_DRIVER,
        payload: option,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
};
