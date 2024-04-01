"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import GoogleButton from "@/app/components/ui/GoogleButton";
import FbButton from "@/app/components/ui/FbButton";

export default function Page() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = async (e) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      username,
      email,
      password,
    });

    if (result?.error) {
      // Handle registration error, e.g., display error message
      console.error("Registration failed", result.error);
    } else {
      // Handle successful registration here, e.g., redirect
      console.log("Registration successful");
      // Redirect the user to a different page after successful registration
      // Example: router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <Card
        color="transparent"
        shadow={false}
        className="p-8 rounded-md bg-white"
      >
        <Typography variant="h4" color="blue-gray">
          登録
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          はじめまして！登録するには詳細を入力してください。{" "}
        </Typography>
        <form
          onSubmit={handleRegistration}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              ユーザー名
            </Typography>
            <Input
              size="lg"
              placeholder="Username"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              郵便
            </Typography>
            <Input
              size="lg"
              placeholder="Name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              パスワード
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                利用規約
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  に同意します
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button type="submit" color="teal" className="w-full mt-4">
            登録
          </Button>
          <div className="w-full flex gap-3 mt-4 mb-2 items-center">
            <div className="border-t w-full border-[#888]"></div>
            <span className="text-nowrap">又は</span>
            <div className="border-t w-full border-[#888]"></div>
          </div>
          <GoogleButton />
          <FbButton />
          <Typography color="gray" className="mt-4 text-center font-normal">
            すでにアカウントをお持ちですか？
            <a href="/auth/login" className="font-medium text-gray-900">
              ログイン
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
