const modalOpenButton = document.getElementById('open-modal');

const handleModalOpen = () => {
  const modal = document.querySelector('uc-modal');
  modal.open(); // open method was implemented in web component
};

modalOpenButton.addEventListener('click', handleModalOpen);
