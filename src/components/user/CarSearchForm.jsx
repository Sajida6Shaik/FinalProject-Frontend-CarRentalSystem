import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCar, faChair, faGasPump, faCheck, faDollarSign, faMapMarkerAlt, faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { Button, Form, Card, Container, Navbar, Nav, Dropdown, Row, Col } from "react-bootstrap";
import CarServices from "../../services/CarServices";
import { useNavigate } from "react-router-dom";

const CarSearchForm = () => {
  const [sourceLocation, setSourceLocation] = useState("");
  const [destinationLocation, setDestinationLocation] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
//EventHandler --Submitting the Search
  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await CarServices.getCarDetailsByLocationAndDate(
        sourceLocation,
        destinationLocation,
        fromDate,
        toDate
      );
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error fetching car details:", error);
    }
  };

  const handleSourceLocationSelect = (location) => {
    setSourceLocation(location);
  };

  const handleDestinationLocationSelect = (location) => {
    setDestinationLocation(location);
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home"> RoadWheels </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-source">
                  Source Location: {sourceLocation || "Select"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleSourceLocationSelect("Chennai")}>Chennai</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleSourceLocationSelect("Hyderabad")}>Hyderabad</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleSourceLocationSelect("Madurai")}>Madurai</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleSourceLocationSelect("Vijayawada")}>Vijayawada</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleSourceLocationSelect("Thiruvananthapuram")}>Thiruvananthapuram</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleSourceLocationSelect("Kochi")}>Kochi</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleSourceLocationSelect("Visakhapatnam")}>Visakhapatnam</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleSourceLocationSelect("Pune")}>Pune</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleSourceLocationSelect("Jaipur")}>Jaipur</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleSourceLocationSelect("Surat")}>Surat</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleSourceLocationSelect("Delhi")}>Delhi</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleSourceLocationSelect("Ahmedabad")}>Ahmedabad</Dropdown.Item>
                  
          
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-destination">
                  Destination Location: {destinationLocation || "Select"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleDestinationLocationSelect("Chennai")}>Chennai</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleDestinationLocationSelect("Hyderabad")}>Hyderabad</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleDestinationLocationSelect("Madurai")}>Madurai</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleDestinationLocationSelect("Ahmedabad")}>Ahmedabad</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleDestinationLocationSelect("Jaipur ")}> Jaipur</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleDestinationLocationSelect("Kochi")}>Kochi</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleDestinationLocationSelect("Pune")}>Pune</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleDestinationLocationSelect("Bangalore")}>Bangalore</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleDestinationLocationSelect("Coimbatore")}>Coimbatore</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleDestinationLocationSelect("Delhi")}>Delhi</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleDestinationLocationSelect("Kolkata")}>Kolkata</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleDestinationLocationSelect("Visakhapatnam")}>Visakhapatnam</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleDestinationLocationSelect("Lucknow")}>Lucknow</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleDestinationLocationSelect("Goa")}>Goa</Dropdown.Item>
 
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
            <Form onSubmit={handleSearch} className="d-flex align-items-center">
              <Form.Control
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
              <Form.Control
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="ms-2"
              />
              <Button variant="success" type="submit" className="ms-2">
                <FontAwesomeIcon icon={faSearch} className="mr-2" />
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Row className="justify-content-md-center">
          {searchResults.map((car) => (
            <Col md="3" key={car.id}>
              <Card>
                <Card.Img variant="top" src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Jeep/Compass/10941/Jeep-Compass-2.0-Model-S-Opt-4x4-AT/1698294241076/front-left-side-47.jpg?impolicy=resize&imwidth=420" />
                <Card.Body>
                  <Card.Title><FontAwesomeIcon icon={faCar} /> {car.carModel}</Card.Title>
                  <Card.Text><FontAwesomeIcon icon={faChair} /> Seating: {car.seating}</Card.Text>
                  <Card.Text><FontAwesomeIcon icon={faGasPump} /> Fuel Type: {car.fuelType}</Card.Text>
                  <Card.Text><FontAwesomeIcon icon={faTachometerAlt} /> Mileage: {car.mileage}</Card.Text>
                </Card.Body>
                <hr />
                <Card.Body>
                  <Card.Text><FontAwesomeIcon icon={faCheck} /> Available from 15 March</Card.Text>
                  <Card.Title><FontAwesomeIcon icon={faDollarSign} /> {car.price}/day</Card.Title>
                  <Card.Text><FontAwesomeIcon icon={faMapMarkerAlt} /> {car.location}</Card.Text>
                  <Button variant="primary" onClick={() => navigate("/user/cardetail")} className="float-end">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CarSearchForm;