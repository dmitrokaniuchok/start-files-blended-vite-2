import { FiSearch } from 'react-icons/fi';
import { useRef } from 'react';
import style from './Form.module.css';

export default function Form({ onSubmit }) {
  const inputRef = useRef();

  const handlesSubmit = event => {
    event.preventDefault();
    const value = inputRef.current.value.trim();

    if (value !== '') {
      onSubmit(value);
      inputRef.current.value = '';
    }
  };

  return (
    <form className={style.form} onSubmit={handlesSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        ref={inputRef}
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
}
