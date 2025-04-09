import { toast } from 'react-toastify';
/**
 * Exibe um toast de aviso com o estilo padrão da aplicação.
 *
 * @param {string} message - A mensagem a ser exibida no toast.
 */
export const showWarningToast = (message) => {
  toast.warn(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    theme: "colored",
  });
};
