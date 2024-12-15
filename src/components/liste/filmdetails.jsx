import { useState } from "react";
import style from './filmdetails.module.css'
export default function Filmdetails({ det }) {
    const [isOpen, setIsOpen] = useState(true);

    const onClose = () => {
        setIsOpen(false)
    };

    if (!isOpen) return null;

    return (
        <div className={style.modal}>
            <div className={style.content}>
                <button
                    onClick={onClose}
                    className={style.close}
                >
                    X 
                </button>
                <div className={style.header}>
                    <h2 >{det.title}</h2>
                </div>
                    <div className={style.details}>
                        <div>
                            <p className="label">Réalisateur</p>
                            <p >{det.director}</p>
                        </div>
                        <div>
                            <p className="label">Année de sortie</p>
                            <p>{det.releaseYear}</p>
                        </div>
                        <div>
                            <p className="label">Genre</p>
                            <p >{det.genre}</p>
                        </div>
                        <div>
                            <p className="label">Note</p>
                            <div >
                                <span className="rating">{det.rating}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}




// export default function Filmdetails({det, movie, onClose }) {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-lg max-w-2xl w-full relative">
//         <button
//           onClick={onClose}
//           className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
//         >
//         </button>
//         <div className="p-6">
//           <h2 className="text-3xl font-bold mb-4">{det.title}</h2>
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <p className="text-gray-600">Réalisateur</p>
//               <p className="font-semibold">{det.director}</p>
//             </div>
//             <div>
//               <p className="text-gray-600">Année de sortie</p>
//               <p className="font-semibold">{det.releaseYear}</p>
//             </div>
//             <div>
//               <p className="text-gray-600">Genre</p>
//               <p className="font-semibold">{det.genre}</p>
//             </div>
//             <div>
//               <p className="text-gray-600">Note</p>
//               <div className="flex items-center gap-1">
//                 <span className="font-semibold">{det.rating}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }