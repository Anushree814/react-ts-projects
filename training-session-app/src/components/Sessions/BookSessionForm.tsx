import { FormEvent, useEffect, useRef } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Modal, { ModalHandle } from "../UI/Modal";
import { Session, useSessionsContext } from "../../store/sessions-context";

type BookSessionProps = {
   session: Session
    completeBooking: () => void;
}

export default function BookSessionForm({session, completeBooking}:BookSessionProps){
    const modalRef = useRef<ModalHandle>(null)
    const sessionCtx = useSessionsContext();
    
    useEffect(() => {
    if(modalRef.current){
        modalRef.current.open();
    }
},[])
    const handleBooking = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const bookerDetails = Object.fromEntries(formData);
        console.log(bookerDetails, 'booked session with id:', session.id, ' name: ',session.title);
        sessionCtx.bookSession(session)
        completeBooking();
    }
    return (
      <Modal ref={modalRef} onClose={completeBooking}>
        <h2>Book session - {session.title}</h2>
        <form onSubmit={handleBooking}>
          <p>Add your details to book this session</p>
          <Input label="Name" id="name" type="text" name='name'/>
          <Input label="Email id" id="emailid" type="email" name='email'/>
          <p className="actions">
            <Button textOnly onClick={completeBooking}>Cancel</Button>
            <Button>Submit</Button>
          </p>
        </form>
      </Modal>
    );

}