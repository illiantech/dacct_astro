import { useEffect, useRef } from "preact/hooks";

interface Props {
    intersecting:boolean;
    refObserver: IntersectionObserver | null
}

const useVisibleOnce= ({intersecting, refObserver}:Props)=>{
    const refVisibleOnce = useRef<boolean>(false);

    if (intersecting) {
        refVisibleOnce.current = intersecting;
    
        useEffect(() => {
          if (refObserver) refObserver.disconnect();
          console.log("disconnet");
        }, [refVisibleOnce]);
      }
    
      return {refVisibleOnce:refVisibleOnce.current}
}


export default useVisibleOnce