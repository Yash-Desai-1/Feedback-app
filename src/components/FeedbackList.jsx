import React from 'react';
import FeedbackItem from './FeedbackItem';
import {useContext} from 'react';
import FeedbackContext from '../context/FeedbackContext';
// import { motion, AnimatePresence } from 'framer-motion';
// import PropTypes from 'react';
//function FeedbackList({feedback,handleDelete})
function FeedbackList() 
{

  const{feedback,isLoading}= useContext (FeedbackContext)

  if (!isLoading&&(!feedback || feedback.length === 0)) {
    return <p> NO Feedback Yet</p>
  }
  // feedbacklist wiht framer motion animation
//   return (
//     <div className="feedback-list">
//       <AnimatePresence>
//         {feedback.map((item) => (
//           <motion.div key={item.id}
//             intial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity:-1 }}
//           >
//             <FeedbackItem key={item.id} item={item}
//               handleDelete={handleDelete} />
//           </motion.div>
//         ))}
//       </AnimatePresence>
//     </div>
//   )
// }
// feedback list version without framer animation
  return  isLoading?<h3>Loading....</h3>:(
  <div className="feedback-list">

    {feedback.map((item)=>(
      <FeedbackItem key={item.id} item={item}
    />
    ))}
  </div>
  )
}



// FeedbackList.propTypes={
//     feedback:PropTypes.arrayOf(
//         PropTypes.shape({
//             id:PropTypes.number.isRequires,
//             text:PropTypes.string.isRequires,
//             rating:PropTypes.number.isRequires


//         })
//     )
// }
export default FeedbackList