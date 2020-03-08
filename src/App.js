import React , { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, CardTitle, Button, Jumbotron, Fade, CardText } from 'reactstrap';
import './App.css';

const App = (props) => {
  const [fadeIn, setFadeIn] = useState(true);
  const toggle = () => setFadeIn(!fadeIn);
  return (
    <div>
      <h1 className="display-3">El meu Arbre</h1>
        <Jumbotron>
          <h1 className="display-3">El meu Arbre</h1>
          <p className="lead">segon títol.</p>
          <hr className="my-2" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
          </p>
        </Jumbotron>
        <Card>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <Button color="primary" onClick={toggle}>Magic</Button>
            <Fade in={fadeIn} tag="h5" className="mt-3">
              <CardText>Fading text</CardText>
            </Fade>
          </CardBody>
        </Card>
        <Jumbotron>
          <h1 className="display-3">segon jumbotron</h1>
          <p className="lead">segon títol.</p>
          <hr className="my-2" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
          </p>
        </Jumbotron>
      </div>
  );
}

export default App;

Jumbotron.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  fluid: PropTypes.bool,
  className: PropTypes.string
};