export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your pakking list</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed === true).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "you got everything!Ready to go.."
          : `${numItems} items on your list.And you already packed ${numPacked} (
        ${percentage}%)`}
      </em>
    </footer>
  );
}
