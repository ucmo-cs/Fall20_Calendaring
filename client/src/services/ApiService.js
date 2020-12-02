import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/';

class ApiService {

    newAccount(entry) {
        return axios.post(API_BASE_URL, + 'accounts/', entry);
    }
    fetchAccountIds() {
        return axios.get(API_BASE_URL + 'accounts')
    }
    fetchAccounts(usr, pwd) {
        //By username and password
        return axios.get(API_BASE_URL + 'accounts/' + usr + '/' + pwd);
    }

    fetchCalendars(account_id) {
        return axios.get(API_BASE_URL + 'calendars/' + account_id);
    }
    fetchTasks(account_id) {
        return axios.get(API_BASE_URL + 'tasks/' + account_id);
    }
    fetchTasksByDate(account_id, year, month, date) {
        return axios.get(API_BASE_URL + 'tasks/' + account_id + '/' + year + '/' + month + '/' + date);
    }
    addTask(account_id, entry) {
        return axios.post(API_BASE_URL, + 'tasks' + '/', entry);
    }

    shareCalendar(entry) {
        return axios.post(""+API_BASE_URL + 'calendars/', entry);
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
