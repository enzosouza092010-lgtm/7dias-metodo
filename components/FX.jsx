"use client";
import { useEffect } from "react";

export default function FX() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.18 }
    );
    document.querySelectorAll(".rv").forEach((el) => io.observe(el));
    const root = document.documentElement;
    const on = () => {
      const y = window.scrollY, h = root.scrollHeight - window.innerHeight;
      root.style.setProperty("--sy", Math.min(y, 1000));
      root.style.setProperty("--p", h > 0 ? y / h : 0);
      document.body.classList.toggle("show-bar", y > 700);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => { io.disconnect(); window.removeEventListener("scroll", on); };
  }, []);
  return <div className="prog" aria-hidden="true" />;
}
