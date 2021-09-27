import s from './Post.module.css'
const Post = (props) => {
    return (

            <div className = {s.item}>
              <img src = 'https://cdn.pixabay.com/photo/2014/11/26/12/56/woman-546176__340.png' alt = 'amazon woman'/>
              {props.message}
                <div>
                    <span>like - {props.amountLikes}</span>
                </div>
            </div>
    )
}
export default Post;