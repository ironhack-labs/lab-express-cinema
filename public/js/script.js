document.addEventListener(
  'DOMContentLoaded',
  () => {
    console.log('lab-express-cinema JS imported successfully!');
    const addNewModal = document.querySelector('.modal__addnew-movie');
    const btnAddNew = document.querySelector('.btnAddNew');
    const btnClose = document.querySelector('.btnClose');
    const btnCancel = document.querySelector('.btnCancel');
    const btnDelete = document.querySelector('.btnDelete');
    const btnEdit = document.querySelector('.btnEdit')

    if (btnAddNew)
      btnAddNew.addEventListener('click', () => {
        addNewModal.classList.toggle('hidden');
      });

      if (btnEdit)
        btnEdit.addEventListener('click', () => {
          addNewModal.classList.toggle('hidden');
        });

    if (btnClose)
      btnClose.addEventListener('click', () => {
        addNewModal.classList.add('hidden');
      });
    if (btnCancel)
      btnCancel.addEventListener('click', () => {
        addNewModal.classList.add('hidden');
      });
    if (btnDelete)
      btnDelete.addEventListener('click', (e) => {
        console.log('deleting');
        if (!confirm('Are you sure you want to delete the movie?'))
          e.preventDefault();
      });
  },
  false
);
