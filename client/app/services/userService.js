export default class userService {
    /**
     * @param {$http} $http
     */
    constructor($http) {
        this.$http = $http;
    }
    getData = () => {
        var fetch = this.$http.get(`http://localhost:5000/data`);
        return fetch;
    }
}