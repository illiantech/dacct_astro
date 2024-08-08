import { useEffect, useRef, useState } from "preact/hooks";
import { useIntersectionObserver } from "./InterObsProvider";

export const Auxiliar = () => {
  const ref = useRef<HTMLElement>(null);
  const [intersecting, setIntersecting] = useState<boolean>(false);
  const { observe, unobserve, entries } = useIntersectionObserver();

  useEffect(() => {
    if (ref.current) observe(ref.current);

    return () => {
      if (ref.current) unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (entries.length > 0) {
      const entry = entries.find((entry) => entry.target === ref.current);
      if (entry) setIntersecting(entry.isIntersecting);
      console.log(intersecting);
    }
  }, [entries]);

  return (
    <section ref={ref}>
      <h1>holaa</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem
        accusamus nesciunt veniam dolorem magnam repellendus minima vel, quaerat
        voluptatibus libero perspiciatis laboriosam numquam doloremque
        laudantium reprehenderit voluptatem soluta cupiditate modi!
      </p>
    </section>
  );
};
