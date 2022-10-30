import React from 'react';
import Card from './shared/Card';
// import PropTypes from 'react';
import {FaTimes ,FaEdit} from 'react-icons/fa';
import {useContext} from 'react';
import FeedbackContext from '../context/FeedbackContext';
// import{useState} from 'react';
function FeedbackItem({item}) {

  const{deleteFeedback,editFeedback }=useContext(FeedbackContext)
    // const[rating, setRating]=useState(7);
    // const[text, setText]=useState('this is example');
 return (
    <Card >

      <div className="num-display">{item.rating}</div>
      <button onClick={()=>deleteFeedback(item.id)} className="close">
       <FaTimes color = 'purple'/>
      </button>
      <button onClick={()=>editFeedback(item)} className="edit">
        <FaEdit color='purple'></FaEdit>
      </button>
  <div className="text-display">{item.text}</div>
  
    </Card>
  )
}
// FeedbackItem.propTypes = {
//   item: PropTypes.object.isRequired,
// }

export default FeedbackItem