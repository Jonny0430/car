// import React from "react";
// import { Box, Container, Grid, Card, CardContent, Typography, Button, Stack } from "@mui/material";

// // Kategoriya ma'lumotlari
// const categories = [
//   { title: "Mercedes-Benz", image: "../img/news/car.jpg" },
//   { title: "Atirgullar", image: "https://i.pinimg.com/736x/90/40/03/9040034f5d635f46a4fb92128964fcca.jpg" },
//   { title: "Boshqa tabiiy gullar", image: "https://i.pinimg.com/736x/90/40/03/9040034f5d635f46a4fb92128964fcca.jpg" },
//   { title: "Chinnigullar", image: "https://i.pinimg.com/736x/90/40/03/9040034f5d635f46a4fb92128964fcca.jpg" },
// ];

// const LatestNews = () => {
//   return (
//     <Container maxWidth="lg">
//       <Grid container spacing={4} justifyContent="center">
//         {categories.map((category, index) => (
//           <Grid item xs={12} sm={6} md={3} key={index}>
//             <Card className="card-container">
//               {/* Background image */}
//               <Box
//                 className="card-image"
//                 sx={{ backgroundImage: `url(${category.image})` }}
//               />
//               {/* Card content */}
//               <CardContent className="card-content">
//                 <Typography variant="h6" className="card-title">
//                   {category.title}
//                 </Typography>
//                 <Button variant="contained" className="learn-more-btn">
//                   Learn More
//                 </Button>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//       <Stack direction="row" justifyContent="center" className="button-container">
//       </Stack>
//     </Container>
//   );
// };

// export default LatestNews;


import { Box, Container, Grid, Card, CardContent, Typography, Button, Stack } from "@mui/material";

// Kategoriya ma'lumotlari
const categories = [
  { title: "Mercedes-Benz ", image: '../img/news/mers.webp' }, // Use the uploaded image
  { title: "Luxury", image: "../img/news/luxury.webp" },
  { title: "Electric", image: "../img/news/electric.webp" },
  { title: "Sports", image: "../img/news/sports.webp" },
];

const LatestNews = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} justifyContent="center">
        {categories.map((category, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card className="card-container">
              {/* Background image */}
              <Box
                className="card-image"
                sx={{
                  backgroundImage: `url(${category.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: 200, // Set the height for the background image
                }}
              />
              {/* Card content */}
              <CardContent className="card-content">
                <Typography variant="h6" className="card-title">
                  {category.title}
                </Typography>
                <Button variant="contained" className="learn-more-btn"  href="/property">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Stack direction="row" justifyContent="center" className="button-container">
      </Stack>
    </Container>
  );
};

export default LatestNews;
