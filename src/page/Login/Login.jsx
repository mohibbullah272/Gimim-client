import { Link } from 'react-router-dom';
import loginBg from '../../assets/login-bg.png'
import GoogleLogin from '@/Shared/GoogleLogin';
import { useContext, useState } from 'react';
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { useForm } from 'react-hook-form';
import { AuthContext } from '@/AuthProvider/AuthProvider';
const Login = () => {
    const [showPass,setShowPass]=useState(false)
  const { loginWithEmail}=useContext(AuthContext)
    const {
        register,
        handleSubmit,
       
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => {
        const email = data?.email
        const password = data?.password
loginWithEmail(email,password)
.then(result=>{
    console.log(result.user)
})
      }

    return (
        <div className='min-h-screen mt-20 max-w-7xl mx-auto' style={{backgroundImage:`url(${loginBg})`,
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        backgroundSize:'center'
        }}>
            <div  className='flex md:flex-row flex-col justify-between md:gap-24 gap-10 md:p-10 items-center'>
<div>
<h3 className='text-3xl  text-center'>Stick With Us – Log In Now!</h3>
<p className=' italic text-center'>Your trusted source for industrial-strength adhesives.</p>
</div>


            <form onSubmit={handleSubmit(onSubmit)} className="relative fieldset bg-opacity-50 flex-1 backdrop-blur-3xl bg-white border border-base-200 p-4 rounded-box">
  <legend className="fieldset-legend ">Login</legend>
  
  <label className="fieldset-label">Email</label>
  <input type="email" {...register('email')} className="input w-full" placeholder="Email" required/>
  
  <label className="fieldset-label">Password</label>
  <input {...register('password')} type={showPass?'text':'password'} className="input w-full" placeholder="Password" />
  <p onClick={()=>setShowPass(!showPass)} className='absolute bottom-[230px] right-8'>

  {
    showPass?<IoMdEyeOff  className='text-xl'/>:  <IoEye className='text-xl'/>
  }
  </p>
  <button className="btn primary text-green-950 mt-4">Login</button>
  <div className="divider">or</div>
  <GoogleLogin></GoogleLogin>
  <p>Don't have an account ? <span className='underline hover:text-[#65C3A1]'><Link to={'/signup'}>Sign up</Link></span> </p>
</form>
            </div>


        </div>
    );
};

export default Login;