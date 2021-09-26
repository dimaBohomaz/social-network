import s from './Post.module.css'
const Post = () => {
    return (

            <div className = {s.item}>
              <img src = 'https://cdn.pixabay.com/photo/2014/11/26/12/56/woman-546176__340.png' alt = 'amazon woman'/>
              post 1
                <div>
                    <span>like</span>
                </div>
            </div>
    )
}
export default Post;