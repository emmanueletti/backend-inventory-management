document
  .querySelector('#create-new-item-btn')
  .addEventListener('click', (e) => {
    e.preventDefault();

    // show create form
    document.querySelector('#delete-form').classList.add('dn');
    document.querySelector('#edit-form').classList.add('dn');
    document.querySelector('#create-form').classList.remove('dn');

    const form = document.querySelector('#create-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.querySelector('#create-form input#name');
      const priceInput = document.querySelector('#create-form input#price');
      const descriptionInput = document.querySelector(
        '#create-form textarea#description'
      );

      if (!nameInput.value) {
        nameInput.classList.add('b--dark-red');
      } else {
        nameInput.classList.remove('b--dark-red');
      }
      if (!priceInput.value) {
        priceInput.classList.add('b--dark-red');
      } else {
        priceInput.classList.remove('b--dark-red');
      }
      if (!descriptionInput.value) {
        descriptionInput.classList.add('b--dark-red');
      } else {
        descriptionInput.classList.remove('b--dark-red');
      }

      if (nameInput.value && priceInput.value && descriptionInput.value) {
        const config = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: nameInput.value.trim(),
            price: priceInput.value.trim(),
            description: descriptionInput.value.trim(),
          }),
        };

        fetch(`/items`, config)
          .then((resp) => resp.json())
          .then((data) => {
            location.reload();
          })
          .catch((err) => console.log(err));
      }
    });
  });
