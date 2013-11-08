
app.config( function( $routeProvider ) {
  $routeProvider
    .when( '/example', {
      controller: 'ExampleIndexController',
      templateUrl: '/feature/example/index.html'
    })
    .otherwise({ redirectTo: '/example' });
});

app.factory( 'ExampleService', function() {
  return function(){
    //this is a service
  }
});