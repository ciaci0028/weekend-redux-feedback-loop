import * as React from 'react';
import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import Button from '@mui/material/Button';
import '../App/App.css';
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Understanding () {
    const dispatch = useDispatch();
    const history = useHistory();
    const [understandingRating, setUnderstandingRating] = useState('');
    const supportInput = useSelector(store => store.supportInput);

    const sendUnderstandingRating = () => {

        if (understandingRating === ''){
            alert('Please select a choice')
        }

        else if (understandingRating !== '' && supportInput !== ''){
            dispatch({
                type: 'INPUT_UNDERSTANDING',
                payload: understandingRating
            })
            
            history.push('/review');
        }

        else{
            dispatch({
                type: 'INPUT_UNDERSTANDING',
                payload: understandingRating
            })

            history.push('/support');
        }
    }

    const customIcons = {
        1: {
            icon: <SentimentVeryDissatisfiedIcon />,
            label: 'Very Dissatisfied',
        },
        2: {
            icon: <SentimentDissatisfiedIcon />,
            label: 'Dissatisfied',
        },
        3: {
            icon: <SentimentSatisfiedIcon />,
            label: 'Neutral',
        },
        4: {
            icon: <SentimentSatisfiedAltIcon />,
            label: 'Satisfied',
        },
        5: {
            icon: <SentimentVerySatisfiedIcon />,
            label: 'Very Satisfied',
        },
    };

    function IconContainer(props) {
        const { value, ...other } = props;
        return <span {...other}>{customIcons[value].icon}</span>;
    }

    IconContainer.propTypes = {
        value: PropTypes.number.isRequired,
    };

    return (
        <div className="container">
            <h1>How is your understanding of the material?</h1>
            <Rating
                name="highlight-selected-only"
                IconContainerComponent={IconContainer}
                highlightSelectedOnly
                onChange={event => setUnderstandingRating(event.target.value)}
            /><br/><br/>
            <Button onClick={sendUnderstandingRating} variant="contained">Next</Button>
        </div>
    )
};

export default Understanding;
