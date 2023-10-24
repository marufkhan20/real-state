import Button from "../ui/Button";
import Select from "../ui/Select";

const SearchBar = () => {
  const options = [
    "chicago",
    "London",
    "Los Angeles",
    "New York",
    "New Jersey",
  ];
  return (
    <section className="-translate-y-[50%]">
      <div className="container">
        <div className="bg-white px-[30px] py-[38px] box-shadow border rounded-md flex items-center justify-between gap-5 w-[80%] mx-auto">
          <Select title="Choose Area" options={options} className="w-[25%]" />
          <Select
            title="Property Status"
            options={options}
            className="w-[25%]"
          />
          <Select title="Appartment" options={options} className="w-[25%]" />
          <div>
            <Button>FIND NOW</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
