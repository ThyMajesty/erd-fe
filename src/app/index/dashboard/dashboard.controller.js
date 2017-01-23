export class DashboardController {
    constructor(BaseApi, addEditBaseModal, $state, $timeout) {

        this.BaseApi = BaseApi;
        this.data = {};
        this.$timeout = $timeout;

        this.newBase = null;
        this.addEditBaseModal = addEditBaseModal;
        this.$state = $state;

        this.BaseApi.getBasesList().then((response) => {
            this.data = {
                bases: response.data
            };
            this.someUnvalid();
        });
    }

    addBase() {
        this.addEditBaseModal({ type: 'add' }).open().then((response) => {
            this.$state.transitionTo('app.index.create', { base: response, baseId: null });
        });
    }

    deleteBase(base) {
        this.addEditBaseModal({ type: 'delete' }).open(base).then((response) => {
            if (response === 'confirm') {
                this.BaseApi.deleteBase(base.pk).then(() => {
                    this.BaseApi.getBasesList().then((response) => {
                        this.data = {
                            bases: response.data
                        };
                    });
                }, () => {});
            }
        });
    }

    someUnvalid() {
        $('#images').masonry({
            // set itemSelector so .grid-sizer is not used in layout
            itemSelector: '.item',
            // use element for option
            columnWidth: '200',
            percentPosition: true
        }).masonry('layout');

    }
}
