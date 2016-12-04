'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('main')
Route.on('/profile').render('profile')
Route.on('/reg').render('reg')
Route.on('/login').render('login')
Route.on('/logout').render('logout')
Route.on('/add').render('add')
Route.on('/history').render('history')
Route.on('/profile').render('profile')