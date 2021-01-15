import {Row, Col} from "react-bootstrap"
import "./Header.css"

const Header = ({title}) => {
    return(
        <Row className="container-Header">
            <Col className="header">
                <h1>{title}<i className="fas fa-thumbtack"></i></h1>
            </Col>
        </Row>
        
    )
}

export default Header;