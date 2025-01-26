import { useState, useEffect } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { ArrowForward, ArrowBack } from '@mui/icons-material'; // MUI icons
import 'swiper/swiper-bundle.min.css'; // Swiper CSS
import { Swiper, SwiperSlide } from 'swiper/react'; // Swiper components

const ImageLogo = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensures the component is only rendered client-side
  }, []);

  if (!isMounted) return null; // Do not render the component if not client-side

  const images = [
    { id: 1, src: 'https://logodix.com/logo/573.png', title:"" , disconnect:"" },
    { id: 2, src: 'https://images.seeklogo.com/logo-png/5/2/ford-logo-png_seeklogo-56581.png' },
    { id: 3, src: 'https://www.freeiconspng.com/uploads/toyota-logo-png-25.png' },
    { id: 4, src: 'https://logos-world.net/wp-content/uploads/2021/03/Chevrolet-Logo.png' },
    { id: 5, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfTfVzycyGX_xmb0B5ibo26ncoNJATPCSeyD178KQ2V-4i6d7ong1A2vPtXXJmgX8XTqw&usqp=CAU' },
    { id: 6, src: 'https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/660/kia-logo-new-512.png' },
  ];

  return (
    <Box sx={{ padding: 2 }}>
      <Swiper
        spaceBetween={20}
        slidesPerView={6} // Default for larger screens
        loop={true} // Make the slider loop
        autoplay={{
          delay: 7000, // Adjust autoplay delay to 3 seconds
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
                  width: '74%',
                  height: '110px', // Maximal height for uniformity
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

export default ImageLogo;
