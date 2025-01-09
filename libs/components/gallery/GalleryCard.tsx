import { Card, CardContent, CardMedia, Typography, Button, Grid } from '@mui/material';
import { useState } from 'react';

export default function GalleryCard() {
  const [profiles, setProfiles] = useState([
    {
      name: 'Annie Lea',
      role: 'Apps Developer',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quaerat iusto adipisci reprehenderit quasi cum perspiciatis, minima reiciendis magni quam!',
      imageUrl: 'https://cdn11.bigcommerce.com/s-lzx6le/images/stencil/1280x1280/products/1241/2902/167398L__04164.1557610883.jpg?c=2', // o'zgartirilgan rasm URL
    },
    {
        name: 'Annie Lea',
        role: 'Apps Developer',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quaerat iusto adipisci reprehenderit quasi cum perspiciatis, minima reiciendis magni quam!',
        imageUrl: 'https://cdn11.bigcommerce.com/s-lzx6le/images/stencil/1280x1280/products/1241/2902/167398L__04164.1557610883.jpg?c=2', // o'zgartirilgan rasm URL
      },
      {
        name: 'Annie Lea',
        role: 'Apps Developer',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quaerat iusto adipisci reprehenderit quasi cum perspiciatis, minima reiciendis magni quam!',
        imageUrl: 'https://cdn11.bigcommerce.com/s-lzx6le/images/stencil/1280x1280/products/1241/2902/167398L__04164.1557610883.jpg?c=2', // o'zgartirilgan rasm URL
      },
      {
        name: 'Annie Lea',
        role: 'Apps Developer',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quaerat iusto adipisci reprehenderit quasi cum perspiciatis, minima reiciendis magni quam!',
        imageUrl: 'https://cdn11.bigcommerce.com/s-lzx6le/images/stencil/1280x1280/products/1241/2902/167398L__04164.1557610883.jpg?c=2', // o'zgartirilgan rasm URL
      },
    {
      name: 'Eliana Maia',
      role: 'Website Developer',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quaerat iusto adipisci reprehenderit quasi cum perspiciatis, minima reiciendis magni quam!',
      imageUrl: 'https://images.squarespace-cdn.com/content/v1/5eac4ea3e88fff1b365dc45d/1599599381716-G6S1JK3EQVVQR1F4ZJ4S/AUGUST+pink+50x70.jpg?format=1000w', // o'zgartirilgan rasm URL
    },
    {
      name: 'Harley Briana',
      role: 'Graphic Developer',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quaerat iusto adipisci reprehenderit quasi cum perspiciatis, minima reiciendis magni quam!',
      imageUrl: 'https://via.placeholder.com/300x200/3357FF/FFFFFF?text=Rasm+3', // o'zgartirilgan rasm URL
    },
  ]);

  return (
    <div className="container">
      <Grid container spacing={2}>
        {profiles.map((profile, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="card">
              <CardMedia
                component="img"
                alt={profile.name}
                height="140"
                image={profile.imageUrl} // har bir kartaga alohida rasm URL'si qo'yiladi
                title={profile.name}
                className="card-media"
              />
              <CardContent>
                <div className="top-text">
                  <Typography variant="h6" className="name">{profile.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {profile.role}
                  </Typography>
                </div>
                <div className="bottom-text">
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {profile.description}
                  </Typography>
                  <div className="btn">
                    <Button size="small" href="#">
                      Read more
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
