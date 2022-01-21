import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../App/App.css';
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Comments () {
    const dispatch = useDispatch();
    const history = useHistory();
    const [comments, setComments] = useState('');

    const sendComments = () => {
        dispatch({
            type: 'INPUT_COMMENTS',
            payload: comments
        })

        history.push('/review');

    }

    return (
        <div className="container">
            <h1>Do you have any comments?</h1>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
            <div>
                <TextField
                    id="outlined-multiline-static"
                    label="Comments"
                    multiline
                    rows={4}
                    onChange={event => setComments(event.target.value)}
                />
            </div>
            </Box>
            <br/><br/>
            <Button onClick={event => sendComments(event)} variant="contained">Submit</Button>
        </div>
    )
};

export default Comments;

