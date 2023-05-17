import React, { useEffect, useState } from 'react'
import { getPostsPage } from '../api/postApi'
import Post from './Post'



const Posts = () => {
  const [page, setPage] = useState(1)
  const [posts, setPosts] = useState([])


  useEffect(() => {
    getPostsPage(page).then(json => setPosts(json))
  }, [page])


  const content = posts.map(post => <Post key={post.id} {...post} />)

  const nextPage = () => setPage(prevPage => prevPage + 1)
  const previousPage = () => setPage(prevPage => prevPage - 1)


  return (
    <div>
        <div className='mb-3 flex justify-center gap-5'>
            <button onClick={previousPage} disabled={page === 1} className={`${page === 1 ? 'bg-purple-300' : 'bg-purple-600 transition-colors hover:bg-purple-700'} w-[100px] py-2`}>Previous</button>
            <button onClick={nextPage} disabled={!posts.length} className={`${posts.length === 0 ? 'bg-purple-300' : 'bg-purple-600 transition-colors hover:bg-purple-700'} w-[100px] py-2`}>Next</button>
        </div>
        { content }
    </div>
  )
}

export default Posts