import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactComponent from './contact.component';

const contactModule = angular.module('contact', [
  uiRouter,
])

  .component('contact', contactComponent)

  .name;

export default contactModule;
