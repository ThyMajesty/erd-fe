export class ShareBaseController {
    constructor(base, $uibModalInstance, BaseApi) {
        this.$uibModalInstance = $uibModalInstance;
        this.base = base || {};
        this.BaseApi = BaseApi;
        this.shareLink = location.href.replace(location.hash, '') + '#/view/' + this.base.pk;
        this.clipboard = new Clipboard('.btn-copy');
        console.log(this.clipboard);
    }

    confirm() {
        this.BaseApi.saveForeingBase({db: this.base.pk}).then((response) => {

            this.$uibModalInstance.close(response);
        })
    }

    cancel() {
        this.$uibModalInstance.dismiss('cancel');
    }


}
