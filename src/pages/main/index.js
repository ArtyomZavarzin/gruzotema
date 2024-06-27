const chatId = '-4203405975';
const bot_token = '6503020260:AAH_OXU9_BbpnUGtzdDKn47Ih1iUBUz1mU0';
const uri_api_tg = `https://api.telegram.org/bot${bot_token}/sendMessage`;

window.addEventListener('load', function () {
  function resize() {
    let text = document.getElementsByClassName('width-text');
    if (!text) return;

    for (let i = 0; i < text.length; i++) {
      let string = text[i].innerHTML; // Получаем текст строки
      string = string.replace(/<[^>]+>/g, ''); // Удаляем из нее все теги
      let fontSize =
        ((text[i].offsetWidth / string.length) * 1.31).toFixed() + 'px';
      text[i].style.fontSize = fontSize; // Устанавливаем размер шрифта, в зависимости от ширины строки и кол-ва букв
      text[i].style.lineHeight = fontSize;

      // let textAfter = document.getElementsByClassName('width-text-after');
      if (document.getElementsByClassName('width-text-after')[0]) {
        document.getElementsByClassName('width-text-after')[0].style.fontSize =
          fontSize;
        document.getElementsByClassName(
          'width-text-after'
        )[0].style.lineHeight = fontSize;
      }

      //   textAfter?.[0]?.style.fontSize = fontSize;
      //   text[i].innerHTML = string.replace(
      //     /(.)/g,
      //     '<span style="min-width: ' +
      //       (text[i].offsetWidth / string.length / 1.4).toFixed() +
      //       'px">$1</span>'
      //   ); // Добавляем к буквам тег span для выравнивания
    }
  }
  window.addEventListener('resize', resize);
  resize();

  // __________________________

  var requestModal =
    document.getElementById('requestModal') &&
    new bootstrap.Modal(document.getElementById('requestModal'), {
      keyboard: false,
    });
  const requestForm = document.getElementById('request-form');
  requestForm &&
    requestForm.addEventListener('submit', function (event) {
      event.stopPropagation();
      event.preventDefault();

      let name = this.inputName.value;
      let phone = this.inputPhone.value;

      let errorEl = requestForm.querySelector('.error-text');
      let sendBtn = requestForm.querySelector('#send-btn-id');

      if (phone === '' || name === '') {
        errorEl.innerHTML = 'Оба поля должны быть заполнены';
        errorEl.style.display = 'block';
        return;
      }

      errorEl.style.display = 'none';
      errorEl.innerHTML = '';

      let message = `Клиентская заявка с сайта\n\n`;
      message += `Отправитель: ${name}\n`;
      message += `Телефон: ${phone}\n`;

      sendBtn.disabled = true;
      axios
        .post(uri_api_tg, {
          chat_id: chatId,
          parse_mod: 'html',
          text: message,
        })
        .then(() => {
          requestModal.hide();
          requestForm.reset();
          var toastLive = document.getElementById('liveToast');
          var toast = new bootstrap.Toast(toastLive);
          requestModal.hide();
          toast.show();
        })
        .catch(() => {
          errorEl.innerHTML = 'Ошибка при отправки формы';
          errorEl.style.display = 'block';
        })
        .finally(() => {
          sendBtn.disabled = false;
        });
    });

  const driversForm = document.getElementById('driversForm');
  const logistsForm = document.getElementById('logistsForm');
  const accountantsForm = document.getElementById('accountantsForm');

  const vacancyMap = {
    driversForm: 'водитель',
    logistsForm: 'логист',
    accountantsForm: 'бухгалтер',
  };

  if (driversForm && logistsForm && accountantsForm) {
    [driversForm, logistsForm, accountantsForm].forEach(function (form) {
      form.addEventListener('submit', function (event) {
        event.stopPropagation();
        event.preventDefault();
        const formData = new FormData(event.target);
        let errorEl = form.querySelector('.error-text');
        let sendBtn = form.querySelector('.send-contact');
        let name = formData.get('name');
        let phone = formData.get('phone');
        let vacancy = vacancyMap[form.id];

        if (phone === '' || name === '') {
          errorEl.innerHTML = 'Оба поля должны быть заполнены';
          errorEl.style.display = 'block';
          return;
        }
        errorEl.style.display = 'none';
        errorEl.innerHTML = '';

        let message = `Заявка с сайта по вакансии\n\n`;
        message += `Позиция: ${vacancy}\n\n`;
        message += `Отправитель: ${name}\n`;
        message += `Телефон: ${phone}\n`;

        sendBtn.disabled = true;
        axios
          .post(uri_api_tg, {
            chat_id: chatId,
            parse_mod: 'html',
            text: message,
          })
          .then(() => {
            form.reset();
            var toastLive = document.getElementById('liveToast');
            var toast = new bootstrap.Toast(toastLive);
            toast.show();
          })
          .catch((error) => {
            errorEl.innerHTML = 'Ошибка при отправки формы';
            errorEl.style.display = 'block';
          })
          .finally(() => {
            sendBtn.disabled = false;
          });
      });
    });
  }
});
