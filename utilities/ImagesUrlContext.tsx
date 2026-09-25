"use client";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useCallback,
} from "react";

export const ImagesUrlContext = createContext<
  [string[], Dispatch<SetStateAction<string[]>>]
>([[], () => {}]);

export default function ImagesUrlContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [imagesUrl, setImagesUrl] = useState<string[]>([]);

  const memoizedSetImagesUrl = useCallback((urls: SetStateAction<string[]>) => {
    setImagesUrl(urls);
  }, []);

  return (
    <ImagesUrlContext value={[imagesUrl, memoizedSetImagesUrl]}>
      {children}
    </ImagesUrlContext>
  );
}
