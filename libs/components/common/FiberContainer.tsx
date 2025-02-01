import { useState } from 'react';
import { Box, Button, Typography, IconButton } from '@mui/material';
import Image from 'next/image';
import { ArrowForward, ArrowBack } from '@mui/icons-material';
import { height, width } from '@mui/system';

const FiberContainer = () => {
  const images = [
    { src: '/img/banner/heac.jpg', title: 'Event 1', description: 'Choose Your Car with Special Discounts!' },
    { src: '/img/banner/-.avif', title: 'Event 2', description: 'Buy a Car Today, Make Your Future More Comfortable!' },
    { src: '/img/banner/o.webp', title: 'Event 3', description: 'Choose a New Car for Yourself – With Special Offers!' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the previous slide
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Move to the next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Box sx={{ position: 'relative', display: 'flex', width: '100%', height: '550px', overflow: 'hidden' }}>
      {/* Image container */}
      <Box sx={{
        display: 'flex',
        transition: 'transform 0.5s ease-in-out',  // Smooth sliding effect
        transform: `translateX(-${currentIndex * 100}%)`, // Move the container based on the current index
        width: `${images.length * 100}%`, // Make the container width equal to all images combined
        height: '100%'
      }}>
        {images.map((image, index) => (
          <Box key={index} sx={{ flex: '0 0 100%', position: 'relative' }}>
            <Image
              src={image.src}
              alt={image.title}
              layout="responsive"
              width={1000}
              height={500}
              objectFit="cover"
            />

            {/* Text Overlay on Image */}
            <Box sx={{
              position: 'absolute',
              top: '50%',
              left: '58%',
			  width: '50%',
			  height: '40%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              textAlign: 'center',
              zIndex: 10,
              background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for text visibility
              padding: '10px',
              borderRadius: '5px'
            }}>
              <Typography variant="h4" sx={{ marginBottom: '16px', fontWeight: 'bold', width: '23%' }}>
                {image.title}
              </Typography>
              <Typography variant="h6" sx={{ marginBottom: '24px' }}>
                {image.description}
              </Typography>
				<a href='/property'>
              <Button variant="contained">
			     Get to know
              </Button>
			    </a>
            </Box>
          </Box>
        ))}
      </Box>
	  {/* #ebede7 */}
      {/* Navigation Buttons */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '16px',
          transform: 'translateY(-50%)',
		  marginLeft: '16%',
          zIndex: 20,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white'
        }}
      >
        <ArrowBack />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          top: '50%',
          right: '16px',
          transform: 'translateY(-50%)',
          zIndex: 20,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white'
        }}
      >
        <ArrowForward />
      </IconButton>
    </Box>
  );
};

export default function HomePage() {
  return (
    <div>
      <FiberContainer />
    </div>
  );
}
