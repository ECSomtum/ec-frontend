import { Avatar, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import React from 'react'

const Info = ({ props }) => {
  return (
    <Card sx={{ margin: 5 }}>
      <Box sx={{display:'flex', position:'relative'}}>
        <Typography variant="h4" color="text.secondary">
          {props.partyName}
        </Typography>
        <Avatar alt="Remy Sharp" src={props.partyPictureUrl} sx={{position:'absolute',width:56,height:56,right:0}}/>
      </Box>

      <CardMedia
        component="img"
        height="300"
        image={props.pictureUrl}
        alt="green iguana"
      />
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Info
