import { extend } from 'vee-validate'
import { required, email, regex, min, confirmed } from 'vee-validate/dist/rules'
// import { messages as messageEn } from 'vee-validate/dist/locale/en.json';
import { messages as messagePT } from 'vee-validate/dist/locale/pt_BR.json'

extend('required', {
  ...required,
  message: messagePT.required
})

extend('email', {
  ...email,
  message: messagePT.email
})

extend('regex', {
  ...regex,
  message: messagePT.regex
})

extend('min', {
  ...min,
  message: messagePT.min
})

extend('confirmed', {
  ...confirmed,
  message: messagePT.confirmed
})

extend('url', {
  validate: (str) => {
    const pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i'
    ) // fragment locator
    return !!pattern.test(str)
  },
  message: 'Está URL não é válida!'
})
