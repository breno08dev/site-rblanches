/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// Garante que o script só rode depois que a página carregou
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Script do Ano Atual ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- *** SCRIPT DO NOVO TOAST (10 segundos) *** ---
    const toast = document.getElementById('new-whatsapp-toast');
    const closeToastBtn = document.getElementById('close-new-toast-btn');

    // Função para mostrar o toast
    const showToast = () => {
        if (toast) {
            // Adiciona a classe '.toast-show' que definimos no CSS do index.html
            toast.classList.add('toast-show');
        }
    };

    // Função para fechar o toast
    const closeToast = () => {
        if (toast) {
            toast.classList.remove('toast-show');
        }
    };

    // 
    // *** CORREÇÃO AQUI: Timer ajustado para 10 segundos (10000 ms) ***
    //
    setTimeout(showToast, 10000); 

    // Fechar ao clicar no botão "X"
    if (closeToastBtn) {
        closeToastBtn.addEventListener('click', (e) => {
            // Previne que o link <a> por trás seja clicado
            e.preventDefault(); 
            closeToast();
        });
    }

}); // Fim do addEventListener