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

function Feeling () {
    const dispatch = useDispatch();
    const history = useHistory();
    const [feelingRating, setFeelingRating] = useState('');

    const sendFeelingRating = () => {

        if (feelingRating === ''){
            alert('Please select an option before moving on')
        }

        else{

            dispatch({
                type: 'INPUT_FEELING',
                payload: feelingRating
            })

            history.push('/understanding');
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
            <h1>How are you feeling today?</h1>
            <Rating
                name="highlight-selected-only"
                IconContainerComponent={IconContainer}
                highlightSelectedOnly
                onChange={event => setFeelingRating(event.target.value)}
            /><br/><br/>
            <Button onClick={sendFeelingRating} variant="contained">Next</Button>
        </div>
    )
};

export default Feeling;