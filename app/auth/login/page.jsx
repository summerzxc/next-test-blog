"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import GoogleButton from "@/app/components/ui/GoogleButton";
import FbButton from "@/app/components/ui/FbButton";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();


  const handleLogin = async (e) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      
      console.error("Login failed", result.error);
    } else {
      console.log("Login successful");
      router.replace("/");
    }
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <Card className="w-96">
        <CardHeader className="bg-neutral mb-4 grid h-28 place-items-center">
          <Typography variant="h3" color="white" className="title-blog">
            ログイン
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input
            label="Email"
            size="lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            size="lg"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="-ml-2.5">
            <Checkbox label="私を覚えてますか" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button onClick={handleLogin} className="w-full bg-neutral">
            ログイン
          </Button>
          <div className="w-full flex gap-3 mt-4 mb-2 items-center">
            <div className="border-t w-full border-[#888]"></div>
            <span className="text-nowrap">又は</span>
            <div className="border-t w-full border-[#888]"></div>
          </div>
          <GoogleButton />
          <FbButton />
          <Typography variant="small" className="mt-6 flex justify-center">
            アカウントをお持ちではありませんか?
            <Typography
              as="a"
              href="/auth/register"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
            >
              登録
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
}
