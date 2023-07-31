import { useEffect } from "react";

// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
const useIntersectionObserver = (ref, callback, options) => {
  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, callback, options]);
};

export default useIntersectionObserver;
