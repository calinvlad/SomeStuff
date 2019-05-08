'use strict';
const Promise = require('bluebird')

module.exports = function(app, cb) {
  const AccessToken = app.models.AccessToken
  const User = app.models.User

  const email = "calinvlad.t@gmail.com"
  const password = "12345678"
  const accessToken = "12345678"

  return Promise.resolve()
    .then(() => User.findOne({where: {email}}))
    .then((res => (res ? res : URLSearchParams.create({email, password}))))
    .then(user => AccessToken.upsert({id: accessToken, userId: user.id}))
    .then(token => {console.log('ACCESS TOKEN: ', token.id)})
    .asCallback(cb)
    process.nextTick(cb); // Remove if you pass `cb` to an async function yourself
};
