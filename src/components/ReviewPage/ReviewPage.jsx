import {useSelector} from 'react-redux';
import Button from '@mui/material/Button';
import axios from 'axios';
import {useHistory} from 'react-router-dom';



function ReviewPage () {
    const history = useHistory();

    const feelingInput = useSelector(store => store.feelingInput);
    const understandingInput = useSelector(store => store.understandingInput);
    const supportInput = useSelector(store => store.supportInput);
    const commentsInput = useSelector(store => store.commentsInput);

    const dataToSend = {
        feeling: feelingInput,
        understanding: understandingInput,
        support: supportInput,
        comments: commentsInput
    }

    const onSuccess = () => {
        axios.post('/feedback', dataToSend)
            .then(res => {
                console.log('post success', res);
                history.push('/success');
            })
            .catch(err => {
                console.error('post failure', err);
            })
    }

    return (
        <div className="container">
            <h1>Please review your feedback</h1>
            <p>Feeling Rating: {feelingInput}</p>
            <p>Understanding Rating: {understandingInput}</p>
            <p>Support Rating: {supportInput}</p>
            <p>Comments: {commentsInput}</p>
            <br/>
            <Button onClick={onSuccess} variant="contained">Submit</Button>
        </div>
    )
};

export default ReviewPage;