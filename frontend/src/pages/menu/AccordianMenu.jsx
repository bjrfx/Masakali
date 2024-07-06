import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import menudata from '../../Data/menudata';
// card imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import { Divider } from '@mui/material';

export default function AccordianMenu() {
    const cardOnHoverStyle = {
        '&:hover': {
            boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)',
            transform: 'scale(1.1)',
            transition: '0.3s'
        }
    };

    const [expanded, setExpanded] = React.useState({});

    const handleExpansion = (index) => (event, isExpanded) => {
        setExpanded((prevExpanded) => ({
            ...prevExpanded,
            [index]: isExpanded
        }));
    };

    return (
        <div style={{padding: '5%'}}>
            <Typography variant='h3' component='h1' style={{fontFamily: 'Philosopher', textAlign: 'center', marginBottom: '5%'}}>Menu</Typography>
            {menudata.map((category, categoryIndex) => (
                <Accordion
                    key={categoryIndex}
                    expanded={expanded[categoryIndex] || false}
                    onChange={handleExpansion(categoryIndex)}
                    TransitionComponent={Fade}
                    TransitionProps={{ timeout: 400 }}
                    sx={{
                        '& .MuiAccordion-region': { height: expanded[categoryIndex] ? 'auto' : 0 },
                        '& .MuiAccordionDetails-root': { display: expanded[categoryIndex] ? 'block' : 'none' }
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${categoryIndex}-content`}
                        id={`panel${categoryIndex}-header`}
                    >
                        <Typography component='p' variant='h4' style={{fontFamily: 'Philosopher'}}>{category.name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={2} sx={{ padding: '5%' }}>
                            {category.items.map((item, itemIndex) => {
                                const { name, price, description, image } = item;
                                return (
                                    <Grid item xs={12} sm={6} md={4} lg={4} key={itemIndex}>
                                        <Card sx={{ maxWidth: 345, margin: '10px', ...cardOnHoverStyle }}>
                                            <CardMedia
                                                sx={{ height: 140 }}
                                                image={image}
                                                title={name}
                                            />
                                            <CardContent>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <Typography variant="h5" component="div">
                                                        {name}
                                                    </Typography>
                                                    
                                                    <Typography variant="h6" component="p" style={{ marginLeft: 'auto' }}>
                                                        ${price.toFixed(2)}
                                                    </Typography>
                                                </div>
                                                <Divider />
                                                <Typography variant="body2" color="text.secondary" sx={{marginTop: '3%'}}>
                                                    {description}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}
