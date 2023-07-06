
import { connect, useSelector } from "react-redux";
import Card from "../Card/Card";

export default function Favorites() {
 
  const favorites = useSelector((state) => state.favorites); // ACLARACION
  
  return (
    <div>
      {favorites?.map((char) => (
        <Card
          key={char.id}
          id={char.id}
          name={char.name}
          species={char.species}
          gender={char.gender}
          status={char.status}
          image={char.image}
          origin={char.origin.name}
        />
      ))}
    </div>
  );
}