import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let postsData = [
    { id: 1, message: "Hi,how are you?",amountLikes : "15" },
    { id: 2, message: "It's my first post", amountLikes: "11" },
  ]
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
        <div className={s.posts}>
          <Post message= {postsData[0].message} amountLikes={postsData[0].amountLikes} />
          <Post message= {postsData[1].message} amountLikes={postsData[1].amountLikes} />

        </div>
      </div>
    </div>
  );
};
export default MyPosts;
