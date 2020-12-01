import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

class ApiService {

    fetchAccounts(usr, pwd) {
        //By username and password
        return axios.get(API_BASE_URL + '/accounts/' + usr + '/' + pwd);
    }

    fetchTasks(account_id) {
        return axios.get(API_BASE_URL + '/tasks/' + account_id);
    }
    addTask(account_id, calendar_id, title, description) {
        return axios.post(API_BASE_URL, + 'tasks' + '/' + account_id + '/' + calendar_id + '/' + title + '/' + description);
    }

    // deleteCar(carId) {
    //     return axios.delete(CAR_API_BASE_URL + '/' + carId);
    // }

    // addCar(car) {
    //     return axios.post(""+CAR_API_BASE_URL, car);
    // }

    // editCar(car) {
    //     return axios.put(CAR_API_BASE_URL + '/' + car.id, car);
    // }

}

export default new ApiService();
