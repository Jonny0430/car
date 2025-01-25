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
    { id: 2, src: 'https://png.pngtree.com/png-clipart/20241204/original/pngtree-red-sports-car-png-image_17560805.png' },
    { id: 3, src: 'https://hips.hearstapps.com/hmg-prod/images/2023-lamborghini-huracan-sterrato118-6467c8ee00627.jpg?crop=0.670xw:1.00xh;0.115xw,0&resize=1200:*' },
    { id: 4, src: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/2023/03_29_revuelto/gate_models_og_01.jpg' },
    { id: 5, src: 'https://www.ford.com/is/image/content/dam/na/ford/en_us/images/mustang/2025/dm/25_FRD_MST_60983.tif?croppathe=16x9&wid=1440&fmt=webp' },
    { id: 6, src: 'https://carwow-uk-wp-2.imgix.net/2023-Koenigsegg-Jesko-Absolut-front.png?auto=format&cs=tinysrgb&fit=crop&h=800&ixlib=rb-1.1.0&q=60&w=1600' },
  ];

  return (
    <Box sx={{ padding: 2 }}>
      <Swiper
        spaceBetween={20}
        slidesPerView={6} // Default for larger screens
        loop={true} // Make the slider loop
        autoplay={{
          delay: 3000, // Adjust autoplay delay to 3 seconds
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
                  height: '125px', // Maximal height for uniformity
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
