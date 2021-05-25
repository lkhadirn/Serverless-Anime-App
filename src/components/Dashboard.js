import React from "react";
import { Table } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useHistory} from "react-router-dom";



export default function Dashboard() {

  const { currentUser } = useAuth();
  const history = useHistory();

  function userExist(){
    return(
      <>
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
    )
  }
  function userNotExist(){
    return( history.push("/login")
    )
  }


  return (
    <>
    {currentUser ? userExist() : userNotExist()}
    </>
  )
}
