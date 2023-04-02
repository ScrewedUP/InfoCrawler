export default function Card(props) {
  return (
    <div className="flex hover:scale-110 shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] rounded-xl">
      <div className="h-80 w-72 bg-gradient-to-r from-slate-200 to-gray-300 flex flex-col justify-around items-center rounded-xl flex-wrap">
        <img
          src={require(`../Images/${props.logo}`)}
          alt="logo"
          className="h-48 w-48 object-contain"
        />
        <div className="bg-gradient-to-r from-indigo-900 to-fuchsia-700 border-2 border-white rounded-lg  h-10 w-36 cursor-pointer  text-center flex items-center justify-center hover:opacity-60">
          <div className="text-white font-semibold text-lg font-grotesque">
            {props.title}
          </div>
        </div>
      </div>
    </div>
  );
}
