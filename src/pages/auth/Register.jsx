import { FcGoogle } from 'react-icons/fc';
import logo from '../../assets/logo1.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { toast } from 'sonner';

const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [err, setErr] = useState(null);

  const navigate = useNavigate();
  // const { register } = useContext(AuthContext);

  const togglePassword = () => setPasswordVisible((s) => !s);
  const toggleConfirm = () => setConfirmVisible((s) => !s);

  const handleChange = (e) =>
    setInputs((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr(null);

    if (inputs.password !== inputs.confirmPassword) {
      setErr('Passwords do not match');
      return;
    }

    try {
      // await register({ username: inputs.username, email: inputs.email, password: inputs.password });
      toast.success('Registered successfully');
      navigate('/login');
    } catch (error) {
      setErr('Registration failed');
    }
  };

  const confirmMismatch =
    inputs.confirmPassword.length > 0 &&
    inputs.password !== inputs.confirmPassword;

  return (
    <div className='flex flex-col items-center justify-center md:justify-start min-h-screen pt-8'>
      <img
        src={logo}
        alt='logo'
        className='w-[140px] block mb-3 cursor-pointer hover:scale-105 transition-all duration-300'
        onClick={() => navigate('/')}
      />

      <div className='md:bg-[#0D0C36] rounded-[14px] px-8 py-7 w-full max-w-[420px] -mt-2 flex flex-col gap-2 items-center'>
        <div className='text-center mb-4 w-full'>
          <h2 className='text-lg font-medium'>Welcome to Linkup!</h2>
          <h3 className='text-lg font-medium mt-1'>Register</h3>
        </div>

        <form
          className='flex flex-col justify-center items-center gap-4 w-full'
          onSubmit={handleSubmit}
        >
          <input
            name='username'
            value={inputs.username}
            onChange={handleChange}
            placeholder='Username'
            className='p-2 rounded-sm bg-slate-50 text-slate-800 w-full'
            required
          />

          <input
            name='email'
            value={inputs.email}
            onChange={handleChange}
            placeholder='Email'
            className='p-2 rounded-sm bg-slate-50 text-slate-800 w-full'
            required
          />

          <div className='flex items-center bg-slate-50 rounded-sm w-full py-2 px-3'>
            <input
              name='password'
              value={inputs.password}
              onChange={handleChange}
              type={passwordVisible ? 'text' : 'password'}
              placeholder='Password'
              className='text-slate-800 border-none outline-0 w-full'
              required
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

          <div className='flex items-center bg-slate-50 rounded-sm w-full py-2 px-3'>
            <input
              name='confirmPassword'
              value={inputs.confirmPassword}
              onChange={handleChange}
              type={confirmVisible ? 'text' : 'password'}
              placeholder='Confirm Password'
              className='text-slate-800 border-none outline-0 w-full'
              required
            />
            {confirmVisible ? (
              <IoMdEye
                className='text-black text-2xl cursor-pointer'
                onClick={toggleConfirm}
              />
            ) : (
              <IoMdEyeOff
                className='text-[#2563EB] text-2xl cursor-pointer'
                onClick={toggleConfirm}
              />
            )}
          </div>

          {confirmMismatch && (
            <p className='text-red-500 text-sm mt-2'>Passwords do not match</p>
          )}

          <button
            type='submit'
            className='bg-[#2563EB] p-2 w-[160px] rounded-sm transition-all duration-300 hover:scale-105'
          >
            Sign up
          </button>

          {err && <p className='text-red-500 mt-2 text-sm'>{err}</p>}
        </form>

        <div className='w-full flex items-center gap-3'>
          <span className='h-[1px] flex-1 bg-slate-400' />
          <p className='text-center font-light text-sm text-slate-400 px-4 whitespace-nowrap'>
            Or continue with
          </p>
          <span className='h-[1px] flex-1 bg-slate-400' />
        </div>

        <button
          type='button'
          className='flex items-center justify-center gap-2 border border-slate-500 rounded-lg w-[220px] md:w-full h-10 px-3 hover:border-[#2563EB]'
        >
          <FcGoogle className='text-2xl' />
          <span className='text-sm'>Google</span>
        </button>

        <p className='text-sm text-left w-full mt-5'>
          Already have an account?{' '}
          <span
            className='text-[#2563EB] cursor-pointer hover:font-bold transition duration-300'
            onClick={() => navigate('/login')}
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
