export default function Card({ name, img, alhocholic, glass }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={img} alt={name} className="w-full" />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{name} </h2>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {alhocholic}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {glass}
        </span>
      </div>
    </div>
  );
}
