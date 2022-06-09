import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, CardActionArea, CardActions,  FormControl, MenuItem, Select } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getCharacterDetails } from '../../api';

import styles from './CharacterDetails.module.scss';

const CharacterDetails = () => {  
  const [species, setSpecies] = React.useState([]);
  const { characterId } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    const index = parseFloat(characterId)
    if (typeof index !== 'number' || isNaN(index)) {
      return navigate('*')
    }
    getCharacterDetails(characterId)
    .then(res => {
       setSpecies(res);
    })
    .catch(error => {
      console.log(error);
    })

  }, [characterId, navigate]);

  const createdAt = () => {
    if (species.created) {
      let day = new Date(species.created);
      const shortDate = day.toISOString().split('T')[0]; // 2017-11-05
      const reverseFormat = shortDate.split("-").reverse().join("-"); // 05-11-2017
      return reverseFormat
    }
    else {
      return "No data"
    }
  }

  const episodValue = species?.episode?.map((item, index) => {
    const itemNum = (item?.match(/[0-9]+$/));
    return (
      <div key={index}>
        <MenuItem className={styles.liItem}>
          {`Episode ${itemNum[0] ? itemNum[0] : 'not found'}`}
        </MenuItem>
      </div>
    )
  })
  
  return (
    <Card className={styles.card} >
      <CardActionArea disableRipple>
        <CardMedia
          component="img"
          className={styles.mainImage}
          image={species.image}
          alt={species.name}
        />
        <CardContent className={styles.cardContent}>
          <Typography gutterBottom variant="h5" component="div">
            {species.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" className={styles.speciesBlock}>
            Species - <span className={styles.description}>{species.species}</span>
          </Typography>
          <Typography variant="body2" color="text.secondary" className={styles.speciesBlock}>
            Gender - <span className={styles.description}>{species.gender}</span>
          </Typography>
          <Typography variant="body2" color="text.secondary" className={styles.speciesBlock}>
            Status - <span className={styles.description}>{species.status}</span>
          </Typography>
          <Typography variant="body2" color="text.secondary" className={styles.speciesBlock}>
            Location - <span className={styles.description}>{species.location?.name}</span>
          </Typography>
          <Typography variant="body2" color="text.secondary" className={styles.speciesBlock}>
            Created at: <span className={styles.description}>{createdAt()}</span> 
          </Typography>

          <FormControl  p={0} style={{width: "200px"}}>
            <Typography variant="body2" color="text.secondary" className={styles.speciesEpisods}>
              List of episods with <br /> {species.name}:
            </Typography>
            <Select style={{ height: "15px"}} value="">
              {episodValue}
            </Select>
          </FormControl>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => navigate(-1)}>
        <ArrowBackIcon />
          Back
        </Button>
      </CardActions>
    </Card>
  );
}

export default CharacterDetails;