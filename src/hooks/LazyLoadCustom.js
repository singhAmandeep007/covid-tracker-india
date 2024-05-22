import React, { useState, useRef, useEffect } from "react";

export function useIntersectionObserver(ref, options, once) {
  const [element, setElement] = useState(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observer = useRef(null);

  const cleanOb = () => {
    if (observer.current) {
      observer.current.disconnect();
    }
  };

  useEffect(() => {
    setElement(ref.current);
  }, [ref]);

  useEffect(() => {
    if (!element) return;
    cleanOb();
    const ob = (observer.current = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;
        if (!once) {
          setIsIntersecting(isElementIntersecting);
        } else if (once && !isIntersecting && isElementIntersecting) {
          setIsIntersecting(isElementIntersecting);
          cleanOb();
        }
      },
      { ...options }
    ));
    ob.observe(element);
    return () => {
      cleanOb();
    };
  }, [element, options]);

  return isIntersecting;
}

export function LazyLoadCustom(props) {
  const { tag = "div", children, style, className } = props;
  const Tag = tag;
  const ref = useRef(null);

  const isIntersecting = useIntersectionObserver(
    ref,
    {
      root: props.root ?? null,
      threshold: props.threshold ?? 0,
      rootMargin: props.rootMargin,
    },
    props.once
  );

  return (
    <Tag
      ref={ref}
      style={style}
      className={className}
      children={isIntersecting ? children : null}
    />
  );
}
