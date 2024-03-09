import { Spinner } from "@nextui-org/react";

export default async function Loading() {
  return (
    <div className="flex justify-center items-start w-full">
      <Spinner color="default" />
    </div>
  );
}
