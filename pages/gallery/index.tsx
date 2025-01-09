import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Grid, Typography, CircularProgress, Container, Stack } from '@mui/material';
import axios from 'axios';
import withLayoutBasic from '../../libs/components/layout/LayoutBasic';
import GalleryCard from '../../libs/components/gallery/GalleryCard';
import Blog from '../../libs/components/gallery/Blog';

const GalleryPage = () => {
  
  return (
    <Container sx={{ padding: 4 }}>
      <Stack spacing={2} textAlign="center">
        <Typography variant="h4" component="h1">
          Image Gallery
        </Typography>
        <Typography variant="body1" marginBottom={3}>
          Search and download any images within a second
        </Typography>
          <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <GalleryCard/>
                <Blog />
              </Grid>
          </Grid>
      </Stack>
    </Container>
  );
};

export default withLayoutBasic(GalleryPage);
