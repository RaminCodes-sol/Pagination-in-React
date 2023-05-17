




const Post = ({ id, title, body }) => {
  return (
    <div className="p-3 py-4 border-b-2 border-[#676767]">
        <h3>ID: {id}</h3>
        <h4>Title: {title}</h4>
        <p>Body: {body}</p>
    </div>
  )
}

export default Post