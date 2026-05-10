'use client';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CloseButton({ closeToast }) {
  return (
    <button
      type="button"
      aria-label="Close notification"
      className="ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
      onClick={(event) => {
        event.stopPropagation();
        closeToast?.(event);
      }}
    >
      <span className="text-lg leading-none">&times;</span>
    </button>
  );
}

export default function ToastProvider() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={4000}
      closeOnClick={false}
      closeButton={CloseButton}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      newestOnTop
    />
  );
}
