import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function SuccessPage () {
    return (
        <div className="container">
            <div>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image=""
                            alt="prime logo"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Feedback complete!
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Thank you for submitting your feedback!
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    )
};

export default SuccessPage;