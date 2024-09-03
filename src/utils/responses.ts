import { NextResponse } from "next/server";

interface Response {
  success: boolean;
  data?: <T>(data: T) => T;
}

export const Success = <T>(
  status: number = 200,
  data: T,
  headers?: HeadersInit
): NextResponse<Response> => {
  return NextResponse.json(
    {
      success: true,
      ...data,
    },
    { status: status, headers: headers }
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

export const Error = (error: string | unknown) => {
  return NextResponse.json(
    {
      success: false,
      message:
        typeof error === "object" && error !== null && "message" in error
          ? error.message
          : "Ocorreu um erro.",
    },
    { status: 500 }
  );
};
