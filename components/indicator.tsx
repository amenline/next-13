interface Props {
  text: string | number;
}

export const Indicator = ({ text }: Props) => {
  if (Number(text) !== NaN) {
    text = Number(text) > 99 ? '99+' : text;
  }
  return (
    <span className='indicator-item badge bg-app_notification border-none text-white rounded-lg p-2'>
      {text}
    </span>
  );
};
