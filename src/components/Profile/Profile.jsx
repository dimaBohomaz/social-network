import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
const Profile = () => {
    return (
<div className = {s.content}>
        <div>
            <img src = 'https://cdn.pixabay.com/photo/2016/11/14/22/18/beach-1824855__340.jpg' alt = 'beach'/>
        </div>
        <div>
            <img src = 'https://cdn.pixabay.com/photo/2017/06/09/09/39/adler-2386314__340.jpg' alt = 'eagle'/>
        </div>
        <div>
          avatar + description
        </div>
        <MyPosts/>
      </div>
    )
}
export default Profile;