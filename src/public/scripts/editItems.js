document.querySelectorAll('#edit-btn').forEach((btn) => {
  const children = btn.closest('tr').children;

  const id = children[0].textContent.trim();
  const name = children[1].textContent.trim();
  const price = children[2].textContent.trim().split('$')[1];
  const description = children[3].textContent.trim();

  btn.addEventListener('click', (e) => {
    e.preventDefault();

    // show edit form
    document.querySelector('#delete-form').classList.add('dn');
    document.querySelector('#create-form').classList.add('dn');
    document.querySelector('#edit-form').classList.remove('dn');

    const nameInput = document.querySelector('#edit-form input#name');
    const priceInput = document.querySelector('#edit-form input#price');
    const descriptionInput = document.querySelector(
      '#edit-form textarea#description'
    );

    // populate default values
    nameInput.value = name;
    priceInput.value = price;
    descriptionInput.value = description;

    // set up submit event
    const form = document.querySelector('#edit-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const config = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: nameInput.value.trim(),
          price: priceInput.value.trim(),
          description: descriptionInput.value.trim(),
        }),
      };

      fetch(`/items/${id}`, config)
        .then((resp) => resp.json())
        .then((data) => {
          location.reload();
        })
        .catch((err) => console.log(err));
    });
  });
});
