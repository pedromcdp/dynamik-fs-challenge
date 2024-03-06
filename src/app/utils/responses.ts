import { NextResponse } from "next/server";

export const Success = (data: any) => {
  return NextResponse.json(
    {
      success: true,
      data,
    },
    { status: 200 }
  );
};

export const NotFound = (message: string) => {
  return NextResponse.json(
    {
      success: false,
      message,
    },
    { status: 404 }
  );
};

export const BadRequest = (message: string) => {
  return NextResponse.json(
    {
      success: false,
      message,
    },
    { status: 400 }
  );
};

export const NotValid = (message: string) => {
  return NextResponse.json(
    {
      success: false,
      message,
    },
    { status: 422 }
  );
};

export const Error = (message: string | unknown) => {
  return NextResponse.json(
    {
      success: false,
      message,
    },
    { status: 500 }
  );
};
