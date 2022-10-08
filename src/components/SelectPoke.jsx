import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Form, Row, Col, Button } from "react-bootstrap";
export default function SelectPoke() {
  const [id, setId] = useState("");
  const [pokeData, setPokeData] = useState([]);

  const navigate = useNavigate();

  const details = () => {
    navigate(`/pokemon/${id}`);
  };

  useEffect(() => {
    const getPokemons = async () => {
      const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30");
      const data = await resp.json();

      if (data && data.results) {
        const getDataName = data.results.map(({ id, name }) => ({ id, name }));
        setPokeData(getDataName);
      }
    };
    getPokemons();
  }, []);

  return (
    <Container className="text-center">
      <h1 className="pt-5">Selecciona un Pokemón</h1>

      <Row className="justify-content-md-center mt-5">
        <Col xs lg="4">
          <Form.Select aria-label="Default select example" onChange={(e) => setId(e.target.value)}>
            <option>Selecciona un Pokemón</option>
            {pokeData.map((pokemon) => (
              <option key={pokemon.id} value={pokemon.id}>
                {pokemon.name}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col xs lg="2">
          <Button variant="primary" onClick={details}>
            Ver Pokemón
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
