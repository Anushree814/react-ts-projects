import { useParams } from 'react-router-dom';

import { SESSIONS } from '../dummy-sessions.ts';
import Button from '../components/UI/Button.tsx';
import { useState } from 'react';
import BookSessionForm from '../components/Sessions/BookSessionForm.tsx';

export default function SessionPage() {
  const params = useParams<{ id: string }>();
  const [showBookingForm, setShowBookingForm] = useState(false);
  const sessionId = params.id;
  const loadedSession = SESSIONS.find((session) => session.id === sessionId);

  if (!loadedSession) {
    return (
      <main id="session-page">
        <p>No session found!</p>
      </main>
    );
  }

function openBookingForm(){
setShowBookingForm(true);
}
function closeBookingForm(){
setShowBookingForm(false);
}
  return (
    <main id="session-page">
      {showBookingForm && (
        <BookSessionForm
          session={loadedSession}
          completeBooking={closeBookingForm}
        />
      )}
      <article>
        <header>
          <img src={loadedSession.image} alt={loadedSession.title} />
          <div>
            <h2>{loadedSession.title}</h2>
            <time dateTime={new Date(loadedSession.date).toISOString()}>
              {new Date(loadedSession.date).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </time>
            <p>
              <Button onClick={openBookingForm}>Book Session</Button>
            </p>
          </div>
        </header>
        <p id="content">{loadedSession.description}</p>
      </article>
    </main>
  );
}
