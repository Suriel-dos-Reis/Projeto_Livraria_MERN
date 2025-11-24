import { useEffect, useState } from "react";

function DateTime() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const data = dateTime.toLocaleDateString("pt-BR");
  const hora = dateTime.toLocaleTimeString("pt-BR");

  return (
    <div style={{ color: "white", fontSize: "14px", fontWeight: "bold" }}>
      {data} - {hora}
    </div>
  );
}

export default DateTime;
