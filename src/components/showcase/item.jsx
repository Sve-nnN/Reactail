export default function Item({ name, negrita }) {
  if (negrita) {
    return (
      <li className="font-bold text-gray-700 dark:text-gray-400">{name}</li>
    );
  }
  return <li className="text-gray-700 dark:text-gray-400">{name}</li>;
}
