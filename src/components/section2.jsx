// import React from 'react';
// import { Field, ErrorMessage } from 'formik';
// import { useNavigate } from 'react-router-dom';
 
// const Section2 = () => {
//   const navigate = useNavigate();
 
//   return (
//     <div>
//       <div>
//         <label className="block text-sm font-medium">Age</label>
//         <Field
//           name="age"
//           type="number"
//           className="w-full border p-2 rounded"
//           placeholder="Enter Age"
//         />
//         <ErrorMessage name="age" component="div" className="text-red-500 text-sm" />
//       </div>
 
//       <div>
//         <label className="block text-sm font-medium">Gender</label>
//         <Field
//           as="select"
//           name="gender"
//           className="w-full border p-2 rounded"
//         >
//           <option value="">Select Gender</option>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//         </Field>
//         <ErrorMessage name="gender" component="div" className="text-red-500 text-sm" />
//       </div>
 
//       <div>
//         <label className="block text-sm font-medium">Date of Birth</label>
//         <Field
//           name="dob"
//           type="date"
//           className="w-full border p-2 rounded"
//         />
//         <ErrorMessage name="dob" component="div" className="text-red-500 text-sm" />
//       </div>
 
//       <button
//         type="button"
//         onClick={() => navigate('/section1')}
//         className="mt-5 bg-red-500 text-white py-2 px-4 rounded mr-2"
//       >
//         Back
//       </button>
 
//       <button
//         type="button"
//         onClick={() => navigate('/section3')}
//         className="mt-5 bg-blue-500 text-white py-2 px-4 rounded"
//       >
//         Next
//       </button>
//     </div>
//   );
// };
 
// export default Section2;
 
// import React from 'react';
// import { Field, ErrorMessage } from 'formik';
 
// const Section2 = ({ toggleSection3, showSection3 }) => {
//   return (
//     <div className="border p-5 mb-5 rounded bg-gray-100">
//       <h2 className="text-lg font-bold">Section 2: Student Details</h2>
 
//       <div className="mb-4">
//         <label className="block text-sm font-medium">Age</label>
//         <Field
//           name="age"
//           type="number"
//           className="w-full border p-2 rounded"
//           placeholder="Enter Age"
//         />
//         <ErrorMessage name="age" component="div" className="text-red-500 text-sm" />
//       </div>
 
//       <div className="mb-4">
//         <label className="block text-sm font-medium">Gender</label>
//         <Field
//           as="select"
//           name="gender"
//           className="w-full border p-2 rounded"
//         >
//           <option value="">Select Gender</option>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//         </Field>
//         <ErrorMessage name="gender" component="div" className="text-red-500 text-sm" />
//       </div>
 
//       <div className="mb-4">
//         <label className="block text-sm font-medium">Date of Birth</label>
//         <Field
//           name="dob"
//           type="date"
//           className="w-full border p-2 rounded"
//         />
//         <ErrorMessage name="dob" component="div" className="text-red-500 text-sm" />
//       </div>
 
//       <button
//         type="button"
//         onClick={toggleSection3}
//         className="mt-5 bg-blue-500 text-white py-2 px-4 rounded"
//       >
//         {showSection3 ? 'Minimize Section 3' : 'Expand to Section 3'}
//       </button>
//     </div>
//   );
// };
 
// export default Section2;
 

import React from 'react';
import { Field, ErrorMessage } from 'formik';
 
const Section2 = ({ toggleSection3, showSection3 }) => {
  return (
    <div className="relative border p-5 mb-5 rounded bg-gray-100">
      <h2 className="text-lg font-bold">Section 2: Student Details</h2>
 
      {/* Minimize button at top-right corner */}
      <button
        type="button"
        onClick={toggleSection3}
        className="absolute top-2 right-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded"
      >
        {showSection3 ? '-' : '+'}
      </button>
 
      <div className="mb-4 mt-5">
        <label className="block text-sm font-medium">Age</label>
        <Field
          name="age"
          type="number"
          className="w-full border p-2 rounded"
          placeholder="Enter Age"
        />
        <ErrorMessage name="age" component="div" className="text-red-500 text-sm" />
      </div>
 
      <div className="mb-4">
        <label className="block text-sm font-medium">Gender</label>
        <Field
          as="select"
          name="gender"
          className="w-full border p-2 rounded"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Field>
        <ErrorMessage name="gender" component="div" className="text-red-500 text-sm" />
      </div>
 
      <div className="mb-4">
        <label className="block text-sm font-medium">Date of Birth</label>
        <Field
          name="dob"
          type="date"
          className="w-full border p-2 rounded"
        />
        <ErrorMessage name="dob" component="div" className="text-red-500 text-sm" />
      </div>
 
      {/* Next button at the bottom */}
      <button
        type="button"
        onClick={toggleSection3}
        className="mt-5 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Next to Section 3
      </button>
    </div>
  );
};
 
export default Section2;
 