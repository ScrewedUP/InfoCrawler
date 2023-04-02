export default function Card(props) {
  return (
    <div className="flex">
      <div className="h-80 w-72 bg-gradient-to-r from-slate-50 to-gray-400 flex flex-col justify-around items-center rounded-xl flex-wrap">
        <img
          src={require(`../Images/${props.logo}`)}
          alt="logo"
          className="h-48 w-48 object-contain"
        />
        <div className="border-2 rounded-lg  h-10 w-36 cursor-pointer  text-center flex items-center justify-center">
          <div className="text-slate-900 font-bold text-lg">{props.title}</div>
        </div>
      </div>
    </div>
  );
}
