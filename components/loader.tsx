import loader from './EllipsisLoader.module.css';

export const EllipsisLoader = ({ color }: { color: string }) => {
  const style = {
    backgroundColor: color,
  };
  return (
    <div className={loader.ldsellipsis}>
      <div style={style}></div>
      <div style={style}></div>
      <div style={style}></div>
      <div style={style}></div>
    </div>
  );
};
