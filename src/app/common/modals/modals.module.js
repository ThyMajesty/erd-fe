import { AddEditEntityModule } from './add-edit-entity/add-edit-entity.module';
import { AddEditBaseModule } from './add-edit-base/add-edit-base.module';
import { ShareBaseModule } from './share-base/share-base.module';

export const ModalsModule = angular.module('erd.common.modals', [
        AddEditEntityModule,
        AddEditBaseModule,
        ShareBaseModule
    ])
    .name;
