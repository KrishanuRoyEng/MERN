import React from 'react'
import "../styles/s1.css"
const AdvancedIntro02 = () => {
    const user = {
    firstName: "John",
    lastName: "Doe",
    location:"San Francisco, CA",
    img:"https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"
};
    return (
    <div>
        <div className="user-card">
            <img src={user.img} alt="User Avatar" className="user-avatar" />
            <div className="user-info">
            <h2 className="user-name">{user.firstName} {user.lastName}</h2>
            <p className="user-title">Software Engineer</p>
            <p className="user-location">{user.location}</p>
        </div>
        <div className="user-actions">
            <button className="message-btn">Message</button>
            <a href="#" className="profile-link">View Profile</a>
        </div>
        </div>
    </div>
  );
};

export default AdvancedIntro02
