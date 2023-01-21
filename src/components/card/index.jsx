export default function Card({ name, img, alhocholic, glass, category, copy }) {
  return (
    <div className="max-w-sm h-full bg-gray-200 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img src={img} alt={name} className="rounded-t-lg" />
      <div className="p-5">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h2>
      </div>
      <div className="px-6 pt-4 pb-2">
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 clamp">
          {copy}
        </p>
        <div className="grid grid-cols-3 gap-1 items-center">
          {alhocholic == "Alcoholic" && (
            <span className="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">
              {alhocholic}
            </span>
          )}
          {alhocholic == "Non-Alcoholic" && (
            <span className="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">
              {alhocholic}
            </span>
          )}
          <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
            {category}
          </span>
          <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
            {glass}
          </span>
        </div>
      </div>
    </div>
  );
}
