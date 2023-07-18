import className from "classnames";

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) => {
  const classes = className(
    rest.className,
    "flex items-center px-3 py-1.5 border mb-2",
    {
      "bg-blue-500 border-blue-600 text-white": primary,
      "bg-gray-500 border-gray-600 text-white": secondary,
      "bg-green-500 border-green-600 text-white": success,
      "bg-yellow-500 border-yellow-600 text-white": warning,
      "bg-red-500 border-red-600 text-white": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-500": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-500": outline && warning,
      "text-red-500": outline && danger,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};
Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "Only Use one of primary,secondary,success,warning or danger props"
      );
    }
  },
};

export default Button;
