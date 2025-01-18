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
