// import useImagesUrls from "@/app/context/addProductContext/useImagesUrls";
// import { deleteProductImageAction } from "@/lib/productsActions";
import { upload } from "@vercel/blob/client";
import Image from "next/image";
import { memo, startTransition, use, useEffect, useRef, useState } from "react";
import { Button } from "./button";
import { ImagesUrlContext } from "@/utilities/ImagesUrlContext";

type Props = { file: File; deleteMethod: () => void };
function FileInputShowItem({ file, deleteMethod }: Props) {
  const localUrl = URL.createObjectURL(file);
  const remoteUrl = useRef("");
  const signal = useRef(new AbortController());
  const [progress, setProgress] = useState(0);
  const [, setImagesUrls] = use(ImagesUrlContext);
  const [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   const uploadImg = async () => {
  //     if (!isLoaded) {
  //       setIsLoaded(true);
  //       try {
  //         const newBlob = await upload(`/memories/draft/${file.name}`, file, {
  //           access: "public",
  //           handleUploadUrl: "/api/upload",
  //           onUploadProgress: async ({ loaded, total }) => {
  //             startTransition(() => {
  //               if (total) setProgress(Math.floor((loaded * 100) / total));
  //             });
  //           },
  //           abortSignal: signal.current.signal,
  //         });
  //         setImagesUrls((prev) => [...prev, newBlob.url]);
  //         remoteUrl.current = newBlob.url;
  //       } catch (error) {
  //         console.error("Upload failed:", error);
  //         // Reset upload state on error
  //         setIsLoaded(false);
  //       }
  //     }
  //   };
  //   uploadImg();

  //   // Cleanup function to abort upload when component unmounts
  //   const currentSignal = signal.current;
  //   return () => {
  //     if (!currentSignal.signal.aborted) {
  //       currentSignal.abort();
  //     }
  //   };
  // }, [file, isLoaded]);

  return (
    <li className="relative ">
      <div className="relative h-full ">
        <Image
          className="object-cover h-full rounded-lg"
          src={localUrl}
          alt="image"
          width={300}
          height={300}
          draggable={false}
          priority
        />
        <Button
          className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2  rounded-full w-7 h-7 flex items-center justify-center leading-7 uppercase z-50 "
          variant={"destructive"}
          onClick={async () => {
            if (!signal.current.signal.aborted) signal.current.abort();

            // if (remoteUrl.current) {
            //   await deleteProductImageAction(remoteUrl.current);
            //   setImagesUrls((prev) =>
            //     prev.filter((prevImg) => prevImg !== remoteUrl.current),
            //   );
            // }

            deleteMethod();
          }}
        >
          x
        </Button>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-white rounded-lg ">
        <div
          className="absolute bg-green-600 transition-all duration-300 h-full rounded-lg left-0 top-0"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </li>
  );
}

export default memo(
  FileInputShowItem,
  (prev, next) => prev.file.name === next.file.name,
);
