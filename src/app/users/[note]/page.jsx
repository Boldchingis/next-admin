"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function NotesPage() {
  const params = useParams(); //
  const [data, setUserData] = useState(null);
  useEffect(() => {
    fetch(`/api/users/${params.note}`)
      .then((res) => res.json())
      .then((data) => {
        setUserData(data.data);
      });
  }, [params?.note]);
  console.log(data);
  return (
    <div>
      <p>First Name: {data?.firstname}</p>
      <p>Last Name: {data?.lastname}</p>
      <p>Email: {data?.email}</p>
    </div>
  );
}
