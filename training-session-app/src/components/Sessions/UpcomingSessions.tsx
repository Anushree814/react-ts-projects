import { useEffect, useRef } from "react";
import Modal, { ModalHandle } from "../UI/Modal";
import BookedSessions from "./BookedSessions";
import Button from "../UI/Button";
import { useSessionsContext } from "../../store/sessions-context";

interface UpcomingSessionsProps{
    close:()=> void;
}
export default function UpcomingSessions({close}: UpcomingSessionsProps){
    const sessionCtx = useSessionsContext();
    const modalRef = useRef<ModalHandle>(null);
    useEffect(()=>{
        if(modalRef.current){
            modalRef.current.open();
        }
    },[])
    return (
      <Modal ref={modalRef} onClose={close}>
        <h2>
          {sessionCtx.bookedSessions.length > 0
            ? "Upcoming Sessions"
            : "No sessions booked yet"}
        </h2>

        {sessionCtx.bookedSessions.length > 0 && (
          <BookedSessions upcomingSessions={sessionCtx.bookedSessions} />
        )}
        <p className="actions">
          {/* {sessionCtx.bookedSessions.length === 0 ? (
            <Button to={"/sessions"}>Get started</Button>
          ) : (
            ""
          )} */}
          <Button onClick={close}>Close</Button>
        </p>
      </Modal>
    );
}