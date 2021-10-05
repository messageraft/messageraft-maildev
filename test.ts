import { provider } from './src/index'

const sendgridRef = new provider({
  apiKey: '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',
})

sendgridRef
  .send({
    to: '9pitops@gmail.com',
    from: 'help@bookis.io',
    subject: 'test',
    html: 'this is a test',
  })
  .then(console.log)
  .catch((e) => {
    console.log(e)
  })

console.log(sendgridRef)
