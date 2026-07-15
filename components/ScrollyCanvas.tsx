'use client';

import { useState, useEffect, useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';

const TOTAL_FRAMES = 89; // Adjust based on your actual frame count

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  const { scrollYProgress } = useScroll();
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const imageArray: HTMLImageElement[] = [];
      let loadedCount = 0;

      // Create an array of promises for loading images
      const loadPromises = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
        return new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            loadedCount++;
            setProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
            resolve(img);
          };
          img.onerror = reject;
          // Replace with your actual image path pattern
          img.src = `/sequence/frame-${i.toString().padStart(3, '0')}.webp`;
          imageArray[i] = img;
        });
      });

      try {
        await Promise.all(loadPromises);
        setImages(imageArray);
        setLoaded(true);
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };

    preloadImages();
  }, []);

  // Draw on canvas when frameIndex changes
  useEffect(() => {
    const unsubscribe = frameIndex.on("change", (latest) => {
      if (!loaded || !canvasRef.current || images.length === 0) return;

      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const index = Math.floor(latest);
      const clampedIndex = Math.max(0, Math.min(index, images.length - 1));

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw image with object-fit: cover behavior
      const img = images[clampedIndex];
      if (!img) return;

      const canvasAspect = canvas.width / canvas.height;
      const imageAspect = img.width / img.height;

      let renderWidth = canvas.width;
      let renderHeight = canvas.height;
      let offsetX = 0;
      let offsetY = 0;

      if (imageAspect > canvasAspect) {
        // Image is wider than canvas
        renderWidth = canvas.height * imageAspect;
        offsetX = (canvas.width - renderWidth) / 2;
      } else {
        // Image is taller than canvas
        renderHeight = canvas.width / imageAspect;
        offsetY = (canvas.height - renderHeight) / 2;
      }

      ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
    });

    return () => unsubscribe();
  }, [frameIndex, images, loaded]);

  // Handle canvas resize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-screen">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-20">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white font-bold">Loading sequence... {progress}%</p>
          </div>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover"
      />
    </div>
  );
}