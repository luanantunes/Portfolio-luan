import { useEffect, useRef } from "react";

export default function CursorGlow() {

  const glow = useRef();

  useEffect(() => {

    const move = (e) => {

      if (!glow.current) return;

      glow.current.animate(
        {
          transform: `translate(${e.clientX-180}px,${
            e.clientY-180
          }px)`
        },
        {
          duration:300,
          fill:"forwards",
          easing:"ease-out"
        }
      );

    };

    window.addEventListener("mousemove",move);

    return ()=>window.removeEventListener("mousemove",move);

  },[]);

  return (

    <div

      ref={glow}

      className="
      fixed
      top-0
      left-0
      w-[360px]
      h-[360px]
      rounded-full
      pointer-events-none
      -z-10
      "

      style={{

        background:
          "radial-gradient(circle, rgba(99,102,241,.22), transparent 70%)",

        filter:"blur(60px)",

        willChange:"transform"

      }}

    />

  );

}