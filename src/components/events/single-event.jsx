import { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const SingleEvent = ({ data }) => {
  const router = useRouter();
  const inputEmail = useRef();

  //! submiting form
  const onSubmit = async (e) => {
    e.preventDefault();
    const email = inputEmail.current.value;
    const eventId = router?.query?.id;

    try {
      const res = await fetch("/api/email-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          eventId,
        }),
      });
      const json = await res.json();

      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="event_single_page">
      <h1>{data.title}</h1>
      <Image
        priority
        src={data?.image}
        alt={data?.title}
        width={1000}
        height={500}
      />
      <p>{data.description}</p>
      <form onSubmit={onSubmit} className="email_registration">
        <label>Get Registered for this event!</label>
        <input
          ref={inputEmail}
          type="email"
          id="email"
          placeholder="Please insert your email here"
        />
        <button type="submit">Submit</button>
      </form>
      <p>message</p>
    </div>
  );
};

export default SingleEvent;
