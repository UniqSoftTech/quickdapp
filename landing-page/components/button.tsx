import Condition from "./condition";
import Spinner from "./spinner";

export interface IButtonProps {
  type?: "primary" | "secondary" | "outline" | "tertiary" | "link";
  size?: "tiny" | "small" | "medium" | "large" | "huge";
  shape?: "square" | "round";
  containerClass?: string;
  onClick?: () => void;
  text: string;
  loading?: boolean;
}

const Button = ({
  loading = false,
  shape = "round",
  type = "primary",
  size = "medium",
  text = "Primary",
  onClick = () => {},
  containerClass = "",
}: IButtonProps) => {
  type StyleKeys = keyof typeof btn_styles;
  type SizeKeys = keyof typeof size_styles;
  type ShapeKeys = keyof typeof shape_styles;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading}
      className={`relative ${containerClass}${btn_styles[type as StyleKeys]} ${
        shape_styles[shape as ShapeKeys]
      } ${size_styles[size as SizeKeys]}`}
    >
      {text}

      <Condition
        condition={loading}
        truth={
          <div className="absolute top-1/2  -translate-x-1/2 -translate-y-1/2 left-10">
            <Spinner />
          </div>
        }
      />
    </button>
  );
};

const shape_styles = {
  square: "rounded-lg",
  round: "rounded-full",
};

const size_styles = {
  tiny: "py-1.5 px-6 text-xs",
  small: "py-2.5 px-8 text-sm",
  medium: "py-3 px-10 text-base",
  large: "py-3.5 px-10 text-lg",
  huge: "py-4 px-10 text-xl",
};

const btn_styles = {
  primary:
    "bg-primary text-white cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:opacity-60",
  secondary:
    "bg-primary-xl-light text-primary cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:opacity-60",
  outline:
    "border border-gray-300 shadow-xs bg-white font-semibold text-gray-900 transition-all duration-500 hover:bg-gray-50",
  tertiary:
    "font-semibold text-primary transition-all duration-500 hover:opacity-60 hover:shadow-xs hover:text-primary",
  link: "font-semibold text-primary transition-all duration-500 hover:text-primary",
};

export default Button;
