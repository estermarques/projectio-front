import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function CommentUnit() {
  return (
    <>
      <FloatingLabel
        controlId="floatingInput"
        label="User1"
        className="mb-3"
      >
        <Form.Control  readOnly type="text" value="Muito legal esse projeto!" placeholder="name@example.com" />
      </FloatingLabel>
    </>
  );
}

export default CommentUnit;