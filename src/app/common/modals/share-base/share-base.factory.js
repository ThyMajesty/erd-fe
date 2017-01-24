import { ShareBaseController as controller } from './share-base.controller';
import template from './share-base.template.html';

export function ShareBaseFactory($uibModal) {
    return function(config) {
        return {
            open: (base) => {
                const modalInstance = $uibModal.open({
                    animation: true,
                    template: template,
                    controller: controller,
                    controllerAs: '$ctrl',
                    resolve: {
                        base: () => base,
                        config: () => config
                    }
                });
                return modalInstance.result;
            }
        };
    }
}
