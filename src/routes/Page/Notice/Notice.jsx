import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TooltipProvider } from "@/components/ui/tooltip";
// import ViewAccounts from "./ViewAccounts";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent } from "@/components/ui/tabs";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { MoreHorizontal } from "lucide-react";

const Notice = () => {
  return (
    <>
      {" "}
      <div style={{ overflow: "hidden" }}>
        <h1 className="text-2xl font-bold mb-3">Add Notice</h1>
        <form className="border p-5 rounded">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-3 gap-4">
            <label htmlFor="Name" className="md:col-span-1">
              Notice Title
              <Input type="text" name="name" placeholder="Notice Title" />
            </label>
            <label htmlFor="Tuition Fee" className="md:col-span-1">
              Type
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select Type</SelectLabel>
                    <SelectItem value="income">Income</SelectItem>
                    <SelectItem value="expense">Expense</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </label>
            <label htmlFor="Assign Teacher" className="md:col-span-1">
              Date
              <Input type="date" name="date" />
            </label>
            <label htmlFor="Image" className="md:col-span-1">
              Upload Notice
              <Input type="file" name="image" />
            </label>
          </div>
          <Button size="sm" className="h-8 gap-1 mt-5">
            Add Notice
          </Button>
        </form>
      </div>
      {/* View Account */}
      {/* <ViewAccounts /> */}
      <TooltipProvider>
        <main className="">
          <Tabs defaultValue="all">
            <TabsContent value="all">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle>View Notice Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Notice Title</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead className="hidden md:table-cell">
                          Date
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Salary</TableCell>
                        <TableCell>Income</TableCell>
                        <div className="flex items-center">
                          <TableCell>29.04.2024</TableCell>
                        </div>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </TooltipProvider>
    </>
  );
};

export default Notice;
