import Login from '@/components/Login';
import React from 'react'

type Props = {
  searchParams?: Record<"callbackUrl" | "error", string>;
};

const SignInInterception = (props: Props) => {
  return (
    <Login
      error={props.searchParams?.error}
      callbackUrl={props.searchParams?.callbackUrl}
    />
  )
}

export default SignInInterception