import { createContext, ReactNode, useContext, useReducer } from "react";

export interface Session {
  id: string;
  title: string;
  summary: string;
  description: string;
  date: string;
  image: string;
  duration: number;
}

interface SessionState {
  bookedSessions: Session[];
}

interface SessionContextType extends SessionState {
  bookSession: (session: Session) => void;
  cancelSession: (sessionId: string) => void;
}

export const sessionContext = createContext<SessionContextType | null>(null);

export function useSessionsContext() {
  const context = useContext(sessionContext);
  if (!context) {
    throw new Error("Something went wrong");
  }
  return context;
}

type BookSessionAction = {
  type: "book_session";
  session: Session;
};
type CancelSessionAction = {
  type: "cancel_session";
  sessionId: string;
};
type SessionActions = BookSessionAction | CancelSessionAction;

function sessionsReducer(
  state: SessionState,
  action: SessionActions
): SessionState {
  if (action.type === "book_session") {
    if (
      state.bookedSessions.some((session) => session.id === action.session.id)
    ) {
      return state;
    }
    return { bookedSessions: state.bookedSessions.concat(action.session) };
  }
  if (action.type === "cancel_session") {
    return {
      bookedSessions: state.bookedSessions.filter(
        (session) => session.id !== action.sessionId
      ),
    };
  }
  return state;
}

export default function SessionContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [sessionState, dispatch] = useReducer(sessionsReducer, {
    bookedSessions: [],
  });

  function bookSession(session: Session) {
    dispatch({ type: "book_session", session });
  }
  function cancelSession(sessionId: string) {
    dispatch({ type: "cancel_session", sessionId });
  }
  const ctxValue = {
    bookedSessions: sessionState.bookedSessions,
    bookSession,
    cancelSession,
  };
  return (
    <sessionContext.Provider value={ctxValue}>
      {children}
    </sessionContext.Provider>
  );
}
