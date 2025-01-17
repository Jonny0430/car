import { Box, Stack, Grid, Typography, Card, CardContent } from "@mui/material";
import React from "react";

export default function Blog() {
  return (
    <Stack spacing={3}>
      <Box className="container homepage">
        <Grid container spacing={3}>
          {/* First Column */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: 3, boxShadow: 3, marginBottom: 2 }}>
              <a href="/property" className="h-entry">
                <Box
                  className="featured-img"
                  sx={{
                    backgroundImage:
                      "url(https://thumbs.dreamstime.com/b/happy-person-enjoying-talking-friends-phone-call-studio-background-joyous-man-positive-emotion-using-smartphone-smile-332775166.jpg)",
                    backgroundSize: "cover",
                    height: 200,
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                  }}
                ></Box>
              </a>
              <CardContent>
                <Typography variant="h6">Title 1</Typography>
                <Typography variant="body2" color="text.secondary">
                  Short description or details about the blog post.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Second Column */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: 3, boxShadow: 3, marginBottom: 2 }}>
              <a href="/property" className="h-entry">
                <Box
                  className="featured-img"
                  sx={{
                    backgroundImage:
                      "url('https://pyxis.nymag.com/v1/imgs/86a/a93/83982fa459a9b1df445fb6e10b2a4fb71b-phone-anxiety.1x.rsquare.w1400.jpg')",
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
                  Short description or details about the blog post.
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
                      "url('https://images.ctfassets.net/ho7m10evquwz/4m6wjtz4Eq9LHlBSOwXKIS/492642238930438507b9086cd8985e13/young-handsome-man-smiling-cheerfully-pointing-front-while-making-call-you-later-gesture-talking-phone.jpg?w=2400&q=75&fm=webp')",
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
                  Short description or details about the blog post.
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
                      "url('https://www.shutterstock.com/image-photo/indoor-view-happy-woman-man-600nw-1431453284.jpg')",
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
                  Short description or details about the blog post.
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
                      "url('https://www.dexcomm.com/hubfs/make%20customers%20happy%20over%20the%20phone.png')",
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
                  Short description or details about the blog post.
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
                      "url('https://www.shutterstock.com/image-photo/close-shot-happy-business-woman-standing-600nw-1552824742.jpg')",
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
                  Short description or details about the blog post.
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
                      "url('https://image.shutterstock.com/image-photo/happy-young-woman-working-phone-office-600w-1718694845.jpg')",
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
                  Short description or details about the blog post.
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
                      "url('https://www.shutterstock.com/image-photo/portrait-happy-beautiful-woman-holding-telephone-600w-1897380273.jpg')",
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
                  Short description or details about the blog post.
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
                      "url('https://www.shutterstock.com/image-photo/portrait-happy-beautiful-woman-holding-telephone-600w-1897380273.jpg')",
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
                  Short description or details about the blog post.
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
                      "url('https://www.shutterstock.com/image-photo/portrait-happy-beautiful-woman-holding-telephone-600w-1897380273.jpg')",
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
                  Short description or details about the blog post.
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
                      "url('https://www.shutterstock.com/image-photo/young-woman-holding-mobile-phone-600w-1290963920.jpg')",
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
                  Short description or details about the blog post.
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
                      "url('https://www.shutterstock.com/image-photo/happy-female-student-working-with-laptop-600w-1744213400.jpg')",
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
                  Short description or details about the blog post.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}

