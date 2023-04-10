import s from "./Profile.module.scss";
import ProfileNav from "../../components/UI/ProfileNav/ProfileNav";
import ProfileForm from "../../components/UI/ProfileForm/ProfileForm";

const Profile = () => {
  return (
    <div className={s.profile}>
      <div className={s.profileText}>Hello, Username</div>
      <div className={s.info}>
        <ProfileNav />
        <div className={s.profileInfo}>
          <h3>Contact information</h3>
          <ProfileForm />
          <h3>Account information</h3>
          <p>Change password</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
