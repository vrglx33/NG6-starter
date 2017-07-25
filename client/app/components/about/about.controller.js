class AboutController {
    /**
     * @param {userService} userService
     */
    constructor(userService) {
        "ngInject";
        this.userService = userService;
        this.name = 'about';
    }
    $onInit = () => {
        this.users = [];
        let data = this.users;
        this.data = this.userService.getData().then((response) => {
            data.push(response.data)
        });
        this.users = data;
    };


}

export default AboutController;