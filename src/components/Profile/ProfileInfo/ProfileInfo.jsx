import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div className = {s.bigImage}>
        <img
          src="https://cdn.pixabay.com/photo/2016/11/14/22/18/beach-1824855__340.jpg"
          alt="beach"
        />
      </div>
      <div className = {s.descriptionBlock}>
        <div>avatar + description</div>
      </div>
    </div>
  );
};
export default ProfileInfo;
