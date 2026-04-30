"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.mainPageContent}>
          <p className={styles.introText}>
            I’m a fullstack developer with a strong focus on building scalable RESTful APIs and well-structured backend systems.
            I pay close attention to detail, ensuring that the data and logic behind every application are thoughtfully designed and reliable.
          </p>
          <p className={styles.introText}>
            I enjoy shaping how systems communicate—designing APIs that are clear, consistent, and easy to work with.
            My approach centers on writing clean, maintainable code while keeping performance and long-term scalability in mind.
          </p>
          <p className={styles.introText}>
            Although I’m comfortable across the stack, I’m most engaged when working on the backend—translating complex ideas
            into efficient services and structured data flows that support seamless user experiences.
          </p>
          <p className={styles.introText}>
            When I’m not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
          </p>
        </div>
      </main>
    </div>
  );
}
