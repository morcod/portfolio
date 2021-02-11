import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Profile from '../../assets/img/profile/profile.jpeg';
import './about.style.css';
const About = () => {
    return (
        <div id="about">
            <div className="about">
            <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
            <Container>
                <Row  className="pt-3 pb-5 align-items-center"> 
                    {/* Profile pic */}
                    <Col xs={12} md={6}>
                        <Row  className="pt-3 pb-5 align-items-center">
                            <Image className="profile justify-content-end"  src={Profile} alt="profile" thumbnail fluid/>
                        </Row>
                    </Col>
                    {/* About me description */}
                    <Col xs={12} md={6}>
                        <Row className=" align-items-start p-2 my-details rounded">
                        Hi there! I am <strong>&nbsp;Barchah Nabil</strong>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dignissimos doloremque accusantium, laborum debitis iusto cumque. Quos voluptatibus temporibus eaque ut consectetur? Sed earum quidem sunt porro eveniet nulla sequi?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ab nostrum modi numquam voluptatum perspiciatis repellendus ipsum, est repudiandae corporis beatae suscipit harum magni expedita ratione perferendis dolores. Autem, perferendis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rem voluptas alias cupiditate, natus magnam laboriosam molestias odit molestiae ipsum dolore aspernatur ducimus expedita, eveniet adipisci id sed? Sed, recusandae?
                        </Row>
                        <Row>
                             <Col className="d-flex justify-content-center flex-wrap">
                                <div>
                                    <a href="">
                                        <Button className="m-2" variant="outline-primary">Let's Talk</Button>
                                    </a>
                                </div>
                                <div>
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/morcod" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    )
}

export default About
