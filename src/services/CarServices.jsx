import axios from "axios";
const BASE_REST_API_URL = "http://localhost:9192/car";

let token = localStorage.getItem("JWT");

class CarServices {
  getAllCars() {
    return axios.get(BASE_REST_API_URL + "/getallcars", {
      headers: {
        Authorization: token,
      },
    });
  }

  addCar(hostId, car) {
    return axios.post(BASE_REST_API_URL + "/add/" + hostId, car, {
      headers: {
        Authorization: token,
      },
    });
  }

  getCarById(id) {
    return axios.get(BASE_REST_API_URL + "/getone/" + id, {
      headers: {
        Authorization: token,
      },
    });
  }

  updateCar(id, car) {
    console.log("in service: ", car);
    return axios.put(BASE_REST_API_URL + "/update/" + id, car, {
      headers: {
        Authorization: token,
      },
    });
  }

  deleteCar(id) {
    return axios.delete(BASE_REST_API_URL + "/delete/" + id, {
      headers: {
        Authorization: token,
      },
    });
  }
  getCarDetailsByLocationAndDate(
    sourceLocation,
    destinationLocation,
    fromDate,
    toDate
  ) {
    return axios.get(BASE_REST_API_URL + "/cardetails", {
      params: {
        sourceLocation: sourceLocation,
        destinationLocation: destinationLocation,
        fromDate: fromDate,
        toDate: toDate,
      },
    });
  }
}

export default new CarServices();
