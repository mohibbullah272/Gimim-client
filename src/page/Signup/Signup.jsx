import { useContext, useState } from 'react';
import signupBanner from '../../assets/login-bg.png'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { AuthContext } from '@/AuthProvider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import GoogleLogin from '@/Shared/GoogleLogin';
const Signup = () => {
const [showPass,setShowPass]=useState(false)
const navigate = useNavigate()
const {
    register,
    handleSubmit,
   
    formState: { errors },
  } = useForm()
  const { signWithEmail,updateUser}=useContext(AuthContext)
  const onSubmit = (data) => {
    const name = data?.name
    const email= data?.email 
    const password = data?.password 
    signWithEmail(email,password)
    .then(result=>{
        console.log(result.user)
    })
    updateUser(name)
    .then(res=>{
      navigate('/')

    })

  }

    return (
        <div className='min-h-screen mt-20 max-w-7xl mx-auto' style={{backgroundImage:`url(${signupBanner})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat'
        }}>
                 <div  className='flex md:flex-row flex-col justify-between md:gap-24 gap-10 md:p-10 items-center'>
<div className='w-1/2'>
<h3 className='text-3xl  text-center'>Create Account & enjoy more features</h3>
<p className=' italic text-center'>Your trusted source for industrial-strength adhesives.</p>
</div>


            <form onSubmit={handleSubmit(onSubmit)} className="fieldset w-1/2 relative bg-opacity-50  backdrop-blur-3xl bg-white border border-base-200 p-4  rounded-box">
  <legend className="fieldset-legend ">signup</legend>
  
  <label className="fieldset-label">Name</label>
  <input {...register('name')} type="text" className="input  w-full" placeholder="Name" />
  <label className="fieldset-label">Email</label>
  <input {...register('email')} type="email" className="input  w-full" placeholder="Email" />
  
  <label className="fieldset-label">Password</label>
  <input {...register('password')} type={showPass?'text':'password'} className="input  w-full" placeholder="Password" />
  <p onClick={()=>setShowPass(!showPass)} className='absolute bottom-[230px] right-8'>

  {
    showPass?<FaEyeSlash  className='text-xl'/>:  <FaEye className='text-xl'/>
  }
  </p>
  <button className="btn primary text-green-950 mt-4">Signup</button>
  <div className="divider">or</div>
  <GoogleLogin></GoogleLogin>
  <p>Already have an account ? <span className='underline hover:text-[#65C3A1]'><Link to={'/login'}>Login</Link></span> </p>
</form>
            </div>
        </div>
    );
};

export default Signup;