import React from "react";
import { Table } from "react-bootstrap";

export default function Dashboard() {
  return (
    <>
      <h1 className="">Attack On Titan</h1>
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
            <td>
              <img
                src="/Levi.png"
                alt="not found"
                className="img-fluid img-thumbnail"
              ></img>
            </td>
            <td>Levi</td>
            <td>Titan Slayer</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
