import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "meetup one",
    image:
      "https://media.istockphoto.com/photos/tropical-beach-in-punta-cana-dominican-republic-caribbean-island-picture-id1150862958?b=1&k=20&m=1150862958&s=170667a&w=0&h=Fp6mNIh4pWJBBnm4dkpQfi-rjU-9D-HzEAV5Zgyc6wE=",
    address: "some address 5, 12345 some city",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "meetup two",
    image:
      "https://media.istockphoto.com/photos/tropical-beach-in-punta-cana-dominican-republic-caribbean-island-picture-id1150862958?b=1&k=20&m=1150862958&s=170667a&w=0&h=Fp6mNIh4pWJBBnm4dkpQfi-rjU-9D-HzEAV5Zgyc6wE=",
    address: "some address 5, 12345 some city",
    description: "This is a second meetup",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
