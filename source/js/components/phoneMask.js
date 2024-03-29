import JustValidate from 'just-validate';
import Inputmask from "inputmask";

export const validateForms = (selector, rules, afterSend) => {
  const form = document?.querySelector(selector);
  const telSelector = form?.querySelector('input[type="tel"]');

  // if (telSelector) {
  //   const inputMask = new Inputmask();
  //   inputMask.mask(telSelector);

  //   for (let item of rules) {
  //     if (item.tel) {
  //       item.rules.push({
  //         rule: 'function',
  //         validator: function() {
  //           const phone = telSelector.inputmask.unmaskedvalue();
  //           return phone.length === 10;
  //         },
  //         errorMessage: item.telError
  //       });
  //     }
  //   }
  // }

  const validation = new JustValidate(selector);

  for (let item of rules) {
    validation
      .addField(item.ruleSelector, item.rules);
  }

  validation.onSuccess((ev) => {
    let formData = new FormData(ev.target);
    // let formDialCode = document.querySelector('.iti__selected-dial-code').innerText;
    // let currentTel = formData.get('tel');
    // formData.set('tel', formDialCode + currentTel);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          if (afterSend) {
            afterSend();
          }
          console.log('status 200');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    ev.target.reset();
  })

};

const rules1 = [
  {
    ruleSelector: '.email',
    rules: [
        {
            rule: 'minLength',
            value: 3,
            errorMessage: 'The field must contain at least 3 characters'
        },
        {
            rule: 'required',
            value: true,
            errorMessage: 'Enter your email!'
        },
        {
            rule: 'email',
            value: true,
            errorMessage: 'Enter correct email!'
        }
    ]
  },
];

const afterForm = () => {
  window.location.href = "/thanks.html";
  console.log('Произошла отправка, тут можно писать любые действия');
};

if(document.querySelector('.form')) {
  validateForms('.form', rules1, afterForm);
}


