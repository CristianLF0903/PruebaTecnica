import Btn from "@/components/Btn";
import { Dialog } from "@/components/Dialog";
import EmployeesTable from "@/components/EmployeesTable";
import Message from "@/components/Message";
import SearchBox from "@/components/SearchBox";

export default function Home() {
  return (
    <div>
      <section className="flex justify-between items-center py-6">
        <SearchBox/>
        <Btn color="blue" type="new">
          + New Employee
        </Btn>
      </section>
      <Message />
      <main>
        <EmployeesTable />
      </main>

      <Dialog></Dialog>
    </div>
  );
}
