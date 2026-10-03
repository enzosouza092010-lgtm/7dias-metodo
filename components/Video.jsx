"use client";
import { useState } from "react";

function embed(url) {
  const y = url.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/);
  if (y) return `https://www.youtube.com/embed/${y[1]}?autoplay=1&rel=0`;
  const v = url.match(/vimeo\.com\/(\d+)/);
  if (v) return `https://player.vimeo.com/video/${v[1]}?autoplay=1`;
  return null;
}

export default function Video({ url }) {
  const [on, setOn] = useState(false);
  const src = url ? embed(url) : null;
  const isFile = url && /\.(mp4|webm)$/i.test(url);

  if (on && src) return <div className="vid"><iframe src={src} title="Vídeo explicativo" allow="autoplay; fullscreen; encrypted-media" allowFullScreen /></div>;
  if (on && isFile) return <div className="vid"><video src={url} controls autoPlay playsInline /></div>;

  return (
    <button className="vid poster" onClick={() => url && setOn(true)} aria-label={url ? "Assistir ao vídeo" : "Vídeo em breve"}>
      <svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id="vs" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#3a1f5c" /><stop offset=".55" stopColor="#c8642b" /><stop offset="1" stopColor="#ffb347" /></linearGradient>
        </defs>
        <rect width="800" height="450" fill="url(#vs)" />
        <circle cx="560" cy="250" r="42" fill="#fff1c9" />
        <path d="M0 300L140 230L260 290L420 200L560 280L700 220L800 270V450H0Z" fill="#1b1030" opacity=".85" />
        <path d="M330 450Q395 380 420 300Q440 380 520 450Z" fill="#0b0814" />
      </svg>
      <span className="play"><i /><b /></span>
      <span className="hand">7 dias podem mudar tudo!</span>
      {!url && <span className="soon">Vídeo em breve</span>}
    </button>
  );
}
