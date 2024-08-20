import { useSessionsContext } from "../../store/sessions-context";
import Button from "../UI/Button";
import { BookedSessionItem } from "./BookedSessions";


export default function UpcomingSessionItem(props:BookedSessionItem){
    const sessionCtx = useSessionsContext()
    function handleCancelSession(){
        sessionCtx.cancelSession(props.id);
    }
    return (
      <article className="upcoming-session">
        <div>
          <h3>{props.title}</h3>
          <p>{props.summary}</p>
          <time dateTime={new Date(props.date).toISOString()}>
            {new Date(props.date).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </time>
        </div>
        <p className="actions">
          <Button textOnly onClick={handleCancelSession}>Cancel</Button>
        </p>
      </article>
    );
}