import { type ChangeEvent } from "react";
import { Input } from "./ui/input";

interface CurrencyInputProps {
  value: number;
  onChange: (name: string, value: number) => void;
  onBlur?: () => void;
  name: string;
  placeholder?: string;
  label?: string;
  error?: string;
  touched?: boolean;
}

export function CurrencyInput({
  value,
  onChange,
  onBlur,
  name,
  placeholder,
  label,
  error,
  touched,
}: CurrencyInputProps) {
  function formatToPrice(value: number): string {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    let value = event.target.value;
    
    // Remove tudo que não é número
    value = value.replace(/\D/g, '');
    
    // Converte para número considerando os centavos
    const numberValue = Number(value) / 100;
    
    // Chama o onChange com o novo valor
    onChange(name, numberValue);
  }

  return (
    <div className="flex flex-col gap-1">
      {label && <label htmlFor={name}>{label}</label>}

      <Input
        id={name}
        name={name}
        value={formatToPrice(value)}
        onChange={handleChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />

      {touched && error && (
        <span className="text-red-500 text-sm">{error}</span>
      )}
    </div>
  );
}