import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import styles from './CharacterCard.module.scss';

const CharacterCard = ({image, name, location, id}) => {
  return (
    <div key={id} className={styles.cardBlock}>
      <Link to={`character/${id}`} className={styles.linkWrapper}>
        <Card sx={{ display: 'flex'}} className={styles.card}>
          <CardActionArea className={styles.cardArea}>
            <div className={styles.actionArea}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }} >
                <Typography component="div" variant="h5">
                  {name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  {location}
                </Typography>
              </CardContent>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={image}
              alt={name}      
            />
            </div>
          </CardActionArea>
        </Card>
      </Link>
    </div>  
  )
}

export default CharacterCard