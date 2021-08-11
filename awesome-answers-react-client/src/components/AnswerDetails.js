const AnswerDetails = ({body, author, created_at, id, deleteAnswer}) => {
    return(
      <div>
        <p>{body}</p>
        <p>By: {author ? author.first_name : null} {author ? author.last_name : null}</p>
        <p>
          <strong>Created at: </strong> {created_at.toLocaleString()}
        </p>
        <button onClick={() => deleteAnswer(id)}>Delete</button>
      </div>
    )
}

export default AnswerDetails
