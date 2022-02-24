import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image={
        "https://media.istockphoto.com/photos/tropical-beach-in-punta-cana-dominican-republic-caribbean-island-picture-id1150862958?b=1&k=20&m=1150862958&s=170667a&w=0&h=Fp6mNIh4pWJBBnm4dkpQfi-rjU-9D-HzEAV5Zgyc6wE="
      }
      title={"A first meetup"}
      address={"55 some street, 12345 some city"}
      description={"a first meetup"}
    />
  );
}

export default MeetupDetails;
