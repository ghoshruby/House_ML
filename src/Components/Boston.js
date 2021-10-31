
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Container, Row } from 'react-bootstrap';



import './Styles.css';

function Boston() {

    return (
        <>

            <form>


                <div class="header" style={{ marginTop: '15px' }}>
                    <h1><b>Bangalore House Price Prediction</b></h1>
                </div>


                <div class="background">

                    {/* <div class="container"> */}
                    <Container>

                        <br />
                        <br/>

                        <Row>
                            <Col md={2}></Col>
                            <Col md={4}>
                                <input type="text" placeholder="Enter a location name" name="location" />
                            </Col>

                            <Col md={4}>
                                <input class="input--style-1" type="text" placeholder="Enter a total sqft." name="sqft" />
                            </Col>
                            <Col md={2}></Col>


                        </Row>

                        <Row style={{marginTop:"8px"}}>
                            <Col md={2}></Col>
                            <Col md={4}>
                                <select name="size" class="input--style-1">
                                        <option disabled="disabled" selected="selected">BHK</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                            </Col>
                            <Col md={4}>
                                <select name="bath" class="input--style-1">
                                    <option disabled="disabled" selected="selected">Bath</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </Col>
                            <Col md={2}></Col>
                            </Row>

                            <Row style={{marginTop:"8px"}}>
                                <Col md={4}></Col>
                                <Col md={4}>
                                <input class="input--style-1" type="text" placeholder="Price_per_Sqft." name="sqft" />
                                </Col>
                                <Col md={4}></Col>
                                </Row>


<br/>


                        <Row>
                            <Col md={4}></Col>
                            <Col md={4}>
                            <div class=" button input--style-7">
                                    <button onclick="document.getElementsByClassName('button info').value = ''"
                                        class="button info">Reset Data</button>
                                </div>
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                <div class="button input--style-8">
                                    <button type="submit" class="button info">Predict Price</button>
                                </div>
                            </Col>
                            <Col md={4}>
                            

                            </Col>
                            {/* <Col md={4}></Col> */}
                        </Row>

                                

                                
                      




                        
                    </Container>
                </div>
            </form>

        </>
    )
}

export default Boston;