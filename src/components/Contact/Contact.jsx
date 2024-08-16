import { FaUser } from 'react-icons/fa6';
import { BsFillTelephoneFill } from 'react-icons/bs';
import s from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contactsOps';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <div className={s.container}>
      <div>
        <p>
          <FaUser /> {name}
        </p>
        <p>
          <BsFillTelephoneFill /> {number}
        </p>
      </div>
      <button className={s.btn} onClick={() => dispatch(deleteContacts(id))}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
