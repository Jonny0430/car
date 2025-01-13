import { useState, useEffect } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { ArrowForward, ArrowBack } from '@mui/icons-material'; // MUI ikonkalar
import 'swiper/swiper-bundle.min.css'; // Swiper uchun CSS
import { Swiper, SwiperSlide } from 'swiper/react'; // Swiper komponentlari
import { disconnect } from 'process';

const ImageGallery = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Komponent faqat client-side da render bo'lishi uchun
  }, []);

  if (!isMounted) return null; // Agar client-sideda bo'lmasa, componentni render qilmang

  const images = [
    { id: 1, src: '../img/car/cars.jpeg', title:"" , disconnect:"" },
    { id: 2, src: '../img/car/cars.webp' },
    { id: 3, src: '../img/car/cars1.webp' },
    { id: 4, src: '../img/car/cars2.webp' },
    {id: 5, src: '../img/car/cars3.webp' },
    {id: 6, src: '../img/car/cars4.webp' },
  ];

  return (
    <Box sx={{ padding: 2 }}>
      <Swiper
        spaceBetween={20}
        slidesPerView={6} // 4 ta karta bir qatorda sig'adi
        loop={true} // Slayderni aylanma qilish
        autoplay={{
          delay: 30000000, // 3 soniya o'zgartirish
          disableOnInteraction: false, // Foydalanuvchi harakatlanishini to'xtatmaslik
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: 2 }}>
              <img
                src={image.src}
                alt={image.src}
                style={{
                  width: '100%',
                  height: '250px', // Maximal height for uniformity
                  objectFit: 'cover', // Ensures the images are not distorted and fit the container
                  borderRadius: '8px',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'rgba(0, 0, 0, 0.5)',
                  padding: '10px',
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                <Typography variant="h6">{image.title}</Typography>
                <Typography variant="body2">{image.disconnect}</Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination"></div>
    </Box>
  );
};

export default ImageGallery;
