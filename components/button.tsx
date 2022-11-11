interface Props {
  classes?: string;
  text?: string;
  icon?: React.ReactNode;
  dropdownClases?: string;
  children?: React.ReactNode;
}

export const SecondaryBtn = ({
  classes = '',
  text = 'Button',
  icon,
  dropdownClases = '',
  children,
  ...otherProps
}: Props) => {
  if (children) {
    return (
      <div className={`dropdown ${dropdownClases}`}>
        <label
          tabIndex={0}
          className={`btn btn-outline rounded-2xl ${
            icon && 'gap-2'
          } ${classes}`}
          {...otherProps}
        >
          {icon && icon}
          {text}
        </label>
        {children}
      </div>
    );
  } else
    return (
      <button
        className={`btn btn-outline rounded-2xl ${icon && 'gap-2'} ${classes}`}
        {...otherProps}
      >
        {icon && icon}
        {text}
      </button>
    );
};

export const CircleIconButton = ({
  classes = '',
  icon,
  dropdownClases = '',
  children,
  ...otherProps
}: Props) => {
  if (children) {
    return (
      <div className={`dropdown ${dropdownClases}`}>
        <label
          tabIndex={0}
          className={`btn btn-circle btn-outline ${classes}`}
          {...otherProps}
        >
          {icon}
        </label>
        {children}
      </div>
    );
  } else
    return (
      <button
        className={`btn btn-circle btn-outline ${classes}`}
        {...otherProps}
      >
        {icon}
      </button>
    );
};
