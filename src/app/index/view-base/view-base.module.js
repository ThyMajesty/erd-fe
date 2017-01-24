import { ViewBaseComponent } from './view-base.component';

export const ViewBaseModule = angular.module('erd.index.dashboard.view-base', [])
    .component('viewBase', ViewBaseComponent)
    .name;
