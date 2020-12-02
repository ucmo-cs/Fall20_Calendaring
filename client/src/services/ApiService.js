import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/';

class ApiService {

    newAccount(username, email, password) {
        return axios.post(API_BASE_URL, + 'accounts' + '/' + username + '/' + email + '/' + password);
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
    addTask(account_id, calendar_id, title, description) {
        return axios.post(API_BASE_URL, + 'tasks' + '/' + account_id + '/' + calendar_id + '/' + title + '/' + description);
    }

    shareCalendar(calendar_id, account_id) {
        return axios.post(""+API_BASE_URL, + 'calendars', account_id, calendar_id);
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
