import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

export default function ViewPoke() {
  const { id } = useParams();

  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    const getPokemon = async (id) => {
      const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const dataPokemon = await resp.json();
      if (dataPokemon) {
        setPokemon(dataPokemon);
      }
    };
    getPokemon(id);
  }, [id]);

  return (
    <Container className="text-center">
      <Row>
        <Col xs lg="6">
          <h2 className="pt-5"> {pokemon.name} </h2>
          <img
            style={{ width: "80%", height: "80%", marginTop: "10px" }}
            src={pokemon.sprites.other.dream_world.front_default}
          />
        </Col>
        <Col xs lg="6" className="pt-5">
          <ListGroup as="ul">
            <ListGroup.Item as="li" className="bg-primary text-white">
              Características{" "}
            </ListGroup.Item>
            {pokemon.stats.map((poke) => (
              <ListGroup.Item as="li">
                {poke.stat.name}: {poke.base_stat}{" "}
              </ListGroup.Item>
            ))}

            <ListGroup.Item as="li">
              type : {pokemon.types.map((pokeType) => pokeType.type.name)}{" "}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
