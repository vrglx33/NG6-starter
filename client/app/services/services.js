import angular from 'angular';

import userService from './userService';

export default angular
    .module('app.services', [])
    .service({
        userService
    })
userService.$inject = ["$http"];