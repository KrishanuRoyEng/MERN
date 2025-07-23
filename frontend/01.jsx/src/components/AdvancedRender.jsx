import React from 'react'

const AdvancedRender = () => {
const isLoggedIn = true;
const hasNotifications = true;
const notificationCount =5;
  return (
    <div>
        <h1>My App</h1>
        {isLoggedIn ? (
            <div className = "user-menu">
                <span>Welcome Back!</span>
                <button>Logout</button>
                {hasNotifications && (
                    <span className="notification-badge">{notificationCount}</span>
                )}
            </div>
        ) : (
            <div className="login-button">
                <button>Login</button>
                <button>Sign Up</button>
            </div>
        )}
    </div>
  )
}

export default AdvancedRender