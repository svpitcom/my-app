export async function getHomeData(lang: string) {
  const res = await fetch(`${process.env.API_BASE_URL}/api/home?lang=${lang}`, {
    cache: "no-store", // เพื่อให้ได้ข้อมูลล่าสุดทุกครั้ง
  });
  const json = await res.json();
  return json.data || [];
}

export async function getNewCsrData(lang: string) {
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/newcsr?lang=${lang}`,
    {
      cache: "no-store",
    }
  );
  const json = await res.json();
  return json.data || [];
}
