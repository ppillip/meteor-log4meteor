Package.describe({
  name: 'ppillip:log4meteor',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'send your console.log to server',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/ppillip/meteor-log4meteor.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');

  api.addFiles('log4meteor-server.js','server');
  api.addFiles('log4meteor-client.js','client');

  api.export("log4MeteorServerConfig",'server'); //서버에서 config 가능하게 하자.
  api.export("log4MeteorClientConfig",'client');  //브라우저에서 config 가능하게 한다.

});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('ppillip:log4meteor');
  api.addFiles('log4meteor-tests.js');
});

