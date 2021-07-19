
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
function commentary() {
  let editForm = {};
  return (
    <div className="commentary">
      <div className="list"></div>
      <div className="form">
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </FormGroup>
        </Form>
      </div>
    </div>
  );
}

export default commentary;