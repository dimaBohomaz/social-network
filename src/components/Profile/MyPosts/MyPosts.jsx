// import s from './MyPosts.module.css'
import Post from './Post/Post';
const MyPosts = () => {
    return (
<div>
        
          My posts
          <div>
            <textarea></textarea>
            <button>Add post</button>
            <Post message = 'Hi,how are you?' amountLikes = '15' />
            <Post message = "It's my first post" amountLikes = '20' />
          </div>
</div>
      
    )
}
export default MyPosts;