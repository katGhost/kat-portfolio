"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    // console.log(ctx);

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    function draw() {
      const { width, height } = canvas;

      // Create image data
      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;

      for (let y = 0; y < height; y += 2) {
        for (let x = 0; x < width; x += 2) {
          const i = (y * width + x) * 4;

          // Base noise
          const noise = Math.random() * 255;

          // Halftone effect (grid-based threshold)
          const pattern = ((x % 8) + (y % 8)) / 12;
          const value = noise > pattern * 255 ? 255 : 0;

          data[i] = value;  //red
          data[i + 1] = 255;  //green
          data[i + 2] = 0;  //blue
          data[i + 3] = 150; // Alpha --> low for subtlety and high for more loudness
        }
      }

      ctx.putImageData(imageData, 0, 0);
    }

    // draw();
    setInterval(draw, 100);
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.bgContainer}>
            <canvas className={styles.bgCanvas}></canvas>
            <div className={styles.bgOverlay}></div>
        </div>
      </main>
    </div>
  );
}
