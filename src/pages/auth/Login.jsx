import { FcGoogle } from 'react-icons/fc';
import logo from '../../assets/logo1.png';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { toast } from 'sonner';

const Login = () => {
  const [inputs, setInputValue] = useState({
    email: '',
    password: '',
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  //   const { login } = useContext(AuthContext);

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    setInputValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);

    try {
      await login(inputs);
      toast.success('Logged in Successfully');
      navigate('/');
    } catch (err) {
      setErr('Invalid Email or Password', err);
    }
  };

  return (
    <div className='flex flex-col gap-y-2 items-center justify-center md:justify-start min-h-screen pt-7'>
      <img
        src={logo}
        alt='logo'
        className='w-[140px] cursor-pointer hover:scale-105 transition-all duration-300'
      />

      <div className='bg-[#0D0C36] rounded-md px-8 py-8 w-full max-w-[420px] flex flex-col items-center'>
        <div className='flex flex-col justify-center items-center gap-3 w-full'>
          <div className='text-center'>
            <h1 className='text-lg font-medium'>Welcome!</h1>
            <h1 className='text-lg font-medium'>Log In</h1>
          </div>

          <button
            type='button'
            className='flex items-center justify-center gap-2 border border-slate-500 rounded-lg w-[220px] md:w-full h-10 px-3 hover:border-[#2563EB]'
          >
            <FcGoogle className='text-2xl' />
            <span className='text-md hidden md:block'>Google</span>
          </button>

          <div className='flex items-center justify-center w-full py-2 mb-6'>
            <span className='h-[1px] flex-1 bg-slate-400'></span>
            <p className='text-center font-light text-sm text-slate-400 px-4 whitespace-nowrap'>
              Or Login Using
            </p>
            <span className='h-[1px] flex-1 bg-slate-400'></span>
          </div>
        </div>

        <form
          className='flex flex-col justify-center items-center gap-4 w-full'
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            required
            type='text'
            placeholder='Email'
            name='email'
            onChange={handleChange}
            className='p-2 rounded-sm bg-slate-50 text-slate-800 w-full'
          />

          <div className='flex items-center bg-slate-50 rounded-sm w-full py-2 px-3'>
            <input
              required
              type={passwordVisible ? 'text' : 'password'}
              placeholder='Password'
              name='password'
              onChange={handleChange}
              className='text-slate-800 border-none outline-0 w-full'
            />
            {passwordVisible ? (
              <IoMdEye
                className='text-black text-2xl cursor-pointer'
                onClick={togglePassword}
              />
            ) : (
              <IoMdEyeOff
                className='text-[#2563EB] text-2xl cursor-pointer'
                onClick={togglePassword}
              />
            )}
          </div>
        </form>

        <div className='flex flex-col gap-3 justify-center items-center w-full mt-4'>
          <p
            onClick={() => navigate('/password-reset')}
            className='hover:underline text-sm font-light hover:text-blue cursor-pointer'
          >
            Forgot password?
          </p>

          <button
            onClick={handleSubmit}
            className='bg-[#2563EB] p-2 w-[160px] rounded-sm transition-all duration-300 hover:scale-105'
          >
            Sign In
          </button>

          {err && <p className='text-red-500'>{err}</p>}

          <p
            className='text-sm cursor-pointer text-left'
            onClick={() => navigate('/login')}
          >
            {`Don't Have An Account? `}
            <a
              href='/register'
              className='text-[#2563EB] ml-2 hover:font-bold transition duration-300'
            >
              Create One
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
