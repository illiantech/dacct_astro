import { createContext, type ComponentChildren } from "preact";
import { useContext, useEffect, useRef, useState } from "preact/hooks";

interface Props {
  options: IntersectionObserverInit;
  children: ComponentChildren;
}

type ObserverMethod = <T extends HTMLElement>(elmt: T) => void;

interface ValuesProvider {
  observe: ObserverMethod;
  unobserve: ObserverMethod;
  entries: IntersectionObserverEntry[];
}

// 1. Crear el contexto
export const IntersectionObserverContext = createContext<ValuesProvider | null>(
  null,
);

// 2. Crear un proveedor del contexto
export const IntersectionObserverProvider = ({ options, children }: Props) => {
  const observerRef = useRef<IntersectionObserver>(null);
  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((observerEntries) => {
      setEntries(observerEntries);
    }, options);

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  const observe: ObserverMethod = (elmt) => {
    if (elmt) {
      if (observerRef.current) observerRef.current.observe(elmt);
    }
  };

  const unobserve: ObserverMethod = (elmt) => {
    if (elmt) {
      if (observerRef.current) observerRef.current.unobserve(elmt);
    }
  };

  return (
    <IntersectionObserverContext.Provider
      value={{ observe, unobserve, entries }}
    >
      {children}
    </IntersectionObserverContext.Provider>
  );
};

export const useIntersectionObserver = () => {
  const context = useContext(IntersectionObserverContext);

  if (!context) {
    throw new Error(
      "useIntersectionObserver debe ser usado dentro de un IntersectionObserverProvider",
    );
  }

  return context;
};
