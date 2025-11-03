import styles from './style.module.scss'

interface InputProps {
  label: string
  placeholder: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  name: string
  value: string
}

export const Input = ({
  label,
  placeholder,
  onChange,
  name,
  value,
}: InputProps) => {
  const inputId = `input-${name}`
  return (
    <div className={styles.input}>
      <label htmlFor={inputId}>{label}</label>
      <input
        id={inputId}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
      />
    </div>
  )
}
