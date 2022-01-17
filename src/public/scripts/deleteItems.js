document.querySelectorAll('#delete-btn').forEach((btn) => {
  const children = btn.closest('tr').children;

  const id = children[0].textContent.trim();

  btn.addEventListener('click', (e) => {
    e.preventDefault();

    // show edit form
    // move to toggle helper function
    document.querySelector('#edit-form').classList.add('dn');
    document.querySelector('#create-form').classList.add('dn');
    document.querySelector('#delete-form').classList.remove('dn');

    const deleteDetails = document.querySelector(
      '#delete-form p#delete-form-details'
    );
    deleteDetails.textContent = `Deleting item with ID ${id}`;

    const commentInput = document.querySelector('#delete-form textarea#notes');

    // set up submit event
    const form = document.querySelector('#delete-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const config = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: commentInput.value
          ? JSON.stringify({
              deleteNotes: commentInput.value,
            })
          : null,
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
