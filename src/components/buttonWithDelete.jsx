import "./buttonWithDelete.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';

function ButtonWithDelete(props) {
  return (
    <Button variant={props.variant} className="button-margin">
       <div className="button-flex">
       <div className="button-margin">{props.title}</div>
      <FontAwesomeIcon icon={faXmark} />
       </div>
    </Button>
  )
}

export default ButtonWithDelete;