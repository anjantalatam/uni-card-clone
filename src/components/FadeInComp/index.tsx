import React from "react";

export default function FadeInSection(props: JSX.Element["props"]) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!isVisible) {
          setVisible(entry.isIntersecting);
        }
      });
    });
    observer.observe(domRef.current as HTMLDivElement);
  }, [isVisible]);

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}>
      {props.children}
    </div>
  );
}
