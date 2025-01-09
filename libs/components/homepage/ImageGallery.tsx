import { useState, useEffect } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { ArrowForward, ArrowBack } from '@mui/icons-material'; // MUI ikonkalar
import 'swiper/swiper-bundle.min.css'; // Swiper uchun CSS
import { Swiper, SwiperSlide } from 'swiper/react'; // Swiper komponentlari

const ImageGallery = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Komponent faqat client-side da render bo'lishi uchun
  }, []);

  if (!isMounted) return null; // Agar client-sideda bo'lmasa, componentni render qilmang

  const images = [
    { id: 1, src: 'https://img.freepik.com/free-photo/natures-beauty-captured-colorful-flower-close-up-generative-ai_188544-8593.jpg', title: 'Beautiful Lights', description: 'Amazing light landscapes that inspire.' },
    { id: 2, src: 'https://img.freepik.com/free-photo/summer-daisy-beauty-petal-close-up-purple-outdoors-generative-ai_188544-8633.jpg?t=st=1735465294~exp=1735468894~hmac=9c6d4dcfd077554087a26e5ab61c539f74e1f9acc3e2159e22015b722eb43d07', title: 'Nature\'s Beauty', description: 'Explore the serenity of nature\'s landscapes.' },
    { id: 3, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp49e2wFfxSk_8x602eai6lAUkG1yNnvOOSdD8LpX85P3llc1T_prmtmzkR2xoptNI6y0&usqp=CAU', title: 'Majestic Mountains', description: 'Witness the grandeur of towering peaks.' },
    { id: 4, src: 'https://www.aumanns.com.au/wp-content/uploads/2022/12/cottagecore-garden.jpg', description: 'Step into the magical world of forests.' },
    {id: 5, src: 'https://english.news.cn/20230109/8642abdaeba64a30951723c7deaaf0d6/25286576f20b4930a286b1be6594f56f.jpg', title: 'Enchanted Forest', description: 'Step into the magical world of forests.' },
    {id: 6, src: 'https://www.southernliving.com/thmb/xFlQn020pc1NJAl4ksr7_o_B5u4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-598083938-1-22dab883ff2a43d8b2751d9f363f2d5d.jpg', title: 'Enchanted Forest', description: 'Step into the magical world of forests.' },
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
                alt={image.title}
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
                <Typography variant="body2">{image.description}</Typography>
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
