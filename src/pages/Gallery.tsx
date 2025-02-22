import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
  '/path/to/image1.jpg',
  '/path/to/image2.jpg',
  '/path/to/image3.jpg',
  // Add more image paths as needed
];

const Gallery = () => {
  const galleryRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const galleryElement = galleryRef.current;
    if (galleryElement) {
      gsap.fromTo(
        galleryElement.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: galleryElement,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  return (
    <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {images.map((src, index) => (
        <div key={index} className="overflow-hidden rounded-lg shadow-lg">
          <img src={src} alt={`Gallery Image ${index + 1}`} className="w-full h-auto" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;