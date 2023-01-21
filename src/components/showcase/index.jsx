import Item from "./item";
export default function Showcase({
  img,
  name,
  alcoholic,
  category,
  glass,
  prep,
  ingredients1,
  ingredients2,
  ingredients3,
  cantidad1,
  cantidad2,
  cantidad3,
}) {
  return (
    <div className=" flex max-w-xl flex-col m-8 bg-white border rounded-lg shadow-md md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={img}
        alt={name}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <span>
          <ul className="text-gray-700 dark:text-gray-400">
            Ingredientes:
            {ingredients1 && <Item negrita="true" name={ingredients1} />}
            {cantidad1 && <Item name={cantidad1} />}
            {ingredients2 && <Item negrita="true" name={ingredients2} />}
            {cantidad2 && <Item name={cantidad2} />}
            {ingredients3 && <Item negrita="true" name={ingredients3} />}
            {cantidad3 && <Item name={cantidad3} />}
          </ul>
        </span>
        <hr />
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {prep}
        </p>
        <div>
          {alcoholic == "Alcoholic" && (
            <span className="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">
              {alcoholic}
            </span>
          )}
          {alcoholic == "Non alcoholic" && (
            <span className="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">
              {alcoholic}
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
