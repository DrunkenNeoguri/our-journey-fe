import { useEffect, useState } from 'react';

import type { Carousel } from '@/pages/main/component/banner-carousel';

export const useChangeCarousel = (carouselData: Carousel[]) => {
  const [currentId, setCurrentId] = useState(carouselData[0].bannerId);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentOrder = carouselData.findIndex((item) => item.bannerId === currentId);
      const nextOrder = (currentOrder + 1) % carouselData.length;
      const nextBannerId = carouselData[nextOrder].bannerId;

      const nextCard = document.getElementById(nextBannerId);
      if (nextCard) {
        nextCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      setCurrentId(nextBannerId);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentId, carouselData]);

  return { currentId, setCurrentId };
};
