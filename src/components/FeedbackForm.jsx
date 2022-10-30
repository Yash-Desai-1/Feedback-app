import React from 'react';
import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelected from './RatingSelect';

import {useContext,useEffect} from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackFrom() {

const{addFeedback,feedbackEdit,updateFeedback}
                =useContext(FeedbackContext)
//using use effect to update changes to the form
   useEffect(()=>{
     if(feedbackEdit.edit===true){
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
     }

   },[feedbackEdit])




  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);

  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleTestChange = (e) => {

    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text must be atleast 10 characters')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(e.target.value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(text.trim().length>10){
      const newFeedback={
        text,
        rating,
      }

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      }
     
    addFeedback(newFeedback);
    setText('');
    }

  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our service with us?</h2>
        <RatingSelected
          select={(rate) => setRating(rate)}
        />
        <div className="input-group">
          <input onChange={handleTestChange} value={text} type='text' placeholder='Write a revies' />
          <Button type="submit" isDisabled={btnDisabled} >Send</Button>

        </div>
        {message && <div className='message'>{message}</div>}
      </form>


    </Card>
  )
}

export default FeedbackFrom