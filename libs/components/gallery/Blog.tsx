import { Box, Stack, Grid, Typography } from "@mui/material";
import React from "react";

export default function Blog() {
  return (
    <Stack spacing={3}>
      <Box className="category-title">
        <Typography variant="h4">Blog Menu</Typography>
      </Box>
      <Box className="container homepage">
        <Grid container spacing={2}>
          {/* First Column */}
          <Grid item xs={12} sm={6} md={4}>
            <a href="#" className="h-entry mb-30 v-height gradient">
              <Box
                className="featured-img"
                sx={{
                  backgroundImage:
                    "url(https://thumbs.dreamstime.com/b/happy-person-enjoying-talking-friends-phone-call-studio-background-joyous-man-positive-emotion-using-smartphone-smile-332775166.jpg)",
                  backgroundSize: "cover",
                  height: 200,
                }}
              ></Box>
              <Box className="text">
                <Typography variant="body2" color="text.secondary" className="date">
                  Apr. 14th, 2024
                </Typography>
                <Typography variant="h6">
                  What telephone are prohibited: what not to give as a gift.
                </Typography>
              </Box>
            </a>

            <a href="#" className="h-entry v-height gradient">
              <Box
                className="featured-img"
                sx={{
                  backgroundImage:
                    "url('https://pyxis.nymag.com/v1/imgs/86a/a93/83982fa459a9b1df445fb6e10b2a4fb71b-phone-anxiety.1x.rsquare.w1400.jpg')",
                  backgroundSize: "cover",
                  height: 200,
                }}
              ></Box>
              <Box className="text">
                <Typography variant="body2" color="text.secondary" className="date">
                  June. 21th, 2024
                </Typography>
                <Typography variant="h6">
                  How to Keep a Bouquet Fresh: Tips and Recommendations
                </Typography>
              </Box>
            </a>
          </Grid>

          {/* Second Column */}
          <Grid item xs={12} sm={6} md={4}>
            <a href="#" className="h-entry img-5 h-100 gradient">
              <Box
                className="featured-img"
                sx={{
                  backgroundImage:
                    "url('https://images.ctfassets.net/ho7m10evquwz/4m6wjtz4Eq9LHlBSOwXKIS/492642238930438507b9086cd8985e13/young-handsome-man-smiling-cheerfully-pointing-front-while-making-call-you-later-gesture-talking-phone.jpg?w=2400&q=75&fm=webp')",
                  backgroundSize: "cover",
                  height: 200,
                }}
              ></Box>
              <Box className="text">
                <Typography variant="body2" color="text.secondary" className="date">
                  Sep. 23th, 2024
                </Typography>
                <Typography variant="h6">
                  Floral Etiquette - How to Properly Give Telephone
                </Typography>
              </Box>
            </a>
          </Grid>

          {/* Third Column */}
          <Grid item xs={12} sm={6} md={4}>
            <a href="#" className="h-entry mb-30 v-height gradient">
              <Box
                className="featured-img"
                sx={{
                  backgroundImage:
                    "url('https://www.shutterstock.com/image-photo/indoor-view-happy-woman-man-600nw-1431453284.jpg')",
                  backgroundSize: "cover",
                  height: 200,
                }}
              ></Box>
              <Box className="text">
                <Typography variant="body2" color="text.secondary" className="date">
                  Oct. 05th, 2024
                </Typography>
                <Typography variant="h6">Symbolism of Telephone</Typography>
              </Box>
            </a>

            <a href="#" className="h-entry v-height gradient">
              <Box
                className="featured-img"
                sx={{
                  backgroundImage:
                    "url('https://www.dexcomm.com/hubfs/make%20customers%20happy%20over%20the%20phone.png')",
                  backgroundSize: "cover",
                  height: 200,
                }}
              ></Box>
              <Box className="text">
                <Typography variant="body2" color="text.secondary" className="date">
                  July. 03th, 2024
                </Typography>
                <Typography variant="h6">DIY Telephone Projects</Typography>
              </Box>
            </a>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}
