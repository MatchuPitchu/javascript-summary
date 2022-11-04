const modal = document.querySelector('mp-modal');
const modalOpenButton = document.getElementById('open-modal');

const handleModalOpen = () => {
  const modal = document.querySelector('mp-modal');
  modal.open(); // open method was implemented in web component
};

const handleModalConfirm = () => {
  console.log('Confirm');
};

const handleModalCancel = () => {
  console.log('Cancel');
};

modalOpenButton.addEventListener('click', handleModalOpen);
// listen to inside custom element defined own events "confirm" and "cancel"
modal.addEventListener('confirm', handleModalConfirm);
modal.addEventListener('cancel', handleModalCancel);
