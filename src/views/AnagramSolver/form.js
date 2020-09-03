import React from "react";
import { Field, reduxForm } from "redux-form";
import { Col } from "react-bootstrap";
import { Container, Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnagramSolver } from "../../redux/actions";

const AnagramSolverForm = ({initialize}) => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.form);

  let values;
  if (form?.anagramSolver?.values !== undefined) {
    values = form.anagramSolver.values;
  }

  React.useEffect(() => {
    initialize({initialString: 'odelk', stringToCompare: 'delko'});
  },[initialize]);

  const handleSubmit = React.useCallback(
    (e) => {
      e.preventDefault();
       dispatch(
        fetchAnagramSolver(values?.initialString, values?.stringToCompare)
      );
    },
    [dispatch, values]
  );

  return (
    <Container className={"mt-10 mb-20"}>
      <Row>
        <form onSubmit={handleSubmit}>
          <Col md="3">initialString</Col>
          <Col md="9">
            <Field name="initialString" component="input" type="text" />
          </Col>
          <Col md="3">stringToCompare</Col>
          <Col md="9">
            <Field name="stringToCompare" component="input" type="text" />
          </Col>
          <Col md="12">
            <button type="submit">Calcul</button>
          </Col>
        </form>
      </Row>
    </Container>
  );
};

export default reduxForm({
  form: "anagramSolver", // a unique identifier for this form
})(AnagramSolverForm);
