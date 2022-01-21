import {useSelector} from 'react-redux';
import Button from '@mui/material/Button';
import axios from 'axios';


function ReviewPage () {

    const feelingInput = useSelector(store => store.feelingInput);
    const understandingInput = useSelector(store => store.understandingInput);
    const supportInput = useSelector(store => store.supportInput);
    const commentsInput = useSelector(store => store.commentsInput);

    const onSuccess = () => {
        console.log('success')
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