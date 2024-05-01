import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const PaySalary = () => {
  return (
    <>
      <Select placeholder='Select or Search Employee' className="w-[50%] mx-auto" options={options} />
      <div>
        <div>
          <h2 className="text-center text-3xl font-bold mt-10 mb-6">
            Pay Salary Form
          </h2>
          <div style={{ overflow: "hidden" }}>
            <form className="border p-5 rounded">
              <div className="grid grid-cols-1 md:grid-cols-3 mt-3 gap-4">
                <label htmlFor="Name" className="md:col-span-1">
                  Name
                  <Input type="text" name="name" placeholder="Name" />
                </label>
                <label htmlFor="Tuition Fee" className="md:col-span-1">
                  Salary Amount
                 
                  <Input type="text" name="salary" placeholder="Salary Amount" />
                </label>
                <label htmlFor="Assign Teacher" className="md:col-span-1">
                  Salary Month
                  <Input type="date" name="date" />
                </label>
              
              </div>
              <Button size="sm" className="h-8 gap-1 mt-5">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaySalary;
