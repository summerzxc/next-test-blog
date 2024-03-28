"use client";

import React from "react";
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

export default function page() {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <Card className="w-96">
        <CardHeader className="bg-neutral mb-4 grid h-28 place-items-center">
          <Typography variant="h3" color="white" className="title-blog">
            ログイン
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input label="Email" size="lg" />
          <Input label="Password" size="lg" />
          <div className="-ml-2.5">
            <Checkbox label="私を覚えてますか" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <button className="btn btn-neutral w-full">ログイン</button>
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
