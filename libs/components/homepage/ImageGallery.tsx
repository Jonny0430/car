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
    { id: 1, src: 'https://mclaren.scene7.com/is/image/mclaren/07_GT_Front_34_Dynamic-1:crop-16x9?wid=1920&hei=1080', title:"" , disconnect:"" },
    { id: 2, src: 'https://storage.googleapis.com/pod_public/750/166579.jpg' },
    { id: 3, src: 'https://hips.hearstapps.com/hmg-prod/images/2023-lamborghini-huracan-sterrato118-6467c8ee00627.jpg?crop=0.670xw:1.00xh;0.115xw,0&resize=1200:*' },
    { id: 4, src: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/2023/03_29_revuelto/gate_models_og_01.jpg' },
    {id: 5, src: 'https://www.ford.com/is/image/content/dam/na/ford/en_us/images/mustang/2025/dm/25_FRD_MST_60983.tif?croppathe=16x9&wid=1440&fmt=webp' },
    {id: 6, src: 'https://carwow-uk-wp-2.imgix.net/2023-Koenigsegg-Jesko-Absolut-front.png?auto=format&cs=tinysrgb&fit=crop&h=800&ixlib=rb-1.1.0&q=60&w=1600' },
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
