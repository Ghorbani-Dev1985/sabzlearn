import {SendTicketMessage } from './Funcs/Sheared.js';
window.addEventListener('load' , () => {
    const SendTicketBtn = document.querySelector('#SendTicketBtn')
    SendTicketBtn.addEventListener('click' , (e) => {
        e.preventDefault()
        SendTicketMessage()
    })
})