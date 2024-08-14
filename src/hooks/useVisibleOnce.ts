import { useEffect, useState } from "preact/hooks";

interface Props {
  intersecting: boolean;
  refObserver: IntersectionObserver | null;
}

const useVisibleOnce = ({ intersecting, refObserver }: Props) => {
const [visibleOnce, setVisibleOnce]= useState<boolean>(false)

  useEffect(() => {
    if (intersecting) {
      setVisibleOnce( intersecting);

      if (refObserver) refObserver.disconnect();
      console.log("disconnet");
    }
  }, [intersecting]);

 
  return { visibleOnce };
};

export default useVisibleOnce;
