import { useRef, useEffect } from "preact/hooks";
import BlazeSlider, { type BlazeConfig } from "blaze-slider";

export function useBlazeSlider(config: BlazeConfig) {
  const sliderRef = useRef<BlazeSlider>(null);
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // if not already initialized
    if (!sliderRef.current && elRef.current) {
      sliderRef.current = new BlazeSlider(elRef.current, config);
    }
  }, []);

  return { elRef };
}
