import Image from "next/image";
import Link from "next/link";

const EventsCatPage = ({ data, cat }) => {
  return (
    <div>
      <h1>Events {cat.charAt(0).toUpperCase() + cat.slice(1)}</h1>
      <div>
        {data.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`}>
            <Image width={300} height={300} src={ev.image} alt={ev.title} />
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsCatPage;

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allPaths = events_categories.map((ev) => {
    return {
      params: { cat: ev.id.toString() },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { cat } = context?.params;
  const { allEvents } = await import("/data/data.json");
  const data = allEvents.filter((ev) => ev.city === cat);

  return {
    props: { data, cat },
  };
}
