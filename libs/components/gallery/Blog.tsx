import { Box, Stack, Grid, Typography, Card, CardContent } from "@mui/material";
import React, { useEffect, useState } from "react";
import { keyframes } from "@mui/system"; // For animation

// Define a fade-in animation using keyframes
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default function Blog() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Set to true after the component mounts for animations to work
  }, []);

  const images = [
    { id: 1, src: 'https://www.gazeta.uz/sp/24139844/img/tild3564-3237-4930-a434-633763393633__img_6354-1920.jpg', title: "Title 1", description: "These are classic Lada cars, with the green model being a modified version." },
    { id: 2, src: 'https://www.gazeta.uz/sp/24139844/img/tild3032-6237-4261-a131-353139656631__29103531_20656146567.jpg', title: "Title 2", description: "This is a Jaguar XJ, a luxury sedan known for its elegance and performance." },
    { id: 3, src: 'https://daryo.uz/cache/2017/07/8730a53fb4b75713be0ec9d4cb91ddaa84c197b6-680x453.jpg', title: "Title 3", description: "This is a 1915 Ford Model T, one of the first mass-produced cars." },
    { id: 4, src: 'https://www.avtotachki.com/wp-content/uploads/2020/11/honda_accord_721767.jpg', title: "Title 4", description: "This is a 1970s Honda Civic, a compact car that became a symbol of reliability." },
    { id: 5, src: 'https://storage.kun.uz/source/9/k84CF_bU1fZQZVMjepWb9-zCBnCUTvde.jpg', title: "Title 5", description: "This is a 1970s Honda Civic, a compact and affordable car." },
    { id: 6, src: 'https://www.gazeta.uz/media/img/2022/12/zBIiy316708374410650_b.jpg', title: "Title 6", description: "This is a 1910 Rolls-Royce Silver Ghost, a luxury car known for its elegance." },
    { id: 7, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREkr2O-YgnogKl_PFss2vofbBByx6DfqEz85D0r4vPEMsZ8OIZIq3Nt10cUbXt5a5OHeo&usqp=CAU', title: "Title 7", description: "This is a 1930 Duesenberg Model J, a luxury car known for its elegant design." },
    { id: 8, src: 'https://daryo.uz/cache/2021/10/9B9A7286-1300x867.jpg', title: "Title 8", description: "This is the Opel Super 6 model, produced in the 1930s." },
    { id: 9, src: 'https://choynakningqopqogi.uz/wp-content/uploads/2024/09/image-37-edited.png', title: "Title 9", description: "This is a Bentley T-Series model produced in the 1970s." },
  ];

  return (
    <Stack className="container homepage" spacing={3}>
      <Box className="container homepage" sx={{ maxWidth: '1300px', margin: '0 auto', background: '#f6f6f6', padding: 3 }}>
        <Grid container spacing={3} sx={{ background: '#f6f6f6' }}>
          {images.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={image.id}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: 3,
                  marginBottom: 2,
                  animation: `${fadeIn} 1s ease-out ${index * 0.2}s`, // Apply fade-in animation with a delay
                }}
              >
                <a href="/property" className="h-entry">
                  <Box
                    className="featured-img"
                    sx={{
                      backgroundImage: `url(${image.src})`,
                      backgroundSize: "cover",
                      height: 200,
                      borderTopLeftRadius: 3,
                      borderTopRightRadius: 3,
                    }}
                  ></Box>
                </a>
                <CardContent>
                  <Typography variant="h6">{image.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {image.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
}
