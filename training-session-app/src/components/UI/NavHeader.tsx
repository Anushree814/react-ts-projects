import { NavLink } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";
import UpcomingSessions from "../Sessions/UpcomingSessions";

export default function NavHeader() {
    const [showBookedSessions, setShowBookedSessions] = useState(false)
    function showUpcomingSessions(){
        setShowBookedSessions(true);
    }
    function hideUpcomingSessions(){
        setShowBookedSessions(false);
    }
  return (
    <>
    <header id="main-header">
        {showBookedSessions && <UpcomingSessions close={hideUpcomingSessions}/>}
      <h1>React Mentoring</h1>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
            Our Mission
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sessions"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
            Browse Sessions
            </NavLink>
          </li>
          <li>
            <Button textOnly onClick={showUpcomingSessions}>Upcoming Sessions</Button>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
}
