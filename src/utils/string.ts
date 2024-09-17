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


// react-multi-carousel

// import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import "./styles.css";

// const Slider = ({ responsiveSettings, autoPlay = true, swipeable = true, draggable = true, showDots = true, infinite = true, partialVisible = false, children }) => {
//   return (
//     <div className="parent">
//       <Carousel
//         responsive={responsiveSettings}
//         autoPlay={autoPlay}
//         swipeable={swipeable}
//         draggable={draggable}
//         showDots={showDots}
//         infinite={infinite}
//         partialVisible={partialVisible}
//         dotListClass="custom-dot-list-style"
//       >
//         {children}
//       </Carousel>
//     </div>
//   );
// };

// export default Slider;


// use componens

// import React from "react";
// import Slider from "./Slider";

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 4,
//     slidesToSlide: 4 // optional, default to 1.
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 768 },
//     items: 3,
//     slidesToSlide: 3 // optional, default to 1.
//   },
//   mobile: {
//     breakpoint: { max: 767, min: 464 },
//     items: 2,
//     slidesToSlide: 1 // optional, default to 1.
//   }
// };

// const App = () => {
//   return (
//     <div>
//       <h1>Movie Carousel</h1>
//       <Slider responsiveSettings={responsive}>
//         {/* هر محتوایی که اینجا قرار دهید به عنوان یک اسلاید در کاروسل نمایش داده می‌شود */}
//         <div className="slider">
//           <img src="https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600%2C892&ssl=1" alt="movie1" />
//         </div>
//         <div className="slider">
//           <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-call-of-the-wild-1579042974.jpg?crop=0.9760858955588091xw:1xh;center,top&resize=480:*" alt="movie2" />
//         </div>
//         <div className="slider">
//           <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*" alt="movie3" />
//         </div>
//         <div className="slider">
//           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU" alt="movie4" />
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default App;

