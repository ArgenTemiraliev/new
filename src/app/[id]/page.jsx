'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Info from '@/components/info/Info';

export default function InfoPage() {
  const { id } = useParams(); // URL'ден id алабыз
  const [venue, setVenue] = useState(null);

  useEffect(() => {
    fetch(`https://cp.sxodim.uz/api/venues/${id}`)
      .then(res => res.json())
      .then(data => setVenue(data))
      .catch(err => console.error("Ката:", err));
  }, [id]);

  if (!venue) return <div className="text-center mt-10">Загрузка...</div>;

  return <Info item={venue} />;
}
