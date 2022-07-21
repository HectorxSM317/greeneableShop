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
      <div className='headerName'>
        <h1>Make the difference!</h1>
        <p>Sustainable products to take care of our planet</p>
      </div>
      <div className='headerScroll'>
          <Button variant="contained" sx={{backgroundColor: "#13552D"}}>Scroll</Button>
      </div>
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
        <div className='A'>
          <img src="https://www.visionsustentable.com/wp-content/uploads/2021/03/Botella-reutilizable-CArrefour-azul.jpg" alt="" />
          <div className='itemName'>
            <h3>BOTTLE</h3>
          </div>
          <div className='buyMe'>
            <h3>MORE INFO</h3>
          </div>
        </div>
        <div className='B'>
          <div className='B-1'>
            <img src="https://mymodernmet.com/wp/wp-content/uploads/2018/08/eco-friendly-products-2.jpg" alt="" />
            <div className='itemName'>
              <h3>BOTTLE</h3>
            </div>
            <div className='buyMe'>
              <h3>MORE INFO</h3>
            </div>
          </div>
          <div className='B-2'>
            <img src="https://www.esic.edu/sites/default/files/rethink/wp/georganics.jpg" alt="" />
            <div className='itemName'>
              <h3>BOTTLE</h3>
            </div>
            <div className='buyMe'>
            <h3>MORE INFO</h3>
          </div>
          </div>
        </div>
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
    <div className='line2'>
        <div className='line2A'>
          <div className='line2A-A'>
          </div>
        </div>
        <div className='lineBtn'>
          <Button variant="contained" sx={{backgroundColor: "#13552D"}}>Sustainable</Button>
        </div>
    </div>
    <div className='separator'>
    </div>
    <div className='line3'>
        <div className='lineBtn'>
          <Button variant="contained" sx={{backgroundColor: "#13552D"}}>Sustainable</Button>
        </div>
        <div className='line3A'>
          <div className='line3A-A'>
          </div>
        </div>
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
          <div className='B'>
            <div className='B-1'>
              <img src="https://mymodernmet.com/wp/wp-content/uploads/2018/08/eco-friendly-products-2.jpg" alt="" />
              <div className='buyMe'>
                <h3>MORE INFO</h3>
              </div>
            </div>
            <div className='B-2'>
              <img src="https://www.esic.edu/sites/default/files/rethink/wp/georganics.jpg" alt="" />
              <div className='buyMe'>
                <h3>MORE INFO</h3>
              </div>
            </div>
          </div>
          <div className='A'>
            <img src="https://www.visionsustentable.com/wp-content/uploads/2021/03/Botella-reutilizable-CArrefour-azul.jpg" alt="" />
            <div className='buyMe'>
              <h3>MORE INFO</h3>
            </div>
          </div>
      </div>
    </div>
    <div className='twoCalls'>
      <div className='firstCall'>
        <img src="https://images.pexels.com/photos/6417967/pexels-photo-6417967.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          <div className='text'>
            <h1>PRODUCTO</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vero, officiis nam doloremque unde facere id modi sint
            </p>
          </div>
      </div>
      <div className='secondCall'>
        <img src="https://images.pexels.com/photos/6706901/pexels-photo-6706901.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        <div className='text'>
          <h1>PRODUCTO</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vero, officiis nam doloremque unde facere id modi sint
          </p>
        </div>
      </div>
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

