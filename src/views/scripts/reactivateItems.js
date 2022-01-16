document.querySelectorAll('#reactivate-btn').forEach((btn) => {
  const elementWithIdData = btn.closest('tr').firstElementChild;
  const id = elementWithIdData.textContent.trim();

  btn.addEventListener('click', (e) => {
    e.preventDefault();

    const config = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    fetch(`/items/${id}/reactivate`, config)
      .then((_resp) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  });
});
