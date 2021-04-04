'use strict'

const AuthController = require('../app/Controllers/Http/AuthController')
const Route = use('Route')

Route.post('user/register', 'AuthController.register');
Route.post('user/authenticate', 'AuthController.authenticate');

Route.group(() => {
  Route.resource('users', 'UserController').apiOnly();
}).middleware(['auth']);

