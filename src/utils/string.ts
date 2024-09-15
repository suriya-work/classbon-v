export function generateID(): string {
  return Math.random().toString(36).substring(2 , 9) + '' + new Date() .getTime();
}

// import React from 'react';

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   children: React.ReactNode;
//   size?: 'small' | 'medium' | 'large';
// }

// const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, size = 'medium' }) => {
//   if (!isOpen) return null;

//   const sizeClass = {
//     small: 'w-1/4',
//     medium: 'w-1/2',
//     large: 'w-3/4',
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//       <div className={`bg-white rounded-lg p-6 ${sizeClass[size]}`}>
//         <button
//           className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//           onClick={onClose}
//         >
//           ×
//         </button>
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Modal;

// use modal components

// import { useState } from 'react';
// import Modal from '../components/Modal';

// const HomePage = () => {
//   const [isModalOpen, setModalOpen] = useState(false);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen py-2">
//       <button
//         className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//         onClick={() => setModalOpen(true)}
//       >
//         Open Modal
//       </button>

//       <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} size="medium">
//         <h2 className="text-2xl font-bold">This is a Modal</h2>
//         <p className="mt-4">You can pass any content as children.</p>
//       </Modal>
//     </div>
//   );
// };

// export default HomePage;


