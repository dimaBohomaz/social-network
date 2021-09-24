import s from './Profile.module.css'
const Profile = () => {
    return (
<div className = {s.content}>
        <div>
            <img src = 'https://cdn.pixabay.com/photo/2016/11/14/22/18/beach-1824855__340.jpg' alt = 'beach'/>
        </div>
        <div>
            <img src = 'https://cdn.pixabay.com/photo/2017/06/09/09/39/adler-2386314__340.jpg' alt = 'eagle'/>
        </div>
        <div className = {s.item}>
          avatar + description
        </div>
        <div className = {s.item}>
          My posts
          <div className = {s.item}>
            New post
          </div>
          <div>
            <div className = {s.item}>post 1</div>
            <div className = {s.item}>post 2</div>
          </div>
        </div>
      </div>
    )
}
export default Profile;