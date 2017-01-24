export class ViewBaseController {
    constructor(BaseApi, $timeout, $stateParams, $state) {
        dataInit = dataInit.bind(this);
        this.BaseApi = BaseApi;
        if (!$stateParams.base && !$stateParams.baseId) {
            
        } else{
            dataInit($stateParams.base, $stateParams.baseId)
        }

        function dataInit (base, baseId) {
            if (baseId) {
                this.BaseApi.getBase(baseId).then((response) => {
                    this.base = response.data || this.base;
                });
            }
        }
    }
    
}
