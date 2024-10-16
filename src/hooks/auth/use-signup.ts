import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { useRouter } from 'next/router';

import type { Signup } from '@/types/auth';
import { API_PATHS } from '@/constants/api';
import { ROUTES } from '@/constants/router';

import { axiosBasicAuthInstance } from '@/libs/auth-axios';
import { setSentryLogging } from '@/utils/error-logging';

import { useToast } from '../use-toast';

const signup = async ({ email, password1, password2 }: Signup) => {
  const res = await axiosBasicAuthInstance.post(`${API_PATHS.AUTH.SIGNUP.POST()}`, { email, password1, password2 });

  return res;
};

const useSignup = () => {
  const router = useRouter();
  const { addToast } = useToast();

  const { mutate, isSuccess, isPending } = useMutation({
    mutationFn: signup,
    onSuccess: () => {
      void router.push(ROUTES.signupConfirm);
    },
    onError: (error: AxiosError) => {
      if (error?.response?.status === 400) {
        const errorMessage = (error.response.data as { error: string })?.error;
        addToast(errorMessage, 'error', 1500);
      }
      setSentryLogging(error);
    },
  });

  return { mutate, isSuccess, isPending };
};

export default useSignup;
