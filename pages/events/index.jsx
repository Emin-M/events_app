import Image from "next/image";
import Link from "next/link";

const EventsPage = ({ data }) => {
  return (
    <div className="events_page">
      <h1>Events Page</h1>
      <div>
        {data.map((ev) => (
          <Link href={`/events/${ev.id}`}>
            <Image width={300} height={300} src={ev.image} alt={ev.title} />
            <h2>{ev.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import("/data/data.json");

  return {
    props: {
      data: events_categories,
    },
  };
}
