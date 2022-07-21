import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/carousel.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import { CardContent, Typography } from "@mui/material";

export default function App() {
return (
    <>
    <Swiper
        slidesPerView={4}
        spaceBetween={10}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
        // dynamicBullets: true,
        clickable: true,
        }}
        breakpoints={{
            200: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
            },
            425: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
            },
            550: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 20,
            },
            1024: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 20,
            },
        }}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
    >
        <SwiperSlide className="sliderCarousel">
                <Box className="sliderImg">
                </Box>
                <Box>
                    <Typography>Botella</Typography>
                </Box>
                <Box>
                    <Button sx={{fontSize: 10, color: "black"}} size="medium">See More</Button>
                </Box>
        </SwiperSlide>
        <SwiperSlide className="sliderCarousel">
                <Box className="sliderImg">
                </Box>
                <Box>
                    <Typography>Botella</Typography>
                </Box>
                <Box>
                    <Button sx={{fontSize: 10, color: "black"}} size="medium">See More</Button>
                </Box>
        </SwiperSlide>
        <SwiperSlide className="sliderCarousel">
                <Box className="sliderImg">
                </Box>
                <Box>
                    <Typography>Botella</Typography>
                </Box>
                <Box>
                    <Button sx={{fontSize: 10, color: "black"}} size="medium">See More</Button>
                </Box>
        </SwiperSlide>
        <SwiperSlide className="sliderCarousel">
                <Box className="sliderImg">
                </Box>
                <Box>
                    <Typography>Botella</Typography>
                </Box>
                <Box>
                    <Button sx={{fontSize: 10, color: "black"}} size="medium">See More</Button>
                </Box>
        </SwiperSlide>
        <SwiperSlide className="sliderCarousel">
                <Box className="sliderImg">
                </Box>
                <Box>
                    <Typography>Botella</Typography>
                </Box>
                <Box>
                    <Button sx={{fontSize: 10, color: "black"}} size="medium">See More</Button>
                </Box>
        </SwiperSlide>
        <SwiperSlide className="sliderCarousel">
                <Box className="sliderImg">
                </Box>
                <Box>
                    <Typography>Botella</Typography>
                </Box>
                <Box>
                    <Button sx={{fontSize: 10, color: "black"}} size="medium">See More</Button>
                </Box>
        </SwiperSlide>
        <SwiperSlide className="sliderCarousel">
                <Box className="sliderImg">
                </Box>
                <Box>
                    <Typography>Botella</Typography>
                </Box>
                <Box>
                    <Button sx={{fontSize: 10, color: "black"}} size="medium">See More</Button>
                </Box>
        </SwiperSlide>
        <SwiperSlide className="sliderCarousel">
                <Box className="sliderImg">
                </Box>
                <Box>
                    <Typography>Botella</Typography>
                </Box>
                <Box>
                    <Button sx={{fontSize: 10, color: "black"}} size="medium">See More</Button>
                </Box>
        </SwiperSlide>
    </Swiper>
    </>
);
}

// <SwiperSlide className="asd">
// <CardMedia
//     component="img"
//     alt="green iguana"
//     height="120"
//     image="https://img.joomcdn.net/6bc14a248ce97640dd7dc0e82b19492078b4307e_original.jpeg"
// />
// <Box>
//     <Typography>Botella</Typography>
// </Box>
// <Box>
//     <Button sx={{fontSize: 10, color: "black"}} size="medium">See More</Button>
// </Box>
// </SwiperSlide>