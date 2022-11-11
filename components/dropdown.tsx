interface Props {
  children: React.ReactNode;
  classes?: string;
}

export const DropDownList = ({ children, classes = '' }: Props) => {
  return (
    <ul
      tabIndex={0}
      className={`menu menu-compact dropdown-content mt-3 p-2 shadow-md bg-app_bg1 text-app_text2 rounded-box w-52 ${classes}`}
    >
      {children}
    </ul>
  );
};
