'use client';
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import img from "@/public/images/logo.svg";
const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Image
        priority={true}
        width={48}
        height={48}
        src={img}
        alt={`${APP_NAME} logo`}
      />

      <div className="p-6 rounded-lg shadow-md w-1/3 text-center">
        <h1 className="text-3xl font-bold mb-4">Not Found</h1>
        <p className='text-destructive'>Could not find requested resource</p>
        {/* take note href is like server render but we use in client side so use "use client" */}
        <Button  variant={'outline'} className="mt-4 ml-2" onClick={function () { window.location.href = '/'}}>
            Back to homemmy
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
