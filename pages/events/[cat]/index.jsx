import CatEvent from "@/src/components/events/cat-event";

const EventsCatPage = ({ data, cat }) => <CatEvent data={data} cat={cat} />;

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
