const Header2 = () => {
  const List = [
    {
      name: "Banglore",
    },
    {
      name: "Kolkata",
    },
    {
      name: "Delhi",
    },
    {
      name: "Hydrabad",
    },
    {
      name: "Banglore",
    },
    {
      name: "Jaipur",
    },
  ];
  return (
    <div className="flex px-10 py-3 bg-gray-100 justify-between">
      {List.map((item) => (
        <div key={item.name}>{item.name}</div>
      ))}
    </div>
  );
};

export default Header2;
