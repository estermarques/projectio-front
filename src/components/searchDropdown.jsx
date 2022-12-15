import ListGroup from 'react-bootstrap/ListGroup';
import React, {setValue} from "react";
import Form from 'react-bootstrap/Form'

function SearchDropdown(props) {
  let value = ""
  return (
    <>
    <Form.Control
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
    <ListGroup defaultActiveKey="#l1">      
      {
        props.items.map((value, index) => {
          return <ListGroup.Item action href={index} >{value}</ListGroup.Item>
        })
      }
    </ListGroup>
    </>
  );
}

export default SearchDropdown;