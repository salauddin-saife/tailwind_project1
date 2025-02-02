import React from 'react'

// const Flex = ({children}) => {
//   return (
//     <div className='flex'>
//         {children}
//     </div>
//   )
// }
const Flex = ({ children, className }) => {
  return (
    <div className={`flex bg-amber-300 ${className}`}>
      {children}
    </div>
  );
};

export default Flex


