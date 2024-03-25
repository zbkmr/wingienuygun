"use client";
import React, {useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useSearchParams } from 'next/navigation';
import Avatar from '@mui/material/Avatar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { StyledButton } from './styles';
import Box from '@mui/material/Box';


const userDetail = () => {
    const searchParams = useSearchParams();
  
    const name = searchParams.get('name');
    const avatar= searchParams.get('avatar');
    const job = searchParams.get('job');
    const rating = searchParams.get('rating');
    const email= searchParams.get('email');
    const address= searchParams.get('address');
    const detail = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  return (
    <Card sx={{ minWidth: 275, mt: 5 }}>
      <CardContent>
        <Avatar alt="Remy Sharp" src={avatar} />
        <Typography sx={{ fontSize: 14, mt: 2 }} color="text.secondary" gutterBottom>
         FullName: {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         Job: {job}
        </Typography>
        <Typography variant="body2">
         E-Mail: {email}
        </Typography>
        <Typography variant="body2">
         Address: {address}
        </Typography>
        <Typography variant="body2">
         Detail: {detail}
        </Typography>
      </CardContent>
      <CardActions>
      <Box
        sx={{
        '& > legend': { mt: 2 },
        }}
        >
        <Typography component="legend">Total Rating: {rating}</Typography>
        <StyledButton aria-label="delete">
        <FavoriteIcon />
        </StyledButton>
      </Box>
      </CardActions>
    </Card>
  );
}

export default userDetail;