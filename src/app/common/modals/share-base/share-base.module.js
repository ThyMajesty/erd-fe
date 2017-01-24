import { ShareBaseFactory } from './share-base.factory';
import './share-base.styles.less';

export const ShareBaseModule = angular.module('erd.common.modals.share-base', [])
    .factory('shareBaseModal', ShareBaseFactory)
    .name;
