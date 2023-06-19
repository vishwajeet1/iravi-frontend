import { FunctionComponent, useState, useEffect } from "react";
import { TextField } from "@mui/material";

interface InputProps {
  label?: string;
  disabled?: boolean;
  isRequired?: boolean;
  placeholder?: string;
  meta?: any;
  rest?: any;
  input?: any;
  helperText?: string;
  icon?: any;
}

const TextInput: FunctionComponent<InputProps> = ({
  input,
  meta,
  label,
  disabled,
  isRequired,
  placeholder,
  helperText,
  icon,
  ...rest
}) => {
  const hasError = meta && meta.touched && meta.error;
  const value = input && input.value !== "";
  const name = input && input.name;
  return (
    <div className="relative w-full">
      <div className={value ? "is-filled" : ""}>
        <TextField
          id={`field-${name}`}
          placeholder={placeholder}
          label={label}
          disabled={disabled}
          color={hasError ? "error" : "primary"}
          fullWidth
          error={hasError}
          helperText={meta.error}
          {...input}
        />
      </div>
      {icon && <div className="absolute top-0 right-0 mr-4 mt-4">{icon}</div>}
      {helperText && (
        <p className="text-sm text-lightgray-400 leading-tight mt-2">
          {helperText}
        </p>
      )}
      <style jsx>{`
        label {
          transition: all 200ms ease-in;
          transform: translate3d(0, 0.25rem, 0);
        }
        input {
          color: #616161;
          transition: all 200ms ease-out;
          box-sizing: border-box;
        }
        input:focus {
          box-shadow: 0px 2px 4px rgba(130, 136, 148, 0.16),
            0px 0px 1px rgba(130, 136, 148, 0.16);
          border-color: #443eff;
        }
        input:focus + .inputLabel {
          color: #443eff;
        }
        .is-filled input {
          padding-top: 1.25rem;
        }
        .is-filled label {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          margin: 0;
        }
        input::placeholder {
          color: #616161;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default TextInput;
