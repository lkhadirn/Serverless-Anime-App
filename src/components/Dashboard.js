import React, { useState } from "react";
import {
  Table,
  Navbar,
  Button,
  Container,
  Alert,
  Image,
} from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";

export default function Dashboard() {
  const { currentUser, logOut } = useAuth();
  const history = useHistory();
  const [error, setError] = useState("");

  async function handleLogout() {
    try {
      setError("");
      await logOut();
      history.push("/login");
    } catch (error) {
      setError("Failed to Sign Out ");
    }
  }
  function userExist() {
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">AOT Anime</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Button variant="danger" onClick={handleLogout}>
              Log out
            </Button>
          </Navbar.Collapse>
        </Navbar>
        <Container>
          <h1 className="">Anime of {currentUser.email}</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Caracteristique</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ height: "20rem", width: "20rem" }}>
                  <Image src="/Levi.png" alt="not found" fluid />
                </td>
                <td>Levi</td>
                <td>Titan Slayer</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </>
    );
  }
  function userNotExist() {
    return history.push("/login");
  }

  return (
    <>
      {error && <Alert variant="danger">{error}</Alert>}
      {currentUser ? userExist() : userNotExist()}
    </>
  );
}
