import s from "./Profile.module.scss";
import ProfileNav from "../../components/UI/ProfileNav/ProfileNav";

const Profile = () => {
  return (
    <div className={s.profile}>
      <div className={s.profileText}>Hello, Username</div>
      <div className={s.info}>
        <ProfileNav />
        <div className={s.profileInfo}>
          <h3>Contact information</h3>
          <div className={s.inputs}>
            <span>Name:</span>
            <input
              type="text"
              name="UserName"
              id="UserName"
              placeholder="Username"
              pattern="[a-zA-Z]+"
              required
            />
          </div>
          <div className={s.inputs}>
            <span>Email:</span>
            <input
              type="email"
              name="UserEmail"
              id="UserEmail"
              placeholder="Email:"
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              required
            />
          </div>
          <div className={s.inputs}>
            <span>Phone:</span>
            <input
              type="tel"
              name="UserPhone"
              id="UserPhone"
              placeholder="+38-000-000-00-00"
              pattern="^\+38-\d{3}-\d{3}-\d{2}-\d{2}$"
              required
            />
          </div>
          <h3>Account information</h3>
          <span> Change password</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
