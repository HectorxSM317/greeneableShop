import { Box, Typography } from '@mui/material'
import React from 'react'
import Carousel from "../components/Carousel"
import "../styles/home.css"
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

export default function Index() {
  return (
    <>
    <div className='header'>
    </div>
    <div className='line'>
      <div className='lineA'>
        <div className='lineA-A'>
        </div>
      </div>
      <div className='lineB'>
        <Button variant="contained" sx={{backgroundColor: "#13552D"}}>All Product</Button>
      </div>
      <div className='lineC'>
      <div className='lineC-A'>
    </div>
      </div>
    </div>
    <div className="carouselHome">
      <Carousel/>
    </div>
    <div className='firstContent'>
      <div className='firstContentA'>
        <Box sx={{display: 'flex', height: "95%", width: "95%"}}>
          <Box sx={{height: "100%", width: "50%", mx: 1}} className="firstContentA-A">

          </Box>
          <Box sx={{height: "100%", width: "50%"}}>
            <Box sx={{height: "49%", mb: 1}} className="firstContentA-B">

            </Box>
            <Box sx={{height: "49%", mt: 1 }} className="firstContentA-C">

            </Box>
          </Box>
        </Box>
      </div>
      <div className='firstContentB'>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestias quo earum dolorem reiciendis illo possimus.
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestias quo earum dolorem reiciendis illo possimus.
        </Typography>
      </div>
    </div>
    <div className='separator'>

    </div>
    <div className='secondContent'>
      <div className='secondContentA'>
      <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestias quo earum dolorem reiciendis illo possimus.
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestias quo earum dolorem reiciendis illo possimus.
        </Typography>
      </div>
      <div className='secondContentB'>
        <Box sx={{display: 'flex', height: "95%", width: "95%"}}>
            <Box sx={{height: "100%", width: "50%"}}>
              <Box sx={{height: "49%", mb: 1}} className="firstContentA-B">
              </Box>
              <Box sx={{height: "49%", mt: 1 }} className="firstContentA-C">
              </Box>
            </Box>
            <Box sx={{height: "100%", width: "50%", mx: 1}} className="firstContentA-A">
            </Box>
          </Box>
      </div>
    </div>
    <div className='twoCalls'>
      <Box sx={{height:"100%", width: "50%", borderRadius: 5}} className="firstCall">
      </Box>
      <Box sx={{height:"100%", width: "50%", borderRadius: 5}} className="secondCall">
      </Box>
    </div>
    <div className='line'>
      <div className='lineA'>
        <div className='lineA-A'>
        </div>
      </div>
      <div className='lineB'>
        <Button variant="contained" sx={{backgroundColor: "#13552D"}}>Shop Now</Button>
      </div>
      <div className='lineC'>
      <div className='lineC-A'>
    </div>
      </div>
    </div>
    <div className='lastImage'>
      <div className='lastImage-A'>

      </div>
      <div className='lastImage-B'>
        <Typography sx={{fontSize: 50}}>Be sustainable</Typography>
      </div>
    </div>
    </>
  )
}

