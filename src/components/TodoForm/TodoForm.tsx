import { useState } from 'react';
import type { FormEvent } from 'react';
import styles from './TodoForm.module.css';

interface TodoFormProps {
  onAdd: (text: string) => void;
}

export function TodoForm({ onAdd }: TodoFormProps) {
  const [value, setValue] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!value.trim()) return;
    onAdd(value);
    setValue('');
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="What needs to be done?"
        aria-label="New todo text"
      />
      <button className={styles.submitBtn} type="submit" disabled={!value.trim()}>
        Add
      </button>
    </form>
  );
}
