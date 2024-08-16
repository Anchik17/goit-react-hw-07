import { useDispatch, useSelector } from 'react-redux';
import s from './SearchBox.module.css';
import { selectNameFilter } from '../../redux/selectors';
import { changeFilter } from '../../redux/filtersSlice';


const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  return (
    <div className={s.container}>
      <label className={s.label}>
        <span className={s.span}>Find contacts by name</span>
        <input
          className={s.input}
          type='text'
          value={value}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </div>
  );
};

export default SearchBox;
