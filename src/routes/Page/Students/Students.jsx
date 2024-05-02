import { File, ListFilter, MoreHorizontal, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { viewStudentsData } from "@/lib/api";

export default function Students() {
  const [students, setStudents] = useState([]);
  /* Fetch students Data */
  useEffect(() => {
    viewStudentsData()
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(students);
  return (
    <TooltipProvider>
      <main className="">
        <Tabs defaultValue="all">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="active">Present</TabsTrigger>
              <TabsTrigger value="draft">Leave</TabsTrigger>
            </TabsList>
            <div className="ml-auto flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <ListFilter className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                      Filter
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked>
                    Present
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Leave</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button size="sm" variant="outline" className="h-8 gap-1">
                <File className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Export
                </span>
              </Button>
              <Button size="sm" className="h-8 gap-1">
                <PlusCircle className="h-3.5 w-3.5" />
                <Link
                  to="/dashboard/add-students"
                  className="sr-only sm:not-sr-only sm:whitespace-nowrap"
                >
                  Add Students
                </Link>
              </Button>
            </div>
          </div>
          <TabsContent value="all">
            <Card x-chunk="dashboard-06-chunk-0">
              <CardHeader>
                <CardTitle>Students</CardTitle>
                <CardDescription>Manage your students here.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="hidden w-[100px] sm:table-cell">
                        <span className="sr-only">Image</span>
                      </TableHead>
                      <TableHead>ID No</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead className="hidden md:table-cell">
                        Phone
                      </TableHead>
                      <TableHead className="hidden md:table-cell">
                        Address
                      </TableHead>
                      <TableHead className="hidden md:table-cell">
                        Class-Section
                      </TableHead>
                      <TableHead className="hidden md:table-cell">
                        Action
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {students.map((item) => {
                      return (
                        <>
                          <TableRow>
                            <TableCell className="hidden sm:table-cell">
                              <img
                                alt="Product image"
                                className="aspect-square rounded-md object-cover"
                                height="64"
                                src="https://static.vecteezy.com/system/resources/thumbnails/006/487/917/small_2x/man-avatar-icon-free-vector.jpg"
                                width="64"
                              />
                            </TableCell>
                            <TableCell className="font-medium">
                              {item.id_no}
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                            {item.name}
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                            {item.phone}
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                            {item.present_address}
                            </TableCell>
                            <TableCell>{item.class.name}  {item.section && `- ${item.section.name}`}</TableCell>
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
                                  <DropdownMenuItem>View</DropdownMenuItem>
                                  <DropdownMenuItem>Edit</DropdownMenuItem>
                                  <DropdownMenuItem>Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        </>
                      );
                    })}
                  </TableBody>
                </Table>
              </CardContent>
              {/* <CardFooter>
                <div className="text-xs text-muted-foreground">
                  Showing <strong>1-10</strong> of <strong>32</strong> products
                </div>
              </CardFooter> */}
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </TooltipProvider>
  );
}
