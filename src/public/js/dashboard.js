import { $ } from './index.js';

const modalCreateTicketButton = $('#id-create-ticket-modal-button') 
const modalCreateTicketContainer = $('#id-container-create-ticket-modal');
const closeModalCreateTicketButton = $('#id-close-create-ticket-modal');

modalCreateTicketButton
  .addEventListener('click', (e) => {
    modalCreateTicketContainer.classList.add('show');
  })

closeModalCreateTicketButton
  .addEventListener('click', (e) => {
    modalCreateTicketContainer.classList.remove('show');
  })