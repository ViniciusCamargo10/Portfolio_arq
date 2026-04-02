import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Testimonial {
  text: string;
  author: string;
  location: string;
  project?: string;
}

interface DepoimentoCardProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export function DepoimentoCard({
  testimonials,
  autoPlay = true,
  autoPlayInterval = 5000,
}: DepoimentoCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (autoPlay && !isPaused) {
      intervalRef.current = setInterval(goToNext, autoPlayInterval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoPlay, isPaused, autoPlayInterval, currentIndex]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      goToPrev();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    }
  };

  return (
    <div
      className="relative bg-gray-50 rounded-lg p-8 md:p-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Carrossel de depoimentos"
    >
      <Quote className="w-12 h-12 text-[var(--color-primary)] opacity-20 mb-4" />

      <div className="min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-lg md:text-xl text-gray-700 mb-6 italic">
              "{testimonials[currentIndex].text}"
            </p>
            <div>
              <p className="font-semibold text-gray-900">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-sm text-gray-600">
                {testimonials[currentIndex].location}
                {testimonials[currentIndex].project && ` • ${testimonials[currentIndex].project}`}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <div className="flex items-center gap-4 mt-8">
        <button
          onClick={goToPrev}
          className="p-2 rounded-full bg-white hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          aria-label="Depoimento anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] ${
                index === currentIndex
                  ? 'bg-[var(--color-primary)] w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ir para depoimento ${index + 1}`}
              aria-current={index === currentIndex}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="p-2 rounded-full bg-white hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          aria-label="Próximo depoimento"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}