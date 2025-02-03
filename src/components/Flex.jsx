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
    <div className={`flex ${className}`}>
      {children}
    </div>
  );
};

export default Flex


