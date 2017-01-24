export class DashboardController {
    constructor(BaseApi, addEditBaseModal, shareBaseModal, $state, $timeout, $localStorage) {

        this.BaseApi = BaseApi;
        this.data = {};
        this.$timeout = $timeout;

        this.newBase = null;
        this.addEditBaseModal = addEditBaseModal;
        this.shareBaseModal = shareBaseModal;
        this.$state = $state;
        this.$localStorage = $localStorage;
        
        this.BaseApi.getBasesList().then((response) => {
            this.mapData(response.data);
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
                        this.mapData(response.data);
                    });
                }, () => {});
            }
        });
    }

    mapData(data) {
        this.data = data.reduce((acc, next) => {
            let owner = next.owner[0][Object.keys(next.owner[0])];
            next.owner.forEach((el)=>{
                angular.forEach(el, (value, key) => {
                    value.pk = key;
                    if (this.$localStorage.user.pk === value.pk) {
                        value.isMe = true;
                    }
                    if (!acc[key]) {
                        acc[key] = {
                            owner: value,
                            bases: [next]
                        }
                    } else {
                        acc[key].bases.push(next);
                    }
                });
            })
            return acc;
        }, {});
        /*this.data = {
            bases: data
        };*/
    }

    shareBase(base) {
        this.shareBaseModal().open(base).then((response) => {
            
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
