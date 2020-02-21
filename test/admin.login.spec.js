const fs = require('fs');
const webdriverio = require('webdriverio');
const options = require('../wdio.conf');
const client = webdriverio.multiremote(options);

jest.setTimeout(30000);

beforeAll(() => {
  return client.init().url('http://localhost:8080/admin#/login');
});

test('Тест1. При клике на кнопку появляется форма', () => {
  return client
    .isExisting('.login__form')
    .then(browsers => {
      for (const browserName in browsers) {
        expect(browsers[browserName]).toBe(true);
      }
    })
    .screenshot()
    .then(browsers => {
      for (const browserName in browsers) {
        fs.writeFileSync(
          `./screenshots/login_form_${browserName}_has_button_authorization.png`,
          browsers[browserName].value,
          'base64',
        );
      }
    });
});

test('Тест 2. Форма имеет все необходимые поля', () => {
  return client
      .isExisting('.input__icon--user')
      .isExisting('.input__icon--key')
      .then(browsers => {
          for (const browserName in browsers) {
              expect(browsers[browserName]).toBe(true);
          }
      })
      .screenshot()
      .then(screenshots => {
          for (const browserName in screenshots) {
              fs.writeFileSync(`./screenshots/login_form_${browserName}_has_input-form.png`, screenshots[browserName].value, 'base64');
          }
      })
});

test('Тест 3. Кнопка “Отправить” заблокирована до тех пор, пока не введены все необходимые данные', () => {
  return client
      .isExisting('.btn--login')
      .click('.btn--login')
      .pause(500)
      .isExisting('.input-tooltip--showed')
      .then(browsers => {
          for (const browserName in browsers) {
              expect(browsers[browserName]).toBe(true);
          }
      })
      .screenshot()
      .then(screenshots => {
          for (const browserName in screenshots) {
              fs.writeFileSync(`./screenshots/login_form_button_${browserName}_has_validation.png`, screenshots[browserName].value, 'base64');
          }
      })
});

afterAll(() => {
  return client.end();
});
