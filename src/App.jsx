import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    web: '',
    imglink: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };
  const male="male";
  const female ="female"

  return (
    <div>
      <h1 className='text-3xl mb-3 font-bold'>Registration Form</h1>
      <form className='bg-black text-white p-3' onSubmit={handleSubmit}>
        <div className='text-white'>
          <label>Name</label>
          <input
          className='ml-14 mt-2 rounded-md'
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
           className='ml-16 mt-2 rounded-md'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Website</label>
          <input
           className='ml-12 mt-2 rounded-md text-black'
            type="text"
            name="web"
            value={formData.web}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Image link</label>
          <input
           className='ml-9 mt-2 rounded-md text-black'
            type="text"
            name="imglink"
            value={formData.imglink}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Gender</label>
          <input
           className='ml-6 mt-2'
            type="radio"
            
            name="password"
            value="male"
            onChange={handleChange}
          />
          <label htmlFor="male">male</label>
          <input
           className='ml-6 mt-2'
            type="radio"
            name="password"
            value="female"
            onChange={handleChange}
          />
          <label htmlFor="female">female</label>
        </div>
        <button type="submit"
          className='bg-white text-black mt-4 rounded-md p-4 text-lg'
        >Submit</button>
      </form>
      

      {submittedData && (
        <div className='mt-6 bg-slate-500 p-4'>
          <h2 className='text-3xl'>Submitted Data</h2>
          <img src={submittedData.imglink} alt="" srcset="" className='w-10 h-10 flex justify-center text-center ml-[47%] lg:ml-[50%]'/>
          <p className='p-2'>First Name: {submittedData.firstName}</p>
          <p className='p-2'>Email: {submittedData.email}</p>
          <p className='p-2'>Website: {submittedData.web}</p>
         
        </div>
      )}
    </div>
  );
}

export default App
