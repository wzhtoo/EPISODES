import { useEffect, useState } from "react";
import Layout from "./Layout";

interface Menu {
  name: string;
  price: number;
}

const MenuCard = () => {
  const [menu, setMenu] = useState<Menu>();

  useEffect(() => {
    getData();
  }, []);

  // const handleClick = (menuName: string) => {
  //   // setMenu(menu);
  // };

  const getData = async () => {
    const res = await fetch("http://localhost:5000/menu");
    const menu = await res.json();
    setMenu(menu);
  };

  if (!menu) return null;

  return (
    <Layout>
      <h1>{menu.name}</h1>
    </Layout>
    /* <>
      <Typography variant="h3">{menu?.name}</Typography>

      <Button variant="contained" onClick={() => handleClick("Mote Hinn Khar")}>
        Update menu name
      </Button>
    </> */
  );
};

export default MenuCard;
