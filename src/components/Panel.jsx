import classNames from "class-names";

// REUSABLE PANEL COMPONENT FOR ADDED CLASSNAMES TO HAVE CONSISTENT,
// STYLING ACROSS ALL COMPONENTS IN THE APP

const Panel = ({ children, className, ...rest }) => {
  const finalClassNames = classNames(
    "border rounded p-3 shadow bg-white w-full",
    className
  );
  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
};

export default Panel;
