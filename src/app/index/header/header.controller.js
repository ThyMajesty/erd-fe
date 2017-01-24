export class HeaderController {
    constructor($localStorage, $state) {
        this.$storage = $localStorage;
        this.$state = $state;
    }

    logOut() {
        this.$storage.token = null;
        this.$state.go("app.auth")
    }
    
}