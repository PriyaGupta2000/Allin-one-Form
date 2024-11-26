// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { Formik } from 'formik';
// import * as Yup from 'yup';
// import Section1 from './components/section1';
// import Section2 from './components/section2';
// import Section3 from './components/section3';
 
// const formSchema = Yup.object().shape({
//   parentName: Yup.string().required('Parent name is required'),
//   studentName: Yup.string().required('Student name is required'),
//   age: Yup.number().min(1, 'Age must be at least 1').required('Age is required'),
//   gender: Yup.string().required('Gender is required'),
//   dob: Yup.date().required('Date of birth is required'),
// });
 
// const App = () => {
//   return (
//     <div className="p-5">
//       <Formik
//         initialValues={{
//           parentName: '',
//           studentName: '',
//           age: '',
//           gender: '',
//           dob: ''
//         }}
//         validationSchema={formSchema}
//         onSubmit={(values) => console.log(values)}
//       >
//         {formik => (
//           <Routes>
//             <Route path="/" element={<Section1 />} />
//             <Route path="/section1" element={<Section1 />} />
//             <Route path="/section2" element={<Section2 />} />
//             <Route path="/section3" element={<Section3 values={formik.values}
//             resetForm={formik.resetForm} />} />
//           </Routes>
//         )}
//       </Formik>
//     </div>
//   );
// };
 
// export default App;
 


// import React, { useState } from 'react';
// import { Formik } from 'formik';
// import * as Yup from 'yup';
// import Section1 from './components/section1';
// import Section2 from './components/section2';
// import Section3 from './components/section3';
 
// const formSchema = Yup.object().shape({
//   parentName: Yup.string().required('Parent name is required'),
//   studentName: Yup.string().required('Student name is required'),
//   age: Yup.number().min(1, 'Age must be at least 1').required('Age is required'),
//   gender: Yup.string().required('Gender is required'),
//   dob: Yup.date().required('Date of birth is required'),
// });
 
// const App = () => {
//   const [showSection2, setShowSection2] = useState(false);
//   const [showSection3, setShowSection3] = useState(false);
 
//   return (
//     <div className="p-5">
//       <Formik
//         initialValues={{
//           parentName: '',
//           studentName: '',
          
//           age: '',
//           gender: '',
//           dob: ''
//         }}
//         validationSchema={formSchema}
//         onSubmit={(values, { resetForm }) => {
//           console.log(values);
//           resetForm();
//           setShowSection2(false);
//           setShowSection3(false);
//         }}
//       >
//         {({ values, resetForm }) => (
//           <>
//             {/* Section 1 */}
//             <Section1 toggleSection2={() => setShowSection2(!showSection2)} showSection2={showSection2} />
 
//             {/* Section 2 */}
//             {showSection2 && (
//               <Section2
//                 toggleSection3={() => setShowSection3(!showSection3)}
//                 showSection3={showSection3}
//               />
//             )}
 
//             {/* Section 3 */}
//             {showSection3 && (
//               <Section3 values={values} resetForm={resetForm} />
//             )}
//           </>
//         )}
//       </Formik>
//     </div>
//   );
// };
 
// export default App;

//sir ke after instruction
// import React, { useState } from 'react';
// import { Formik, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import Section2 from './components/section2';
// import Section3 from './components/section3';
 
// const formSchema = Yup.object().shape({
//   motherName: Yup.string().required('Mother name is required'),
//   fatherName: Yup.string().required('Father name is required'),
//   address: Yup.string().required('Address is required'),
//   children: Yup.array().of(
//     Yup.object().shape({
//       name: Yup.string().required('Child name is required'),
//       age: Yup.number().min(1, 'Age must be at least 1').required('Age is required'),
//       gender: Yup.string().required('Gender is required'),
//       dob: Yup.date().required('Date of birth is required'),
//     })
//   ),
// });
 
// const App = () => {
//   const [showSection2, setShowSection2] = useState(false);
//   const [showSection3, setShowSection3] = useState(false);
 
//   return (
//     <div className="p-5">
//       <Formik
//         initialValues={{
//           motherName: '',
//           fatherName: '',
//           address: '',
//           children: [],
//         }}
//         validationSchema={formSchema}
//         onSubmit={(values, { resetForm }) => {
//           console.log(values);
//           resetForm();
//           setShowSection2(false);
//           setShowSection3(false);
//         }}
//       >
//         {({ values, setFieldValue, resetForm }) => (
//           <div className="space-y-5">
//             {/* Section 1: Mother, Father, and Address */}
//             <div className="border p-5 rounded bg-gray-100">
//               <h2 className="text-lg font-bold">Section 1: Parent and Address Information</h2>
 
//               <div className="mb-4">
//                 <label className="block text-sm font-medium">Mother's Name</label>
//                 <Field
//                   name="motherName"
//                   className="w-full border p-2 rounded"
//                   placeholder="Enter Mother's Name"
//                 />
//                 <ErrorMessage name="motherName" component="div" className="text-red-500 text-sm" />
//               </div>
 
//               <div className="mb-4">
//                 <label className="block text-sm font-medium">Father's Name</label>
//                 <Field
//                   name="fatherName"
//                   className="w-full border p-2 rounded"
//                   placeholder="Enter Father's Name"
//                 />
//                 <ErrorMessage name="fatherName" component="div" className="text-red-500 text-sm" />
//               </div>
 
//               <div className="mb-4">
//                 <label className="block text-sm font-medium">Address</label>
//                 <Field
//                   name="address"
//                   className="w-full border p-2 rounded"
//                   placeholder="Enter Address"
//                 />
//                 <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
//               </div>
 
//               {/* Children List */}
//               {values.children.map((child, index) => (
//                 <div key={index} className="border p-4 my-2 rounded bg-gray-200 relative">
//                   <div className="mb-4">
//                     <label className="block text-sm font-medium">Child's Name</label>
//                     <Field
//                       name={`children[${index}].name`}
//                       className="w-full border p-2 rounded"
//                       placeholder="Enter Child's Name"
//                     />
//                     <ErrorMessage name={`children[${index}].name`} component="div" className="text-red-500 text-sm" />
//                   </div>
 
//                   <div className="mb-4">
//                     <label className="block text-sm font-medium">Age</label>
//                     <Field
//                       name={`children[${index}].age`}
//                       type="number"
//                       className="w-full border p-2 rounded"
//                       placeholder="Enter Age"
//                     />
//                     <ErrorMessage name={`children[${index}].age`} component="div" className="text-red-500 text-sm" />
//                   </div>
 
//                   <div className="mb-4">
//                     <label className="block text-sm font-medium">Gender</label>
//                     <Field
//                       as="select"
//                       name={`children[${index}].gender`}
//                       className="w-full border p-2 rounded"
//                     >
//                       <option value="">Select Gender</option>
//                       <option value="male">Male</option>
//                       <option value="female">Female</option>
//                     </Field>
//                     <ErrorMessage name={`children[${index}].gender`} component="div" className="text-red-500 text-sm" />
//                   </div>
 
//                   <div className="mb-4">
//                     <label className="block text-sm font-medium">Date of Birth</label>
//                     <Field
//                       name={`children[${index}].dob`}
//                       type="date"
//                       className="w-full border p-2 rounded"
//                     />
//                     <ErrorMessage name={`children[${index}].dob`} component="div" className="text-red-500 text-sm" />
//                   </div>
 
//                   {/* Delete Child Button */}
//                   <button
//                     type="button"
//                     onClick={() => {
//                       const updatedChildren = values.children.filter((_, i) => i !== index);
//                       setFieldValue('children', updatedChildren);
//                     }}
//                     className="absolute top-2 right-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded"

                    
//                   >
//                     Delete
//                   </button>
//                 </div>
//               ))}
 
//               {/* Add Child Button */}
//               {values.children.length < 5 && (
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setFieldValue('children', [...values.children, { name: '', age: '', gender: '', dob: '' }]);
//                   }}
//                   className="mt-5 bg-blue-500 text-white py-2 px-4 rounded  flex justify-between"
//                 >
//                   Add Child
//                 </button>
//               )}
//             </div>
 
//             {/* Section 2 */}
//             {showSection2 && (
//               <Section2
//                 toggleSection3={() => setShowSection3(!showSection3)}
//                 showSection3={showSection3}
//                 toggleSection2={() => setShowSection2(false)} // Minimize Section 2
//               />
//             )}
 
//             {/* Section 3 */}
//             {showSection3 && (
//               <Section3
//                 values={values}
//                 resetForm={resetForm}
//                 toggleSection3={() => setShowSection3(false)} // Minimize Section 3
//               />
//             )}
 
//             {/* Submit Button
//             <button
//               type="submit"
//               className="mt-5 bg-green-500 text-white py-2 px-4 rounded flex justify-between "
//             >
//               Save All Data
//             </button> */}

//             {/* Save and Cancel buttons */}
//       <div className="flex justify-end mt-5">
//         <button
//           type="submit"
//           className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
//         >
//           cancel
//         </button>
 
//         <button
//           type="button"
//           onClick={() => {
//             resetForm();
//             navigate('/');
//           }}
//           className="bg-blue-500 text-white py-2 px-4 rounded "
//         >
//           save
//         </button>
//       </div>
//           </div>
//         )}
//       </Formik>
//     </div>
//   );
// };
 
// export default App;
 
// import React, { useState } from 'react';
// import { Formik, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import Section2 from './components/section2';
// import Section3 from './components/section3';
 
// // Form validation schema
// const formSchema = Yup.object().shape({
//   motherName: Yup.string().required('Mother name is required'),
//   fatherName: Yup.string().required('Father name is required'),
//   address: Yup.string().required('Address is required'),
//   children: Yup.array().of(
//     Yup.object().shape({
//       name: Yup.string().required('Child name is required'),
//       age: Yup.number().min(1, 'Age must be at least 1').required('Age is required'),
//       gender: Yup.string().required('Gender is required'),
//       dob: Yup.date().required('Date of birth is required'),
//     })
//   ),
// });
 
// const App = () => {
//   const [showSection2, setShowSection2] = useState(false);
//   const [showSection3, setShowSection3] = useState(false);
 
//   return (
//     <div className="p-5">
//       <Formik
//         initialValues={{
//           motherName: '',
//           fatherName: '',
//           address: '',
//           children: [],
//         }}
//         validationSchema={formSchema}
//         onSubmit={(values, { resetForm }) => {
//           // Save logic
//           console.log('Form Submitted:', values);
//           resetForm(); // Reset the form after saving
//           setShowSection2(false);
//           setShowSection3(false);
//         }}
//       >
//         {({ values, setFieldValue, resetForm }) => (
//           <div className="space-y-5">
//             {/* Section 1: Parent and Address Information */}
//             <div className="border p-5 rounded bg-gray-100">
//               <h2 className="text-lg font-bold"> Parent and Address Information</h2>
//               {/* Mother, Father, Address fields */}
//               <div className="mb-4">
//                 <label className="block text-sm font-medium">Mother's Name</label>
//                 <Field name="motherName" className="w-full border p-2 rounded" placeholder="Enter Mother's Name" />
//                 <ErrorMessage name="motherName" component="div" className="text-red-500 text-sm" />
//               </div>
 
//               <div className="mb-4">
//                 <label className="block text-sm font-medium">Father's Name</label>
//                 <Field name="fatherName" className="w-full border p-2 rounded" placeholder="Enter Father's Name" />
//                 <ErrorMessage name="fatherName" component="div" className="text-red-500 text-sm" />
//               </div>
 
//               <div className="mb-4">
//                 <label className="block text-sm font-medium">Address</label>
//                 <Field name="address" className="w-full border p-2 rounded" placeholder="Enter Address" />
//                 <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
//               </div>
 
//               {/* Children List */}
//               {values.children.map((child, index) => (
//                 <div key={index} className="border p-4 my-2 rounded bg-gray-200 relative">
//                   <div className="mb-4">
//                     <label className="block text-sm font-medium">Child's Name</label>
//                     <Field name={`children[${index}].name`} className="w-full border p-2 rounded" placeholder="Enter Child's Name" />
//                     <ErrorMessage name={`children[${index}].name`} component="div" className="text-red-500 text-sm" />
//                   </div>
 
//                   <div className="mb-4">
//                     <label className="block text-sm font-medium">Age</label>
//                     <Field name={`children[${index}].age`} type="number" className="w-full border p-2 rounded" placeholder="Enter Age" />
//                     <ErrorMessage name={`children[${index}].age`} component="div" className="text-red-500 text-sm" />
//                   </div>
 
//                   <div className="mb-4">
//                     <label className="block text-sm font-medium">Gender</label>
//                     <Field as="select" name={`children[${index}].gender`} className="w-full border p-2 rounded">
//                       <option value="">Select Gender</option>
//                       <option value="male">Male</option>
//                       <option value="female">Female</option>
//                     </Field>
//                     <ErrorMessage name={`children[${index}].gender`} component="div" className="text-red-500 text-sm" />
//                   </div>
 
//                   <div className="mb-4">
//                     <label className="block text-sm font-medium">Date of Birth</label>
//                     <Field name={`children[${index}].dob`} type="date" className="w-full border p-2 rounded" />
//                     <ErrorMessage name={`children[${index}].dob`} component="div" className="text-red-500 text-sm" />
//                   </div>
 
//                   {/* Delete Child Button */}
//                   <button
//                     type="button"
//                     onClick={() => {
//                       const updatedChildren = values.children.filter((_, i) => i !== index);
//                       setFieldValue('children', updatedChildren);
//                     }}
//                     className="absolute top-2 right-2 bg-gray-300 hover:bg-gray-400 text-gray-800  py-1 px-2 rounded"
//       >
                  
//                     {'-'}
//                   </button>
//                 </div>
//               ))}
 
//               {/* Add Child Button */}
//               {values.children.length < 5 && (
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setFieldValue('children', [...values.children, { name: '', age: '', gender: '', dob: '' }]);
//                   }}
//                   className="mt-5 bg-blue-500 text-white py-2 px-4 rounded"
//                 >
//                   Add Child
//                 </button>
//               )}
//             </div>
 
//             {/* Section 2 */}
//             {showSection2 && (
//               <Section2
//                 toggleSection3={() => setShowSection3(!showSection3)}
//                 showSection3={showSection3}
//                 toggleSection2={() => setShowSection2(false)} // Minimize Section 2
//               />
//             )}
 
//             {/* Section 3 */}
//             {showSection3 && (
//               <Section3
//                 values={values}
//                 resetForm={resetForm}
//                 toggleSection3={() => setShowSection3(false)} // Minimize Section 3
//               />
//             )}
 
//             {/* Save and Cancel buttons */}
//             <div className="flex justify-end mt-5 space-x-3">
//               <button
//                 type="button"
//                 onClick={() => resetForm()} // Resets form
//                 className="bg-red-500 text-white py-2 px-4 rounded"
//               >
//                 Cancel
//               </button>
 
//               <button
//                 type="submit" // Submits form
//                 className="bg-green-500 text-white py-2 px-4 rounded"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         )}
//       </Formik>
//     </div>
//   );
// };
 
// export default App;



//it is not console thats why it is change in newcode
// import React, { useState } from 'react';
// import { Formik, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import Section2 from './components/section2';
// import Section3 from './components/section3';
 
// // Form validation schema
// const formSchema = Yup.object().shape({
//   motherName: Yup.string().required('Mother name is required'),
//   fatherName: Yup.string().required('Father name is required'),
//   address: Yup.string().required('Address is required'),
//   children: Yup.array().of(
//     Yup.object().shape({
//       name: Yup.string().required('Child name is required'),
//       age: Yup.number().min(1, 'Age must be at least 1').required('Age is required'),
//       gender: Yup.string().required('Gender is required'),
//       dob: Yup.date().required('Date of birth is required'),
//     })
//   ),
// });
 
// const App = () => {
//   const [showSection2, setShowSection2] = useState(false);
//   const [showSection3, setShowSection3] = useState(false);
//   const [isSaved, setIsSaved] = useState(false); // State to handle save confirmation
 
//   return (
//     <div className="p-5">
//       <Formik
//         initialValues={{
//           motherName: '',
//           fatherName: '',
//           address: '',
//           children: [],
//         }}
//         // validationSchema={formSchema}
//         onSubmit={(values) => {
//           // Save logic
//           console.log('Form Submitted:', values);
          
//           setIsSaved(true); // Show the save confirmation message
//           setTimeout(() => setIsSaved(false), 1000); // Hide after 3 seconds
//           setShowSection2(false);
//           setShowSection3(false);
//         }}
//       >
//         {({ values, setFieldValue, resetForm }) => (
//           <div className="space-y-5">
//             {/* Section 1: Parent and Address Information */}
//             <div className="border p-5 rounded bg-gray-100">
//               <h2 className="text-lg font-bold">Section 1: Parent and Address Information</h2>
//               {/* Mother, Father, Address fields */}
//               <div className="mb-4">
//                 <label className="block text-sm font-medium">Mother's Name</label>
//                 <Field name="motherName" className="w-full border p-2 rounded" placeholder="Enter Mother's Name" />
//                 <ErrorMessage name="motherName" component="div" className="text-red-500 text-sm" />
//               </div>
 
//               <div className="mb-4">
//                 <label className="block text-sm font-medium">Father's Name</label>
//                 <Field name="fatherName" className="w-full border p-2 rounded" placeholder="Enter Father's Name" />
//                 <ErrorMessage name="fatherName" component="div" className="text-red-500 text-sm" />
//               </div>
 
//               <div className="mb-4">
//                 <label className="block text-sm font-medium">Address</label>
//                 <Field name="address" className="w-full border p-2 rounded" placeholder="Enter Address" />
//                 <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
//               </div>
 
//               {/* Children List */}
//               {values.children.map((child, index) => (
//                 <div key={index} className="border p-4 my-2 rounded bg-gray-200 relative">
//                   <div className="mb-4">
//                     <label className="block text-sm font-medium">Child's Name</label>
//                     <Field name={`children[${index}].name`} className="w-full border p-2 rounded" placeholder="Enter Child's Name" />
//                     <ErrorMessage name={`children[${index}].name`} component="div" className="text-red-500 text-sm" />
//                   </div>
 
//                   <div className="mb-4">
//                     <label className="block text-sm font-medium">Age</label>
//                     <Field name={`children[${index}].age`} type="number" className="w-full border p-2 rounded" placeholder="Enter Age" />
//                     <ErrorMessage name={`children[${index}].age`} component="div" className="text-red-500 text-sm" />
//                   </div>
 
//                   <div className="mb-4">
//                     <label className="block text-sm font-medium">Gender</label>
//                     <Field as="select" name={`children[${index}].gender`} className="w-full border p-2 rounded">
//                       <option value="">Select Gender</option>
//                       <option value="male">Male</option>
//                       <option value="female">Female</option>
//                     </Field>
//                     <ErrorMessage name={`children[${index}].gender`} component="div" className="text-red-500 text-sm" />
//                   </div>
 
//                   <div className="mb-4">
//                     <label className="block text-sm font-medium">Date of Birth</label>
//                     <Field name={`children[${index}].dob`} type="date" className="w-full border p-2 rounded" />
//                     <ErrorMessage name={`children[${index}].dob`} component="div" className="text-red-500 text-sm" />
//                   </div>
 
//                   {/* Delete Child Button */}
//                   <button
//                     type="button"
//                     onClick={() => {
//                       const updatedChildren = values.children.filter((_, i) => i !== index);
//                       setFieldValue('children', updatedChildren);
//                     }}
//                     className="absolute top-2 right-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded"
//                   >
//                     {'-'}
//                   </button>
//                 </div>
//               ))}
 
//               {/* Add Child Button */}
//               {values.children.length < 5 && (
//                 <button
//                   type="button"
//                   onClick={() => {
//                     console.log (setFieldValue('children', [...values.children, { name: '', age: '', gender: '', dob: '' }]));
//                   }}
//                   className="mt-5 bg-blue-500 text-white py-2 px-4 rounded"
//                 >
//                   Add Child
//                 </button>
//               )}
//             </div>
 
//             {/* Section 2 */}
//             {showSection2 && (
//               <Section2
//                 toggleSection3={() => setShowSection3(!showSection3)}
//                 showSection3={showSection3}
//                 toggleSection2={() => setShowSection2(false)} // Minimize Section 2
//               />
//             )}
 
//             {/* Section 3 */}
//             {showSection3 && (
//               <Section3
//                 values={values}
//                 resetForm={resetForm}
//                 toggleSection3={() => setShowSection3(false)} // Minimize Section 3
//               />
//             )}
 
//             {/* Save and Cancel buttons */}
//             <div className="flex justify-end mt-5 space-x-3">
//               <button
//                 type="button"
//                 onClick={() => resetForm()} // Resets form
//                 className="bg-red-500 text-white py-2 px-4 rounded"
//               >
//                 Cancel
//               </button>
 
//               <button
//                 type="submit" // Submits form
//                 className="bg-green-500 text-white py-2 px-4 rounded"
//               >
//                 Save
//               </button>
//             </div>
 
//             {/* Save confirmation popup */}
//             {isSaved && (
//               <div className="fixed top-5 right-5 bg-green-500 text-white py-2 px-4 rounded">
//                 Your data has been saved successfully!
//               </div>
//             )}
//           </div>
//         )}
//       </Formik>
//     </div>
//   );
// };
 
// export default App;
 

import React, { useState } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Section2 from './components/section2';
import Section3 from './components/section3';

 
// Form validation schema
const formSchema = Yup.object().shape({
  motherName: Yup.string().required('Mother name is required'),
  fatherName: Yup.string().required('Father name is required'),
  address: Yup.string().required('Address is required'),
  children: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required('Child name is required'),
      age: Yup.number().min(1, 'Age must be at least 1').required('Age is required'),
      gender: Yup.string().required('Gender is required'),
      dob: Yup.date().required('Date of birth is required'),
    })
  ),
});
 
const App = () => {
  const [showSection2, setShowSection2] = useState(false);
  const [showSection3, setShowSection3] = useState(false);
  const [isSaved, setIsSaved] = useState(false); // State to handle save confirmation
 
  return (
    <div className="p-5">
      <Formik
        initialValues={{
          motherName: '',
          fatherName: '',
          address: '',
          children: [],
        }}
        
        validationSchema={formSchema}
        onSubmit={(values, { resetForm }) => {
          // Save logic
          console.log('Form Submitted:', values); // Log form data to the console
          resetForm(); // Reset the form after saving
          setIsSaved(true); // Show the save confirmation message
          setTimeout(() => setIsSaved(false), 2000); // Hide after 3 seconds
          setShowSection2(false);
          setShowSection3(false);
        }}
      >
        
        {({ values, setFieldValue, resetForm, handleSubmit }) => (
          <form onSubmit={handleSubmit} className="space-y-5"> {/* Make sure form is submitted here */}
            
            <div className="border p-5 rounded bg-gray-400">
              <h2 className="text-lg font-bold">Parent and Address Information</h2>
              {/* Mother, Father, Address fields */}
              <div className="mb-4">
                <label className="block text-sm font-medium">Mother's Name</label>
                <Field name="motherName" className="w-full border p-2 rounded" placeholder="Enter Mother's Name" />
                <ErrorMessage name="motherName" component="div" className="text-red-500 text-sm" />
              </div>
 
              <div className="mb-4">
                <label className="block text-sm font-medium">Father's Name</label>
                <Field name="fatherName" className="w-full border p-2 rounded" placeholder="Enter Father's Name" />
                <ErrorMessage name="fatherName" component="div" className="text-red-500 text-sm" />
              </div>
 
              <div className="mb-4">
                <label className="block text-sm font-medium">Address</label>
                <Field name="address" className="w-full border p-2 rounded" placeholder="Enter Address" />
                <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
              </div>
 
              {/* Children List */}
              {values.children.map((child, index) => (
                <div key={index} className="border p-4 my-2 rounded bg-gray-200 relative">
                  <div className="mb-4">
                    <label className="block text-sm font-medium">Child's Name</label>
                    <Field name={`children[${index}].name`} className="w-full border p-2 rounded" placeholder="Enter Child's Name" />
                    <ErrorMessage name={`children[${index}].name`} component="div" className="text-red-500 text-sm" />
                  </div>
 
                  <div className="mb-4">
                    <label className="block text-sm font-medium">Age</label>
                    <Field name={`children[${index}].age`} type="number" className="w-full border p-2 rounded" placeholder="Enter Age" />
                    <ErrorMessage name={`children[${index}].age`} component="div" className="text-red-500 text-sm" />
                  </div>
 
                  <div className="mb-4">
                    <label className="block text-sm font-medium">Gender</label>
                    <Field as="select" name={`children[${index}].gender`} className="w-full border p-2 rounded">
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </Field>
                    <ErrorMessage name={`children[${index}].gender`} component="div" className="text-red-500 text-sm" />
                  </div>
 
                  <div className="mb-4">
                    <label className="block text-sm font-medium">Date of Birth</label>
                    <Field name={`children[${index}].dob`} type="date" className="w-full border p-2 rounded" />
                    <ErrorMessage name={`children[${index}].dob`} component="div" className="text-red-500 text-sm" />
                  </div>
              
                  {/* Delete Child Button */}
                  <button
                    type="button"
                    onClick={() => {
                      const updatedChildren = values.children.filter((_, i) => i !== index);
                      setFieldValue('children', updatedChildren);
                    }}
                    className="absolute top-2 right-2 bg-red-500 text-white py-1 px-3 rounded"
                  >
                    {'-'}
                  </button>
                </div>
              ))}
              
 
              {/* Add Child Button */}
              {values.children.length < 5 && (
                <button
                  type="button"
                  onClick={() => {
                    console.log(setFieldValue('children', [...values.children, { name: '', age: '', gender: '', dob: '' }]));
                  }}
                  className="mt-5 bg-blue-500 text-white py-2 px-4 rounded"
                >
                  Add Child
                </button>
              )}
            </div>
 
            {/* Section 2 */}
            {showSection2 && (
              <Section2
                toggleSection3={() => setShowSection3(!showSection3)}
                showSection3={showSection3}
                toggleSection2={() => setShowSection2(false)} // Minimize Section 2
              />
            )}
 
            {/* Section 3 */}
            {showSection3 && (
              <Section3
                values={values}
                resetForm={resetForm}
                toggleSection3={() => setShowSection3(false)} // Minimize Section 3
              />
            )}
 
            {/* Save and Cancel buttons */}
            <div className="flex justify-end mt-5 space-x-3">
              <button
                type="button"
                onClick={() => resetForm()} // Resets form
                className="bg-red-500 text-white py-2 px-4 rounded"
              >
                Cancel
              </button>
 
              <button
                type="submit" // Submits form
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Save
              </button>
            </div>
 
            {/* Save confirmation popup */}
            {isSaved && (
              <div className="fixed top-5 right-5 bg-blue-500 text-white py-2 px-4 rounded">
                Your data has been saved successfully!
              </div>
            )}
          
          </form>
        )}
      
      </Formik>
    </div>
  );
};
 
export default App;
 