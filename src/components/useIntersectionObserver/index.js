import { useEffect } from "react";

const useIntersectionObserver = (ref, callback, options) => {
  const defaultCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        ref.current.play();
      } else {
        ref.current.pause();
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      callback || defaultCallback,
      options
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, callback, options]);
};

export default useIntersectionObserver;
