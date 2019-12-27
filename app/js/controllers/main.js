'use strict';

import alertify from 'alertifyjs';

export default class MainController {
	constructor(
    $scope,
    gettextCatalog,
    tools,
    utils
  ) {
		'ngInject';

    alertify.defaults.movable = false;
    alertify.defaults.closable = false;
    alertify.defaults.transition = 'fade';
    alertify.defaults.notifier.delay = 3;

//    setTimeout(function () {
//      var labels = {
//        'ok': gettextCatalog.getString('OK'),
//        'cancel': gettextCatalog.getString('Cancel')
//      };
//      alertify.set('alert', 'labels', labels);
//      alertify.set('prompt', 'labels', labels);
//      alertify.set('confirm', 'labels', labels);
//    }, 100);
//
//    /* If in package.json appears development:{mode:true}*/
//    /* activate development tools */
//    tools.ifDevelopmentMode();
//
//    $(document).delegate('.action-open-url-external-browser', 'click', function (e) {
//      e.preventDefault();
//      utils.openUrlExternalBrowser($(this).prop('href'));
//      return false;
//    });
//
//    /* Functions that checks if new version is available */
//    setTimeout(function () {
//      tools.checkForNewVersion();
//    }, 30000);

  }

	$onInit = () => {
		this.heading = 'Welcome to AngularJS ES6 Starter-Kit';
		console.log('Activated Main Controller.');
	};
}
