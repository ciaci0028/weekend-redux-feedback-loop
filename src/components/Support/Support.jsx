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
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Support () {
    const dispatch = useDispatch();
    const history = useHistory();
    const [supportRating, setSupportRating] = useState('');

    const sendSupportRating = () => {

        if (supportRating === ''){
            alert('Please select an option')
        }

        else {
            dispatch({
                type: 'INPUT_SUPPORT',
                payload: supportRating
            })

            history.push('/comments');
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
            <h1>How supported do you feel?</h1>
            <Rating
                name="highlight-selected-only"
                IconContainerComponent={IconContainer}
                highlightSelectedOnly
                onChange={event => setSupportRating(event.target.value)}
            /><br/><br/>
            <Button onClick={sendSupportRating} variant="contained">Next</Button>
        </div>
    )
};

export default Support;
