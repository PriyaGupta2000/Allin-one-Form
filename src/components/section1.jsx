// import React from 'react';
// import { Field, ErrorMessage } from 'formik';
// import { useNavigate } from 'react-router-dom';
 
// const Section1 = () => {
//   const navigate = useNavigate();
 
//   return (
//     <div>
//       <div>
//         <label className="block text-sm font-medium">Parent's Name</label>
//         <Field
//           name="parentName"
//           className="w-full border p-2 rounded"
//           placeholder="Enter Parent's Name"
//         />
//         <ErrorMessage name="parentName" component="div" className="text-red-500 text-sm" />
//       </div>
 
//       <div>
//         <label className="block text-sm font-medium">Student's Name</label>
//         <Field
//           name="studentName"
//           className="w-full border p-2 rounded"
//           placeholder="Enter Student's Name"
//         />
//         <ErrorMessage name="studentName" component="div" className="text-red-500 text-sm" />
//       </div>
 
//       <button
//         type="button"
//         onClick={() => navigate('/section2')}
//         className="mt-5 bg-blue-500 text-white py-2 px-4 rounded"
//       >
//         Next
//       </button>
//     </div>
//   );
// };
 
// export default Section1;
 
//2nd method
// import React from 'react';
// import { Field, ErrorMessage } from 'formik';
 
// const Section1 = ({ toggleSection2, showSection2 }) => {
//   return (
//     <div className="border p-5 mb-5 rounded bg-gray-100">
//       <h2 className="text-lg font-bold">Section 1: Parent and Student Information</h2>
 
//       <div className="mb-4">
//         <label className="block text-sm font-medium">Parent's Name</label>
//         <Field
//           name="parentName"
//           className="w-full border p-2 rounded"
//           placeholder="Enter Parent's Name"
//         />
//         <ErrorMessage name="parentName" component="div" className="text-red-500 text-sm" />
//       </div>
 
//       <div className="mb-4">
//         <label className="block text-sm font-medium">Student's Name</label>
//         <Field
//           name="studentName"
//           className="w-full border p-2 rounded"
//           placeholder="Enter Student's Name"
//         />
//         <ErrorMessage name="studentName" component="div" className="text-red-500 text-sm" />
//       </div>
 
//       <button
//         type="button"
//         onClick={toggleSection2}
//         className="mt-5 bg-blue-500 text-white py-2 px-4 rounded"
//       >
//         {showSection2 ? 'Minimize Section 2' : 'Expand to Section 2'}
//       </button>
//     </div>
//   );
// };
 
// export default Section1;
 

import React from 'react';
import { Field, ErrorMessage } from 'formik';
 
const Section1 = ({ toggleSection2, showSection2 }) => {
  return (
    <div className="relative border p-5 mb-5 rounded bg-gray-100">
      <h2 className="text-lg font-bold">Section 1: Parent and Student Information</h2>
 
      {/* Minimize button at top-right corner */}
      <button
        type="button"
        onClick={toggleSection2}
        className="absolute top-2 right-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded"
      >
        {showSection2 ? '-' : '+'}
      </button>
 
      <div className="mb-4 mt-5">
        <label className="block text-sm font-medium">Parent's Name</label>
        <Field
          name="parentName"
          className="w-full border p-2 rounded"
          placeholder="Enter Parent's Name"
        />
        <ErrorMessage name="parentName" component="div" className="text-red-500 text-sm" />
      </div>
 
      <div className="mb-4">
        <label className="block text-sm font-medium">Student's Name</label>
        <Field
          name="studentName"
          className="w-full border p-2 rounded"
          placeholder="Enter Student's Name"
        />
        <ErrorMessage name="studentName" component="div" className="text-red-500 text-sm" />
      </div>

      
 
      {/* Next button at the bottom */}
      <button
        type="button"
        onClick={toggleSection2}
        className="mt-5 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Next to Section 2
      </button>
    </div>
  );
};
 
export default Section1;
 