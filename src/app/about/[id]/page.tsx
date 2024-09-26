"use client";

import { useParams } from "next/navigation";

const About = () => {
  const params = useParams();
  const id = params.id;

  return (
    <div>
      <h1>About Page</h1>
      <p>ID: {id}</p>
    </div>
  );
};

export default About;
