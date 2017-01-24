export class AuthController {
    constructor(AuthApi, API, $localStorage) {
        this.AuthApi = AuthApi;
        this.$storage = $localStorage;
        this.AuthApi.getSocialUrls().then((response) => {
            this.backends = response.data.backends;
        });
        this.$storage.token = null;
    }
}
