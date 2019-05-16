import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './style.css';

class Footer extends React.Component {
    render() {
        return (
            <div className={window.location.pathname === "/" ? "site-footer bg-light" : "site-footer"}>
                <Container>
                    <Row>
                        <Col xs={6} sm={6} className="text-left">
                            © 2019 <a href="https://github.com/nomad31415/" target="_blank" rel="cognito, ergo sum">igorZ</a>
                        </Col>
                        <Col xs={6} sm={6} className="text-right">
                            <a href="https://github.com/nomad31415/googleBooksSearch" target="_blank" rel="Cogito, ergo sum"><i className="fas fa-code"></i></a>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Footer;
