import _ from 'lodash';

/* promise */
let promise = new Promise((resolve, reject) => {
  console.log('promise resolve!')
  resolve()
})
promise
  .then(() => {
    throw new Error('error1')
  })
  .catch((e) => {
    console.log('' + e)
  })
  .then(() => {
    console.log('this is 3 then')
  })
