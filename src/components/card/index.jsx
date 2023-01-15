export default function Card({ name, img, alhocholic, glass, category, copy }) {
  return (
    <div className="max-w-sm bg-gray-200 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
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
          <span className="inline-flex items-center m-auto px-3 py-2 text-sm  font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {alhocholic}
          </span>
          <span className="inline-flex items-center m-auto px-3 py-2 text-sm  font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {glass}
          </span>
          <span className="inline-flex items-center m-auto px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {category}
          </span>
        </div>
      </div>
    </div>
  );
}
