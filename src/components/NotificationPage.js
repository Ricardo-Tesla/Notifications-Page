import React, { useEffect } from 'react';
import './NotificationPage.css';
import markWebber from '../images/avatar-mark-webber.webp';
import angelaGray from '../images/avatar-angela-gray.webp';
import jacobThompson from '../images/avatar-jacob-thompson.webp';
import rizkyHasanuddin from '../images/avatar-rizky-hasanuddin.webp';
import kimberlySmith from '../images/avatar-kimberly-smith.webp';
import nathanPeterson from '../images/avatar-nathan-peterson.webp';
import annaKim from '../images/avatar-anna-kim.webp';
import chessImage from '../images/image-chess.webp';

const NotificationPage = () => {
    useEffect(() => {
        const markAllReadButton = document.getElementById("mark-all-read-button");
        const notificationNumber = document.getElementById("notification-number");
        const newNotifications = document.querySelectorAll(".new-notification");

        const markAllRead = () => {
            newNotifications.forEach(notification => {
                notification.classList.remove("new-notification");
            });
            notificationNumber.textContent = "0";
        };

        markAllReadButton.addEventListener("click", markAllRead);

        return () => {
            markAllReadButton.removeEventListener("click", markAllRead);
        };
    }, []);
  return (
    <main>
      <div className="header">
        <h1>
          Notifications <span className="notification-number" id="notification-number">3</span>
        </h1>
        <button id="mark-all-read-button">Mark all as read</button>
      </div>

      <div className="new-notification notification">
        <div className="image-container">
          <img src={markWebber} alt="Mark" />
        </div>
        <div className="notification-container">
          <p>
            <strong>Mark Webber</strong> reacted to your recent post <span className="post">My first tournament today!</span>
          </p>
          <span className="time">1m ago</span>
        </div>
      </div>

      <div className="new-notification notification">
        <div className="image-container">
          <img src={angelaGray} alt="Angela" />
        </div>
        <div className="notification-container">
          <p>
            <strong>Angela Gray</strong> followed you
          </p>
          <span className="time">5m ago</span>
        </div>
      </div>

      <div className="new-notification notification">
        <div className="image-container">
          <img src={jacobThompson} alt="Jacob" />
        </div>
        <div className="notification-container">
          <p>
            <strong>Jacob Thompson</strong> has joined your group <span className="club">Chess Club</span>
          </p>
          <span className="time">1 day ago</span>
        </div>
      </div>

      <div className="notification">
        <div className="image-container">
          <img src={rizkyHasanuddin} alt="Rizky" />
        </div>
        <div className="notification-container">
          <p>
            <strong>Rizky Hasanuddin</strong> sent you a private message
          </p>
          <span className="time">5 days ago</span>
          <p className="private-message">
            Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.
          </p>
        </div>
      </div>

      <div className="notification">
        <div className="image-container">
          <img src={kimberlySmith} alt="Kimberly" />
        </div>
        <div className="notification-container">
          <p>
            <strong>Kimberly Smith</strong> commented on your picture
          </p>
          <span className="time">1 week ago</span>
        </div>
        <img className="picture" src={chessImage} alt="Chess" />
      </div>

      <div className="notification">
        <div className="image-container">
          <img src={nathanPeterson} alt="Nathan" />
        </div>
        <div className="notification-container">
          <p>
            <strong>Nathan Peterson</strong> reacted to your recent post <span className="reacted-post">5 end-game strategies to increase your win rate</span>
          </p>
          <span className="time">2 weeks ago</span>
        </div>
      </div>

      <div className="notification">
        <div className="image-container">
          <img src={annaKim} alt="Anna" />
        </div>
        <div className="notification-container">
          <p>
            <strong>Anna Kim</strong> left the group <span className="left"></span>
          </p>
          <span className="time">2 weeks ago</span>
        </div>
      </div>
    </main>
  );
};

export default NotificationPage;
