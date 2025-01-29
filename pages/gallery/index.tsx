import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Grid, Typography, CircularProgress, Container, Stack } from '@mui/material';
import axios from 'axios';
import withLayoutBasic from '../../libs/components/layout/LayoutBasic';
// import GalleryCard from '../../libs/components/gallery/GalleryCard';
import Blog from '../../libs/components/gallery/Blog';
import TopProperties from '../../libs/components/gallery/Blog';
import TrendProperties from '../../libs/components/gallery/LatestNews';
const GalleryPage = () => {
  
  return (
    <div style={{background: '#f6f6f6'}}>
    <Container sx={{ padding: 4}}>
      <Stack spacing={2} textAlign="center">
          <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>              
                <TrendProperties /> 
              </Grid>
          </Grid>
      </Stack>
    </Container>
    </div>
  );
};

export default withLayoutBasic(GalleryPage);
