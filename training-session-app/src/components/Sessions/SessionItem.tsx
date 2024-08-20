import Button from "../UI/Button";

type SessionItemProps = {
  id: string;
  title: string;
  summary: string;
  description: string;
  duration: number;
  date: string;
  image: string;
};
export default function SessionItem(props: SessionItemProps) {
  return (
    <section className="session-item">
      <img src={props.image} />
      <div className="session-data">
        <div>
    <h3>{props.title}</h3>
        <p>{props.summary}</p>
        </div>
        
        <div>
            <p className="actions">
                <Button to={props.id}>Learn More</Button>
            </p>
        </div>
      </div>
    </section>
  );
}
