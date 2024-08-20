import UpcomingSessionItem from "./UpcomingSessionItem";

export interface BookedSessionItem{
    id: string;
    title: string;
    summary: string;
    date: string;
}

interface BookedSessionsProps {
  upcomingSessions: BookedSessionItem[];
}
export default function BookedSessions({upcomingSessions}:BookedSessionsProps){
    return <ul>{upcomingSessions.map((sess) =>(
<li key={sess.id}>
    <UpcomingSessionItem {...sess}/>
</li>
    ))}</ul>;
}