import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';


function SuccessPage () {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = () => {
        history.push('/');

        dispatch({
            type: 'RESET_VALUES'
        })
    }
    return (
        <div className="container">
            <div>
                <Card className="card" sx={{ maxWidth: 345 }}>
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
                <Button onClick={handleSubmit} variant="contained">Submit More Feedback</Button>
            </div>
        </div>
    )
};

export default SuccessPage;