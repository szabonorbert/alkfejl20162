'use strict'

const Route = use('Route')

Route.get('/', 'TaskController.index');
Route.get('/reg', 'UserController.reg');
Route.post('/reg', 'UserController.doReg');
Route.get('/login', 'UserController.login');
Route.post('/login', 'UserController.doLogin');
Route.get('/logout', 'UserController.doLogout');

Route.get('/do/:id', 'TaskController.do').middleware('auth');
Route.get('/del/:id', 'TaskController.del').middleware('auth');
Route.get('/history', 'TaskController.history').middleware('auth');
Route.get('/password', 'UserController.profile').middleware('auth');
Route.post('/password', 'UserController.editProfile').middleware('auth');
Route.get('/add', 'TaskController.showAdd').middleware('auth');
Route.post('/add', 'TaskController.add').middleware('auth');