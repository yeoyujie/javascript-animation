import { useEffect } from "react";

const useIntersectionObserver = (ref, callback, options) => {
  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, callback, options]);
};

export default useIntersectionObserver;
