import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Info = ({ props }) => {
  console.log(props)
  return (
    <Card sx={{margin: 5}}>
      <CardMedia
        component="img"
        height="300"
        image={props.pictureUrl}
        alt="green iguana"
      />
      <CardContent sx={{ textAlign:'center'}}>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="h4" color="text.secondary">
          {props.partyName}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Info
