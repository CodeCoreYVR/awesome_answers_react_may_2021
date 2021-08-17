import React from 'react';

const AnswerDetails = ({body, author_full_name, created_at, id, deleteAnswer}) => {
    return(
      <div>
        <p>{body}</p>
        <p>By: {author_full_name ? author_full_name : null}</p>
        <p>
          <strong>Created at: </strong> {created_at.toLocaleString()}
        </p>
        <button onClick={() => deleteAnswer(id)}>Delete</button>
      </div>
    )
}

export default AnswerDetails
