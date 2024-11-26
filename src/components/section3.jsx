// import React from 'react';
// import { useNavigate } from 'react-router-dom';
 
// const Section3 = ({ values }) => {
//   const navigate = useNavigate();
 
//   const handleSave = () => {
//     console.log('Form Values:', values);


//   resetForm();
//   navigate('/section1')
//   };
//   return (
//     <div>
//       <h2 className="text-lg font-bold mb-3">Confirm and Save</h2>
//       <p className="mb-3"><strong>Parent's Name:</strong> {values.parentName}</p>
//       <p className="mb-3"><strong>Student's Name:</strong> {values.studentName}</p>
//       <p className="mb-3"><strong>Age:</strong> {values.age}</p>
//       <p className="mb-3"><strong>Gender:</strong> {values.gender}</p>
//       <p className="mb-3"><strong>Date of Birth:</strong> {values.dob}</p>
 
//       <button
//         type="button"
//         onClick={handleSave}
//         className="bg-green-500 text-white py-2 px-4 rounded mr-2"
//       >
//         Save
//       </button>
 
//       <button
//         type="button"
//         onClick={() => navigate('/section1')}
//         className="bg-gray-500 text-white py-2 px-4 rounded"
//       >
//         Cancel
//       </button>
//     </div>
//   );
// };
 
// export default Section3;
 

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
 
// const Section3 = ({ values, resetForm }) => {
//   const navigate = useNavigate();
 
//   const handleSave = () => {
//     console.log('Form Values:', values);
 
//     // Reset the form after saving
//     resetForm();
//     // Navigate back to the first section or display a success message
//     navigate('/');
//   };
 
//   return (
//     <div className="border p-5 rounded bg-gray-100">
//       <h2 className="text-lg font-bold">Section 3: Confirm and Save</h2>
 
//       <p className="mb-3"><strong>Parent's Name:</strong> {values.parentName}</p>
//       <p className="mb-3"><strong>Student's Name:</strong> {values.studentName}</p>
//       <p className="mb-3"><strong>Age:</strong> {values.age}</p>
//       <p className="mb-3"><strong>Gender:</strong> {values.gender}</p>
//       <p className="mb-3"><strong>Date of Birth:</strong> {values.dob}</p>
 
//       <button
//         type="submit"
//         className="bg-green-500 text-white py-2 px-4 rounded mr-2"
//       >
//         Save
//       </button>
 
//       <button
//         type="button"
//         onClick={() => {
//           resetForm();
//           navigate('/');
//         }}
//         className="bg-gray-500 text-white py-2 px-4 rounded"
//       >
//         Cancel
//       </button>
//     </div>
//   );
// };
 
// export default Section3;
 
//3rdmethod


import React from 'react';
import { useNavigate } from 'react-router-dom';
 
const Section3 = ({ values, resetForm }) => {
  const navigate = useNavigate();
 
  const handleSave = () => {
    console.log('Form Values:', values);
    resetForm();
    navigate('/');
  };
 
  return (
    <div className="relative border p-5 rounded bg-gray-100">
      <h2 className="text-lg font-bold">Section 3: Confirm and Save</h2>

      <p className="mb-3"><strong>Parent's Name:</strong> {values.parentName}</p>
      <p className="mb-3"><strong>Student's Name:</strong> {values.studentName}</p>
      <p className="mb-3"><strong>Age:</strong> {values.age}</p>
      <p className="mb-3"><strong>Gender:</strong> {values.gender}</p>
      <p className="mb-3"><strong>Date of Birth:</strong> {values.dob}</p>

       
 
      {/* Save and Cancel buttons */}
      <div className="flex justify-end mt-5">
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded mr-2"
        >
          Save
        </button>
 
        <button
          type="button"
          onClick={() => {
            resetForm();
            navigate('/');
          }}
          className="bg-gray-500 text-white py-2 px-4 rounded "
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
 
export default Section3;
 