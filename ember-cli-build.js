'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {});

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  app.import('vendor/styles/bootstrap.css');
  app.import('vendor/styles/font-awesome.css');
  app.import('vendor/styles/font-awesome-ie7.css');
  app.import('vendor/styles/font-awesome-4.css');
  app.import('vendor/styles/cubism.css');
  app.import('vendor/styles/rickshaw.css');
  app.import('vendor/styles/bootstrap-combobox.css');
  app.import('vendor/styles/bootstrap-slider.min.css');
  app.import('vendor/styles/bootstrap-switch.min.css');
  app.import('vendor/styles/diffview.css');
  app.import('vendor/styles/visualsearch.css');
  app.import('vendor/styles/jquery-ui-bootstrap/jquery-ui-1.8.16.custom.css');
  app.import('vendor/styles/bootstrap-checkbox.css');
  app.import('vendor/styles/chosen.min.css');
  app.import('vendor/styles/datepicker.css');

  app.import('vendor/scripts/console-helper.js');
  app.import('vendor/scripts/jquery-1.9.1.js');
  app.import('vendor/scripts/jquery-migrate.js');
  app.import('vendor/scripts/handlebars-1.0.0.beta.6.js');
  // app.import('vendor/scripts/ember-latest.js');
  // app.import('vendor/scripts/ember-data-latest.js');
  // app.import('vendor/scripts/ember-i18n-1.4.1.js');
  app.import('vendor/scripts/bootstrap.js');
  app.import('vendor/scripts/bootstrap-combobox.js');
  app.import('vendor/scripts/bootstrap-slider.min.js');
  app.import('vendor/scripts/bootstrap-switch.min.js');
  app.import('vendor/scripts/d3.v2.js');
  app.import('vendor/scripts/cubism.v1.js');
  app.import('vendor/scripts/jquery.ui.core.js');
  app.import('vendor/scripts/jquery.ui.position.js');
  app.import('vendor/scripts/jquery.ui.widget.js');
  app.import('vendor/scripts/jquery.ui.autocomplete.js');
  app.import('vendor/scripts/jquery.ui.mouse.js');
  app.import('vendor/scripts/jquery.ui.datepicker.js');
  app.import('vendor/scripts/jquery-ui-timepicker-addon.js');
  app.import('vendor/scripts/jquery.ui.slider.js');
  app.import('vendor/scripts/jquery.ui.sortable.js');
  app.import('vendor/scripts/jquery.ui.custom-effects.js');
  app.import('vendor/scripts/jquery.timeago.js');
  app.import('vendor/scripts/jquery.ajax-retry.js');
  app.import('vendor/scripts/jquery.sticky-kit.js');
  app.import('vendor/scripts/jquery.typeahead.js');
  app.import('vendor/scripts/underscore.js');
  app.import('vendor/scripts/backbone.js');
  app.import('vendor/scripts/difflib.js');
  app.import('vendor/scripts/diffview.js');
  app.import('vendor/scripts/visualsearch.js');
  app.import('vendor/scripts/moment.min.js');
  app.import('vendor/scripts/moment-timezone-with-data-2010-2020.js');
  app.import('vendor/scripts/workflow_visualization.js');
  app.import('vendor/scripts/rickshaw.js');
  app.import('vendor/scripts/spin.js');
  app.import('vendor/scripts/jquery.flexibleArea.js');
  app.import('vendor/scripts/FileSaver.js');
  app.import('vendor/scripts/Blob.js');
  app.import('vendor/scripts/pluralize.js');
  app.import('vendor/scripts/sockjs.min.js');
  app.import('vendor/scripts/stomp.min.js');
  app.import('vendor/scripts/theme/bootstrap-ambari.js');
  app.import('vendor/scripts/jszip.min.js');

  app.import('vendor/theme/fonts/Roboto-Bold-webfont.woff', {
    destDir: 'assets/fonts',
  });
  app.import('vendor/theme/fonts/Roboto-Bold-webfont.eot', {
    destDir: 'assets/fonts',
  });

  app.import('vendor/theme/fonts/Roboto-Bold-webfont.svg', {
    destDir: 'assets/fonts',
  });
  app.import('vendor/theme/fonts/Roboto-Bold-webfont.ttf', {
    destDir: 'assets/fonts',
  });
  app.import('vendor/theme/fonts/Roboto-Regular-webfont.eot', {
    destDir: 'assets/fonts',
  });
  app.import('vendor/theme/fonts/Roboto-Regular-webfont.svg', {
    destDir: 'assets/fonts',
  });
  app.import('vendor/theme/fonts/Roboto-Regular-webfont.ttf', {
    destDir: 'assets/fonts',
  });
  app.import('vendor/theme/fonts/Roboto-Regular-webfont.woff', {
    destDir: 'assets/fonts',
  });

  return app.toTree();
};
