import { useState } from "react";

const Input = ({
  label,
  error,
  disabled,
  className,
  PrefixIcon,
  value = "",
  onChange,
  subText,
  type = "text",
  unit,
  labelBg,
  onClick,
  onClear,
  clearable = true,
  resetCursor = false,
  labelClassName,
  subTextClassName,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className={`relative ${
        subText || (error && typeof error !== "boolean") ? "mb-3" : ""
      } flex items-center bg-transparent border-[1.25px] rounded-2xl h-14 focus-within:ring-3 
      
      ${
        !!error
          ? "border-error focus-within:border-error focus-within:ring-error"
          : !!disabled
          ? "border-neutral border-opacity-50"
          : `border-neutral focus-within:border-primary focus-within:ring-primary`
      } 
      ${unit ? "input-group" : ""} ${className}`}
    >
      {PrefixIcon && (
        <div className="px-2.5 text-gray-500">
          <PrefixIcon />
        </div>
      )}

      <input
        onClick={onClick}
        type={showPassword ? "text" : type}
        value={value}
        disabled={disabled}
        onChange={(e) => {
          const caretStart = e.target.selectionStart;
          onChange(e.target.value);
          if (resetCursor) {
            setTimeout(() => {
              // restore cursor position
              e.target.setSelectionRange(caretStart, caretStart);
            }, 0);
          }
        }}
        className={`focus:outline-none bg-transparent  w-full text-base peer mx-2 ${
          !!PrefixIcon ? `pl-0.5 -ml-1 left-10` : `pl-1.5 left-0`
        } ${
          !!label ? "pt-3" : ""
        } focus:pt-px pr-2 block placeholder-transparent text-neutral-content placeholder-shown:pt-0 disabled:bg-transparent font-mabry-regular`}
        placeholder={label}
        {...rest}
      />
      {!!unit && (
        <span className="ml-3 bg-color-neutral-99  rounded-r-2xl h-[54px]">
          {unit}
        </span>
      )}
      {!!label && (
        <label
          className={`absolute font-mabry-regular pointer-events-none ${
            !!PrefixIcon ? "left-10" : "left-3.5"
          } text-[12px] top-1.5 peer-placeholder-shown:text-base peer-focus:rounded-md peer-placeholder-shown:top-3 peer-focus:px-1 peer-focus:-top-3 ${
            labelBg ? labelBg : "peer-focus:bg-[#FFEDE7]"
          }  peer-focus:text-primary peer-focus:text-[12px] transition-all duration-150 peer-disabled:text-neutral ${
            !!error && "peer-focus:text-error"
          } ${labelClassName}`}
        >
          {label}
        </label>
      )}
      {type === "password" ? (
        <span
          className=" peer-focus:text-primary"
          onClick={() => setShowPassword((x) => !x)}
        >
          {showPassword ? (
            <svg
              width="24"
              height="24"
              className="mx-2 cursor-pointer"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_1507_6523"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_1507_6523)">
                <path
                  d="M12 16C13.25 16 14.3127 15.5627 15.188 14.688C16.0627 13.8127 16.5 12.75 16.5 11.5C16.5 10.25 16.0627 9.18733 15.188 8.312C14.3127 7.43733 13.25 7 12 7C10.75 7 9.68733 7.43733 8.812 8.312C7.93733 9.18733 7.5 10.25 7.5 11.5C7.5 12.75 7.93733 13.8127 8.812 14.688C9.68733 15.5627 10.75 16 12 16ZM12 14.2C11.25 14.2 10.6127 13.9373 10.088 13.412C9.56267 12.8873 9.3 12.25 9.3 11.5C9.3 10.75 9.56267 10.1123 10.088 9.587C10.6127 9.06233 11.25 8.8 12 8.8C12.75 8.8 13.3877 9.06233 13.913 9.587C14.4377 10.1123 14.7 10.75 14.7 11.5C14.7 12.25 14.4377 12.8873 13.913 13.412C13.3877 13.9373 12.75 14.2 12 14.2ZM12 19C9.56667 19 7.35 18.3207 5.35 16.962C3.35 15.604 1.9 13.7833 1 11.5C1.9 9.21667 3.35 7.39567 5.35 6.037C7.35 4.679 9.56667 4 12 4C14.4333 4 16.65 4.679 18.65 6.037C20.65 7.39567 22.1 9.21667 23 11.5C22.1 13.7833 20.65 15.604 18.65 16.962C16.65 18.3207 14.4333 19 12 19ZM12 17C13.8833 17 15.6127 16.504 17.188 15.512C18.7627 14.5207 19.9667 13.1833 20.8 11.5C19.9667 9.81667 18.7627 8.479 17.188 7.487C15.6127 6.49567 13.8833 6 12 6C10.1167 6 8.38733 6.49567 6.812 7.487C5.23733 8.479 4.03333 9.81667 3.2 11.5C4.03333 13.1833 5.23733 14.5207 6.812 15.512C8.38733 16.504 10.1167 17 12 17Z"
                  fill="currentColor"
                />
              </g>
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="mx-2 cursor-pointer"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_1507_6534"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_1507_6534)">
                <path
                  d="M16.1 13.3L14.65 11.85C14.8 11.0667 14.575 10.3333 13.975 9.64999C13.375 8.96665 12.6 8.69999 11.65 8.84999L10.2 7.39999C10.4833 7.26665 10.7707 7.16665 11.062 7.09999C11.354 7.03332 11.6667 6.99999 12 6.99999C13.25 6.99999 14.3127 7.43732 15.188 8.31199C16.0627 9.18732 16.5 10.25 16.5 11.5C16.5 11.8333 16.4667 12.146 16.4 12.438C16.3333 12.7293 16.2333 13.0167 16.1 13.3ZM19.3 16.45L17.85 15.05C18.4833 14.5667 19.046 14.0373 19.538 13.462C20.0293 12.8873 20.45 12.2333 20.8 11.5C19.9667 9.81665 18.7707 8.47899 17.212 7.48699C15.654 6.49565 13.9167 5.99999 12 5.99999C11.5167 5.99999 11.0417 6.03332 10.575 6.09999C10.1083 6.16665 9.65 6.26665 9.2 6.39999L7.65 4.84999C8.33333 4.56665 9.03333 4.35399 9.75 4.21199C10.4667 4.07065 11.2167 3.99999 12 3.99999C14.5167 3.99999 16.7583 4.69565 18.725 6.08699C20.6917 7.47899 22.1167 9.28332 23 11.5C22.6167 12.4833 22.1127 13.396 21.488 14.238C20.8627 15.0793 20.1333 15.8167 19.3 16.45ZM19.8 22.6L15.6 18.45C15.0167 18.6333 14.4293 18.771 13.838 18.863C13.246 18.9543 12.6333 19 12 19C9.48333 19 7.24167 18.3043 5.275 16.913C3.30833 15.521 1.88333 13.7167 1 11.5C1.35 10.6167 1.79167 9.79565 2.325 9.03699C2.85833 8.27899 3.46667 7.59999 4.15 6.99999L1.4 4.19999L2.8 2.79999L21.2 21.2L19.8 22.6ZM5.55 8.39999C5.06667 8.83332 4.625 9.30832 4.225 9.82499C3.825 10.3417 3.48333 10.9 3.2 11.5C4.03333 13.1833 5.229 14.5207 6.787 15.512C8.34567 16.504 10.0833 17 12 17C12.3333 17 12.6583 16.9793 12.975 16.938C13.2917 16.896 13.6167 16.85 13.95 16.8L13.05 15.85C12.8667 15.9 12.6917 15.9373 12.525 15.962C12.3583 15.9873 12.1833 16 12 16C10.75 16 9.68733 15.5627 8.812 14.688C7.93733 13.8127 7.5 12.75 7.5 11.5C7.5 11.3167 7.51233 11.1417 7.537 10.975C7.56233 10.8083 7.6 10.6333 7.65 10.45L5.55 8.39999Z"
                  fill="currentColor"
                />
              </g>
            </svg>
          )}
        </span>
      ) : (
        !!value &&
        !unit &&
        !error &&
        clearable &&
        !disabled && (
          <span className=" peer-focus:text-primary">
            <svg
              onClick={() => (onClear ? onClear() : onChange(""))}
              width="24"
              height="24"
              className="mx-2 cursor-pointer"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20Zm0 18a8.01 8.01 0 0 1 0-16 8.01 8.01 0 0 1 0 16Zm0-9.41L15.59 7 17 8.41 13.41 12 17 15.59 15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59Z"
                fill="currentColor"
              />
            </svg>
          </span>
        )
      )}
      {error && (
        <span className="absolute inset-y-0 right-0 inline-flex items-center pr-3 text-error">
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 12C2 6.48 6.48 2 12 2c5.53 0 10 4.48 10 10s-4.47 10-10 10C6.48 22 2 17.52 2 12zm9.12-3.79c0-.48.4-.88.88-.88s.87.4.87.88v4.42a.87.87 0 01-.87.87.879.879 0 01-.88-.87V8.21zm.89 8.47c-.49 0-.88-.4-.88-.88s.39-.87.87-.87c.49 0 .88.39.88.87s-.39.88-.87.88z"
            />
          </svg>
        </span>
      )}
      {(!!subText || !!error) && (
        <span
          className={`${subTextClassName} absolute -bottom-6 leading-none text-medium text-2xs left-3 peer-focus:text-primary ${
            !!error ? "text-error peer-focus:text-error" : "text-black"
          }`}
        >
          {!!error && typeof error !== "boolean" ? error : subText}
        </span>
      )}
    </div>
  );
};

export default Input;
