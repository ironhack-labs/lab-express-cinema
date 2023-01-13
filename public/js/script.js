document.addEventListener(
  'DOMContentLoaded',
  () => {
    console.log('lab-express-cinema JS imported successfully!');

    const addNewModal = document.querySelector('.modal__addnew-movie');
    const btnAddNew = document.querySelector('.btnAddNew');
    const movieContainer = document.querySelector('.movies__list-nav');
    const btnClose = document.querySelector('.btnClose');
    const btnCancel = document.querySelector('.btnCancel');
    btnAddNew.addEventListener('click', () => {
      addNewModal.classList.toggle('hidden');
    });

    btnClose.addEventListener('click', () => {
      addNewModal.classList.add('hidden');
    });
    btnCancel.addEventListener('click', () => {
      addNewModal.classList.add('hidden');
    });
  },
  false
);
