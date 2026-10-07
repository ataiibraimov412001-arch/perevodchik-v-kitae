"use client";

import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

interface VideoPlayerProps {
  src: string;
  portrait?: boolean;
}

export function VideoPlayer({ src, portrait }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const [levels, setLevels] = useState<{ index: number; height: number }[]>([]);
  const [current, setCurrent] = useState<number>(-1);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls({ autoStartLoad: true });
      hlsRef.current = hls;
      hls.loadSource(src);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        const lv =
          hls?.levels.map((l, i) => ({ index: i, height: l.height })) ?? [];
        setLevels(lv);

        if (hls && hls.levels.length > 0) {
          const highest = hls.levels.length - 1;
          hls.currentLevel = highest;
          setCurrent(highest);
        }
      });

      hls.on(Hls.Events.LEVEL_SWITCHED, (_e, data) => {
        setCurrent(data.level);
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
    }

    return () => {
      hls?.destroy();
      hlsRef.current = null;
    };
  }, [src]);

  function setQuality(level: number) {
    const hls = hlsRef.current;
    if (hls) {
      hls.currentLevel = level;
    }
    setCurrent(level);
  }

  return (
    <div className="relative">
      <video
        ref={videoRef}
        controls
        playsInline
        preload="metadata"
        className={`w-full object-contain ${
          portrait ? "aspect-[9/16]" : "aspect-video"
        }`}
      />

      {levels.length > 1 && (
        <div className="absolute bottom-3 right-3 z-10 flex flex-col items-end gap-1">
          {[{ index: -1, height: 0 }, ...levels].map((l) => (
            <button
              key={l.index}
              type="button"
              onClick={() => setQuality(l.index)}
              className={`rounded px-2 py-1 text-xs font-semibold transition-colors ${
                current === l.index
                  ? "bg-white text-black"
                  : "bg-black/60 text-white hover:bg-black/80"
              }`}
            >
              {l.index === -1 ? "Авто" : `${l.height}p`}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
