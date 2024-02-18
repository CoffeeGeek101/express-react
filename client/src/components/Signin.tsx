import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/store';
import { authenticatingUser } from '../redux/usersigninSlice';
import { useNavigate } from 'react-router-dom';
import { z } from "zod";
import DOMPurify from 'dompurify'
import { useForm } from 'react-hook-form';

interface UserData {
  name: string | null;
  email: string | null;
  password: string | null;
}

const Signin = () => {

  const schema = z.object({
    name: z.string().regex(/^[A-Za-z]+$/).min(2),
    email: z.string().email().nonempty(),
    password: z.string().nonempty().min(6)
  });

  const sanitize = (input: string) => {
    const cleanInput = DOMPurify.sanitize(input);
    return cleanInput;
  }

  const { register, handleSubmit, formState: { errors } } = useForm<UserData>({
    resolver: async (data) => {
      try {
        const validatedData = schema.parse(data);
        return {
          values: validatedData,
          errors: {}
        }
      } catch (err: any) {
        return {
          values: {},
          errors: err.formErrors.fieldErrors
        }
      }
    }
  });

  const isAuth = useAppSelector((state) => state.signin.isAunthenticated);

  const dispatch = useAppDispatch();
  const router = useNavigate();

  const handleSignin = (data : UserData) => {
    const sanitizedUserData = {
      name: sanitize(data.name!),
      email: sanitize(data.email!),
      password: sanitize(data.password!)
    }
    dispatch(authenticatingUser(sanitizedUserData));
  }

  useEffect(() => {
    if (isAuth) {
      router('/home')
    } else {
      console.log("not yet authenticated");
    }
  }, [isAuth])

  return (
    <div className='flex flex-col w-screen gap-2 h-screen justify-center items-center m-auto bg-zinc-900'>
      <form
        onSubmit={handleSubmit(handleSignin)}
        className='flex flex-col gap-2'>

        <input
          placeholder='name'
          type='text'
          {...register('name')}
          className='p-2 rounded-md'
        />
        {errors && errors.name && <p className='text-red-500 text-xs'>please enter a valid name.</p>}

        <input
          placeholder='email'
          type='email'
          {...register('email')}
          className='p-2 rounded-md'
        />
        {errors && errors.email && <p className='text-red-500 text-xs'>{errors.email.message} enter a valid email</p>}

        <input
          placeholder='password'
          type='password'
          {...register('password')}
          className='p-2 rounded-md'
        />
        {errors && errors.password && <p className='text-red-500 text-xs'>min 6 charater password required</p>}

        <button
          onClick={() => handleSubmit(handleSignin)}
          className='text-slate-50 bg-black font-medium p-2 rounded-xl'>Signin
        </button>

      </form>
    </div >
  )
}

export default Signin