import { useState, useEffect } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { ArrowForward, ArrowBack } from '@mui/icons-material'; // MUI icons
import 'swiper/swiper-bundle.min.css'; // Swiper CSS
import { Swiper, SwiperSlide } from 'swiper/react'; // Swiper components

const ImageGallery = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensures the component is only rendered client-side
  }, []);

  if (!isMounted) return null; // Do not render the component if not client-side

  const images = [
    { id: 1, src: 'https://pngimg.com/d/audi_PNG99491.png', title:"" , disconnect:"" },
    { id: 2, src: 'https://i.pinimg.com/736x/05/02/da/0502da25d3a9640ad861574a516a4611.jpg' },
    { id: 3, src: 'https://pngimg.com/d/mustang_PNG3.png' },
    { id: 4, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAw_PyRIB4xOJxY0vW9lnYk5mYejmAvuo3AQ&s' },
    { id: 5, src: 'https://images.carandbike.com/car-images/colors/jaguar/f-type/jaguar-f-type-firenze-red.png?v=1589437010' },
    { id: 6, src: 'https://pngimg.com/d/bugatti_PNG17.png' },
  ];

  return (
    <Box sx={{ padding: 2 }}>
      <Swiper
        spaceBetween={20}
        slidesPerView={6} // Default for larger screens
        loop={true} // Make the slider loop
        autoplay={{
          delay: 6000, // Adjust autoplay delay to 3 seconds
          disableOnInteraction: false, // Keep autoplay even on interaction
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
          1300: { slidesPerView: 4 }, // Adjust for 1300px screen width
        }}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: 2 }}>
              <img
                src={image.src}
                alt={image.src}
                style={{
                  width: '65%',
                  height: '105px', // Maximal height for uniformity
                  objectFit: 'cover', // Ensures images fit the container without distortion
                  borderRadius: '8px',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  padding: '2px',
                  left: 0,
                  right: "12px",
                  margin: "23px",
                  background: 'rgba(0, 0, 0, 0.5)',
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
