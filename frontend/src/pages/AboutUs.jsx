
import * as React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "../styles/aboutUs.css"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Patagonia from '../assets/Patagonia-Logo.png';
import Nestle from '../assets/Nestle-Logo.png'
import Amazon from '../assets/Amazon-logo.png'
import Verizon from '../assets/Verizon-Logo.png'

export default function AboutUs() {

    const itemData = [
        {
            img: Patagonia,
            title: 'Patagonia',
        },
        {
            img: Nestle,
            title: 'Nestle',
        },
        {
            img: Amazon,
            title: 'Amazon',
        },
        {
            img: Verizon,
            title: 'Verizon',
        },
    ]
    return (
        <div>
            <div className="fondoImagen">
                <h2 style={{ maxWidth: "45vw", paddingInline: "5rem", paddingTop: "30vh", fontSize: "38px", color: "white", display: "flex", marginBottom: "2rem", justifyContent: "center" }}>"The sustainable solution to your daily needs"</h2>
                <p style={{ maxWidth: "45vw", paddingInline: "3rem", color: "white", display: "flex", justifyContent: "center", fontSize: "28px" }}>Greeneable is a digital eco-platform, a web environment created by web developers from the MindHub 28 cohort, which serves as a marketing and distribution channel for sustainable products and services for human eco-development in an integral way. It is a virtual commercial meeting point, a digital shopping mall for products and services from the organic, natural, biological and sustainable world with an international reach.</p>
            </div>
            <div style={{ backgroundColor: "#e7eee8", display: "flex", justifyContent: "space-evenly", alignItems: "center", padding: "3rem", paddingTop: "7rem", paddingBottom: "7rem" }}>
                <Card sx={{ maxWidth: 400, minHeight: 300 }}>
                    <CardContent>
                        <Typography sx={{ display: "flex", justifyContent: "center" }} gutterBottom variant="h5" component="div">
                            Mission
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Manage the micro-segmented marketing, distribution, promotion and dissemination of products, services and projects from the sustainable, ecological, organic and natural world. Direct efforts in a specialized way to people who seek to achieve an increasingly healthy lifestyle in an integral way, at a psychic, physical and eco-social level, more responsible and civic, in pursuit of sustainable local development.
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{ maxWidth: 400, minHeight: 300 }}>
                    <CardContent>
                        <Typography sx={{ display: "flex", justifyContent: "center" }} gutterBottom variant="h5" component="div">
                            Vision
                        </Typography>
                        <Typography sx={{ fontSize: "18px" }} variant="body2" color="text.secondary">
                            To be the digital ecoportal of international reference specialized in the sustainable world and to obtain the key to comprehensive sustainability year after year. Greeneable guides its vocation of service to the client-provider and the client-user with a sincere, close and personalized treatment.
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{ maxWidth: 400 }}>
                    <CardContent>
                        <Typography sx={{ display: "flex", justifyContent: "center" }} gutterBottom variant="h5" component="div">
                            Values
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Greeneable offers solutions for a gradual, wise transition, with professionals who accompany the eco-evolution of our users.
                            The axiological pillars of Greeneable are based on the professionalism and integrity of its providers, who assume the responsibility of acting with ethical, honest and dignified behavior that generates credibility and trust in the quality of the products it offers, innovation, transparency in management, communication with our stakeholders, respect for people and the environment, and commitment to local development.
                        </Typography>
                    </CardContent>
                </Card>

            </div>
            <div style={{ display: "flex", justifyContent: "center", fontSize: "38px", marginTop: "7rem" }}><h2>Our Partners:</h2></div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "4rem" }}>
                <ImageList sx={{ width: 1500, height: 260 }} cols={4} rowHeight={164}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
        </div >
    );
}