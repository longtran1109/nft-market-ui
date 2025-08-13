import clsx from "clsx";

type Variant = "primary" | "secondary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  name?: string;
}

const Button: React.FC<ButtonProps> = ({
  name = "",
  variant = "primary" as Variant,
  disabled = false,
  className = "",
  ...props
}) => {
  const baseStyles =
    "rounded-full uppercase font-black text-sm px-6 py-2 transition-all duration-200";

  const variants: Record<Variant, string> = {
    primary: clsx(
      "text-black",
      "bg-primary-5",
      "hover:bg-primary-10",
      "disabled:bg-yellow-700 disabled:opacity-[.4]"
    ),
    secondary: clsx(
      "text-white",
      "border border-primary-25",
      "hover:border-primary-50",
      "disabled:border-primary-25 disabled:opacity-[.4]"
    ),
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], className)}
      disabled={disabled}
      {...props}
    >
      {name}
    </button>
  );
};

export default Button;
