import { Box, Container, Grid, Card, CardContent, Typography, Button, Stack } from "@mui/material";

// Kategoriya ma'lumotlari
const categories = [
  { title: "Mercedes-Benz ", image: 'https://hips.hearstapps.com/hmg-prod/images/rt-mercedes-benz-cpo-1-1531414981.jpg' }, // Use the uploaded image
  { title: "Luxury", image: "https://static1.topspeedimages.com/wordpress/wp-content/uploads/2023/09/2023-lexus-es-250-awd-luxury-side.jpg" },
  { title: "Electric", image: "https://ev.aaa.com/wp-content/uploads/2024/09/Large-59604-2025IONIQ5N-768x512.jpg" },
  { title: "Sports", image: "https://content.presspage.com/uploads/1523/d935c064-c73e-4d60-a6ce-a66d3808e8ae/c800_toyotaft-seext01.jpg?32807" },
];

const LatestNews = () => {
  return (
    <Container maxWidth="lg" sx={{background: "#f6f6f6"}}>
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
