"use client";

import { useEffect, useRef } from "react";
import styles from "./NoiseCanvas.module.css";

export default function NoiseCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    function draw() {
      const { width, height } = canvas;
      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;

      for (let y = 0; y < height; y += 2) {
        for (let x = 0; x < width; x += 2) {
          const i = (y * width + x) * 4;

          // Scanline: every other row is slightly dimmer
          const scanline = y % 4 === 0 ? 1 : 0.5;

          const noise = Math.random();
          // Only render bright pixels sparsely -> threshold keeps it subtle
          const visible = noise > 0.85 ? 1 : 0;

          data[i] = 200 * visible * scanline; // R -> red tint
          data[i + 1] = 20 * visible * scanline;  // G -> low green
          data[i + 2] = 20 * visible * scanline;  // B -> low blue
          data[i + 3] = visible ? 120 : 0;  // A -> only paint visible pixels
        }
      }

      ctx.putImageData(imageData, 0, 0);
    }

    const interval = setInterval(draw, 120);

    // Cleanup on unmount
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className={styles.bgContainer}>
      <canvas ref={canvasRef} className={styles.bgCanvas} />
      <div className={styles.bgOverlay} />
    </div>
  );
}