export default class userService {
    /**
     * @param {$http} $http
     */
    constructor($http) {
        this.$http = $http;
    }
    getData = () => {
        var fetch = this.$http({
            method: "GET",
            url: `http://localhost:5000/data`
        });
        return fetch;
    }
}