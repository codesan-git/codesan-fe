"use client";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import React, { Fragment } from "react";
import { Dot } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Login from "../Login";

type Props = {
  searchParams?: Record<"callbackUrl" | "error", string>;
};

const SignInButton = (props: Props) => {
  const { data: session } = useSession();
  console.log({ session });

  if (session && session.user)
    return (
      <div className="flex gap-4 ml-auto">
        <p className="flex">
          <span>
            {session.user.name}
          </span>
          <span className="my-auto">
            <Dot color="green" size={30} />
          </span>
        </p>
        <Link
          href={"/api/auth/signout"}
          className="flex gap-4 ml-auto text-red-600"
        >
          Sign Out
        </Link>
      </div>
    );

  return (
    <Fragment>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={'ghost'} className='space-x-2 rounded-full'>
            <span>Log in</span>
            <span><Dot /></span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when youre done.
            </DialogDescription>
          </DialogHeader>
          <Login
            error={props.searchParams?.error}
            callbackUrl={props.searchParams?.callbackUrl}
          />
          {/* <DialogFooter>
            <Button type="submit">Login</Button>
          </DialogFooter> */}
        </DialogContent>
      </Dialog>
      <Link href={"/signUp"} className='rounded-full'>
        Hire Creative
      </Link>
    </Fragment>
    // <div className="flex gap-4 ml-auto items-center">
    //   <Link
    //     href={"/api/auth/signin"}
    //     className="flex gap-4 ml-auto text-green-600"
    //   >
    //     Sign In
    //   </Link>
    //   <Link
    //     href={"/signup"}
    //     className="flex gap-4 ml-auto bg-green-600 text-green-200 p-2 rounded"
    //   >
    //     Sign Up
    //   </Link>
    // </div>
  );
};

export default SignInButton;