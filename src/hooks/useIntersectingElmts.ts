import type { RefObject } from "preact";
import { useState, useEffect, useRef } from "preact/hooks";

interface Props<T> {
  ref: RefObject<T>;
  options?: IntersectionObserverInit;
}

const useIntersectingElmts = <T extends HTMLElement>({
  ref,
  options,
}: Props<T>) => {
  const [intersecting, setIntersecting] = useState<boolean>(false);

  const refObserver = useRef<IntersectionObserver>(null);

  useEffect(() => {
    const currentRef = ref.current;

    refObserver.current = new IntersectionObserver(([entry]) => {
      console.log(`intersecting: ${entry.isIntersecting}`);

      setIntersecting(entry.isIntersecting);
    }, options);

    if (currentRef) refObserver.current.observe(currentRef);

    return () => {
      if (currentRef) refObserver.current?.disconnect();
    };
  }, []);

  return { intersecting, refObserver: refObserver.current };
};

export default useIntersectingElmts;
