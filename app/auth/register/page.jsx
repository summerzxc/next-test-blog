"use client";

import React from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export default function page() {
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
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
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
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              パスワード
            </Typography>
            <Input
              type="Password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
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
          <button className="btn btn-neutral w-full">登録</button>
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
