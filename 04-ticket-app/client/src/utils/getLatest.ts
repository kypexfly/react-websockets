export const getLatest = async () => {
  const res = await fetch("http://localhost:8080/latest");
  const data = await res.json();

  console.log(data);

  return data as Ticket[];
};
