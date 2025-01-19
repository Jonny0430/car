import { Box, Stack, Grid, Typography, Card, CardContent } from "@mui/material";
import React from "react";

export default function Blog() {
  return (
    <Stack className="container homepage" spacing={3}>
      <Box className="container homepag" sx={{background: '#f6f6f6'}}>
        <Grid container spacing={3} sx={{background: '#f6f6f6'}}>
          {/* First Column */}
          <Grid item xs={12} sm={6} md={4} sx={{background: '#f6f6f6'}}>
            <Card sx={{ borderRadius: 3, boxShadow: 3, marginBottom: 2 }}>
              <a href="/property" className="h-entry">
                <Box
                  className="featured-img"
                  sx={{
                    backgroundImage:
                      "url(https://www.gazeta.uz/sp/24139844/img/tild3564-3237-4930-a434-633763393633__img_6354-1920.jpg)",
                    backgroundSize: "cover",
                    height: 200,
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                  }}
                ></Box>
              </a>
              <CardContent >
                <Typography variant="h6">Title 1</Typography>
                <Typography variant="body2" color="text.secondary">
                These are classic Lada cars, with the green model being a modified version. 
                The Lada 2101 series, popular in the Soviet Union and beyond, is known for its simplicity and durability.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Second Column */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: 3, boxShadow: 3, marginBottom: 2, background: '#f6f6f6' }}>
              <a href="/property" className="h-entry">
                <Box
                  className="featured-img"
                  sx={{
                    backgroundImage:
                      "url('https://www.gazeta.uz/sp/24139844/img/tild3032-6237-4261-a131-353139656631__29103531_20656146567.jpg')",
                    backgroundSize: "cover",
                    height: 200,
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                  }}
                ></Box>
              </a>
              <CardContent>
                <Typography variant="h6">Title 2</Typography>
                <Typography variant="body2" color="text.secondary">
                This is a Jaguar XJ, a luxury sedan known for its elegance and performance. 
                The car is a classic example of British automotive design, offering a smooth driving experience and stylish looks.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Third Column */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: 3, boxShadow: 3, marginBottom: 2 }}>
              <a href="/property" className="h-entry">
                <Box
                  className="featured-img"
                  sx={{
                    backgroundImage:
                      "url('https://i0.wp.com/s.auto.drom.ru/i24202/pubs/4483/47927/2469755.jpg')",
                    backgroundSize: "cover",
                    height: 200,
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                  }}
                ></Box>
              </a>
              <CardContent>
                <Typography variant="h6">Title 3</Typography>
                <Typography variant="body2" color="text.secondary">
                This is a modified 1940s Chevrolet truck, customized with unique features such as oversized tires and a distinctive rear setup, giving it a vintage yet sporty look. 
                It's a classic example of car customization, blending retro design with modern modifications.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Fourth Column */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: 3, boxShadow: 3, marginBottom: 2 }}>
              <a href="/property" className="h-entry">
                <Box
                  className="featured-img"
                  sx={{
                    backgroundImage:
                      "url('https://www.gazeta.uz/sp/24139844/img/tild3766-3266-4734-a537-663438356639__37414729_22465229187.jpg')",
                    backgroundSize: "cover",
                    height: 200,
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                  }}
                ></Box>
              </a>
              <CardContent>
                <Typography variant="h6">Title 4</Typography>
                <Typography variant="body2" color="text.secondary">
                This is a 1960s Volga GAZ-21, a Soviet-era car known for its stylish design and durability. 
                It became an iconic vehicle of the time, widely used for both personal and official purposes.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Fifth Column */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: 3, boxShadow: 3, marginBottom: 2 }}>
              <a href="/property" className="h-entry">
                <Box
                  className="featured-img"
                  sx={{
                    backgroundImage:
                      "url('https://daryo.uz/cache/2017/07/8730a53fb4b75713be0ec9d4cb91ddaa84c197b6-680x453.jpg')",
                    backgroundSize: "cover",
                    height: 200,
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                  }}
                ></Box>
              </a>
              <CardContent>
                <Typography variant="h6">Title 5</Typography>
                <Typography variant="body2" color="text.secondary">
                This is a 1915 Ford Model T, one of the first mass-produced cars. 
                It revolutionized the automobile industry by making cars affordable and accessible to the general public.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Sixth Column */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: 3, boxShadow: 3, marginBottom: 2 }}>
              <a href="/property" className="h-entry">
                <Box
                  className="featured-img"
                  sx={{
                    backgroundImage:
                      "url('https://www.avtotachki.com/wp-content/uploads/2020/11/honda_accord_721767.jpg')",
                    backgroundSize: "cover",
                    height: 200,
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                  }}
                ></Box>
              </a>
              <CardContent>
                <Typography variant="h6">Title 6</Typography>
                <Typography variant="body2" color="text.secondary">
                This is a 1970s Honda Civic, a compact car that became a symbol of reliability and fuel efficiency. 
                It was an influential model in Honda's growth, offering a practical solution for everyday transportation.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Seventh Column */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: 3, boxShadow: 3, marginBottom: 2 }}>
              <a href="/property" className="h-entry">
                <Box
                  className="featured-img"
                  sx={{
                    backgroundImage:
                      "url('https://storage.kun.uz/source/9/k84CF_bU1fZQZVMjepWb9-zCBnCUTvde.jpg')",
                    backgroundSize: "cover",
                    height: 200,
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                  }}
                ></Box>
              </a>
              <CardContent>
                <Typography variant="h6">Title 7</Typography>
                <Typography variant="body2" color="text.secondary">
                This is a 1970s Honda Civic, a compact and affordable car that became,
                 highly popular for its efficiency and reliability. It played a significant role in shaping the compact car market.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Eighth Column */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: 3, boxShadow: 3, marginBottom: 2 }}>
              <a href="/property" className="h-entry">
                <Box
                  className="featured-img"
                  sx={{
                    backgroundImage:
                      "url('https://www.gazeta.uz/media/img/2022/12/zBIiy316708374410650_b.jpg')",
                    backgroundSize: "cover",
                    height: 200,
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                  }}
                ></Box>
              </a>
              <CardContent>
                <Typography variant="h6">Title 8</Typography>
                <Typography variant="body2" color="text.secondary">
                This is a 1910 Rolls-Royce Silver Ghost, a luxury car known,
                 for its elegance and craftsmanship.
                 It was one of the most prestigious vehicles of its time,
                  offering exceptional performance and comfort.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: 3, boxShadow: 3, marginBottom: 2 }}>
              <a href="/property" className="h-entry">
                <Box
                  className="featured-img"
                  sx={{
                    backgroundImage:
                      "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvnK9f1hDMp0dQH-DHejMFm2RHKLeYv8H4XBuKPsQvDZfSZvxplAw3wrOBvKcuQDceQZ4&usqp=CAU')",
                    backgroundSize: "cover",
                    height: 200,
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                  }}
                ></Box>
              </a>
              <CardContent>
                <Typography variant="h6">Title 8</Typography>
                <Typography variant="body2" color="text.secondary">
                This is a Datsun Skyline C210, produced in the 1970s. It is known for its sporty design and was a popular choice among car enthusiasts. The model is part of the Skyline series, which became famous for its performance and legacy.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: 3, boxShadow: 3, marginBottom: 2 }}>
              <a href="/property" className="h-entry">
                <Box
                  className="featured-img"
                  sx={{
                    backgroundImage:
                      "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREkr2O-YgnogKl_PFss2vofbBByx6DfqEz85D0r4vPEMsZ8OIZIq3Nt10cUbXt5a5OHeo&usqp=CAU')",
                    backgroundSize: "cover",
                    height: 200,
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                  }}
                ></Box>
              </a>
              <CardContent>
                <Typography variant="h6">Title 8</Typography>
                <Typography variant="body2" color="text.secondary">
                This is a 1930 Duesenberg Model J, a luxury car known for its elegant,
                 design and powerful engine.
                 It was one of the most prestigious and expensive cars of its time.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Ninth Column */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: 3, boxShadow: 3, marginBottom: 2 }}>
              <a href="/property" className="h-entry">
                <Box
                  className="featured-img"
                  sx={{
                    backgroundImage:
                      "url('https://daryo.uz/cache/2021/10/9B9A7286-1300x867.jpg')",
                    backgroundSize: "cover",
                    height: 200,
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                  }}
                ></Box>
              </a>
              <CardContent>
                <Typography variant="h6">Title 9</Typography>
                <Typography variant="body2" color="text.secondary">
                This is the Opel Super 6 model, produced in the 1930s.
                 The Opel Super 6 stood out with the advanced,
                  technologies and modern design of its time.
                 

                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Tenth Column */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: 3, boxShadow: 3, marginBottom: 2 }}>
              <a href="/property" className="h-entry">
                <Box
                  className="featured-img"
                  sx={{
                    backgroundImage:
                      "url('https://choynakningqopqogi.uz/wp-content/uploads/2024/09/image-37-edited.png')",
                    backgroundSize: "cover",
                    height: 200,
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                  }}
                ></Box>
              </a>
              <CardContent>
                <Typography variant="h6">Title 10</Typography>
                <Typography variant="body2" color="text.secondary">
                This is a Bentley T-Series model produced in the 1970s. The Bentley T-Series was introduced in 1965,
                 known for its modern design, luxurious interior, and powerful V8 engine.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}
