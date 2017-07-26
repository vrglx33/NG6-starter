class ContactController {
    /**
     * @ngInject
     * @param {$localStorage} $localStorage
     */
    constructor($localStorage) {
        this.$localStorage = $localStorage;
        this.name = 'contact';
        this.data = [];
        this.localstorage = this.$localStorage
        this.$localStorage.$default({
            "data": this.data
        });
    }
    flipForm = (data) => {
        let element = document.getElementsByClassName("cont-flip");
        let [first, ...rest] = element
        if (data === "show") {
            first.classList.add('flipped')
        } else {
            first.classList.remove('flipped')
        }
    }
    sendForm = (form) => {
        let cons = { "company": form.company, "mail": form.mail, "name": form.name, "message": form.message, "phone": form.phone };
        this.data.push(cons);
        this.localstorage.data = this.data;
    }

}
ContactController.$inject = ["localStorage", "sessionStorage"];
export default ContactController;