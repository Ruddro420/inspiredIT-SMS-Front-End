import {
  Bell,
  BookOpen,
  CircleUser,
  Dot,
  Home,
  LayoutPanelTop,
  Menu,
  Minus,
  Package2,
  PersonStanding,
  Plus,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

const Dashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState();
  const [studentNav, setStudentNav] = useState(false);
  const [staffNav, setStaffNav] = useState(false);
  const [subjectNav, setSubjectNav] = useState(false);
  const [classNav, setClassNav] = useState(false);

  const closeAllMenus = () => {
    setStudentNav(false);
    setStaffNav(false);
    setSubjectNav(false);
    setClassNav(false);
  };

  const studentNavHandler = () => {
    closeAllMenus();
    setStudentNav(!studentNav);
  };
  const staffNavHandler = () => {
    closeAllMenus();
    setStaffNav(!staffNav);
  };
  const subjectNavHandler = () => {
    closeAllMenus();
    setSubjectNav(!subjectNav);
  };
  const classNavHandler = () => {
    closeAllMenus();
    setClassNav(!classNav);
  };

  return (
    <>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-muted/40 md:block">
          <div className="flex h-full overflow-scroll max-h-screen flex-col gap-2">
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
              <Link href="/" className="flex items-center gap-2 font-semibold">
                <Package2 className="h-6 w-6" />
                <span className="">SMS ADMIN</span>
              </Link>
              <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                <Bell className="h-4 w-4" />
                <span className="sr-only">Toggle notifications</span>
              </Button>
            </div>
            <div className="flex-1">
              <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                <Link
                  to="/dashboard"
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-primary hover:text-white ${
                    selectedMenu === "dashboard"
                      ? "bg-primary text-primary-foreground"
                      : ""
                  }`}
                  onClick={() => setSelectedMenu("dashboard")}
                >
                  <Home className="h-4 w-4" />
                  Dashboard
                </Link>
                <Link
                  to="/dashboard/teachers"
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 mt-2 text-muted-foreground transition-all hover:text-white hover:bg-primary ${
                    selectedMenu === "teachers"
                      ? "bg-primary text-primary-foreground"
                      : ""
                  }`}
                  onClick={() => setSelectedMenu("teachers")}
                >
                  <PersonStanding className="h-4 w-4" />
                  Teachers
                </Link>

                {/* student  */}

                <button
                  className=""
                  onClick={() => {
                    studentNavHandler();
                  }}
                >
                  <div className="flex items-center justify-between">
                    <a
                      //onClick={navHandler}
                      href="#"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 mt-2 text-muted-foreground transition-all  `}
                      //onClick={() => setSelectedMenu("teachers")}
                    >
                      {/* <PersonStanding className="h-4 w-4" /> */}
                      <Users className="h-4 w-4" />
                      Students
                    </a>
                    {studentNav ? (
                      <Minus className="mt-2 h-4" />
                    ) : (
                      <Plus className="mt-2 h-4" />
                    )}
                  </div>
                </button>

                {studentNav ? (
                  <div className="">
                    <Link
                      to="/dashboard/students"
                      className={`flex items-center rounded-lg px-3 py-1 ml-3 mb-1 text-muted-foreground transition-all hover:text-white hover:bg-primary ${
                        selectedMenu === "students"
                          ? "bg-primary text-primary-foreground"
                          : ""
                      }`}
                      onClick={() => setSelectedMenu("students")}
                    >
                      <Dot className="h-8 w-8 hover:bg-[#f2f2f2]" />
                      View Student
                    </Link>
                    <Link
                      to="/dashboard/add-students"
                      className={`flex items-center rounded-lg px-3 py-1 ml-3 text-muted-foreground transition-all hover:text-white hover:bg-primary ${
                        selectedMenu === "add-students"
                          ? "bg-primary text-primary-foreground"
                          : ""
                      }`}
                      onClick={() => setSelectedMenu("add-students")}
                    >
                      <Dot className="h-8 w-8 hover:bg-[#f2f2f2]" />
                      Add Student
                    </Link>
                  </div>
                ) : (
                  ""
                )}

                {/* staff */}

                <button className="" onClick={staffNavHandler}>
                  <div className="flex items-center justify-between">
                    <a
                      //onClick={navHandler}
                      href="#"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 mt-2 text-muted-foreground transition-all `}
                      //onClick={() => setSelectedMenu("teachers")}
                    >
                      {/* <PersonStanding className="h-4 w-4" /> */}
                      <Users className="h-4 w-4" />
                      Staff
                    </a>
                    {studentNav ? (
                      <Minus className="mt-2 h-4" />
                    ) : (
                      <Plus className="mt-2 h-4" />
                    )}
                  </div>
                </button>

                {staffNav ? (
                  <div className="">
                    <Link
                      to="/dashboard/stuffs"
                      className={`flex items-center rounded-lg px-3 py-1 mb-1 ml-3 text-muted-foreground transition-all hover:text-white hover:bg-primary ${
                        selectedMenu === "staffs"
                          ? "bg-primary text-primary-foreground"
                          : ""
                      }`}
                      onClick={() => setSelectedMenu("staffs")}
                    >
                      <Dot className="h-8 w-8 hover:bg-[#f2f2f2]" />
                      View Staff
                    </Link>
                    <Link
                      to="/dashboard/add-staffs"
                      className={`flex items-center rounded-lg px-3 py-1 ml-3 text-muted-foreground transition-all hover:text-white hover:bg-primary ${
                        selectedMenu === "add-staffs"
                          ? "bg-primary text-primary-foreground"
                          : ""
                      }`}
                      onClick={() => setSelectedMenu("add-staffs")}
                    >
                      <Dot className="h-8 w-8 hover:bg-[#f2f2f2]" />
                      Add Staff
                    </Link>
                  </div>
                ) : (
                  ""
                )}

                {/* subject */}

                <button className="" onClick={subjectNavHandler}>
                  <div className="flex items-center justify-between">
                    <a
                      //onClick={navHandler}
                      href="#"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 mt-2 text-muted-foreground transition-all `}
                      //onClick={() => setSelectedMenu("teachers")}
                    >
                      {/* <PersonStanding className="h-4 w-4" /> */}
                      {/* <Users className="h-4 w-4" />? */}
                      <BookOpen className="h-4 w-4" />
                      Subject
                    </a>
                    {subjectNav ? (
                      <Minus className="mt-2 h-4" />
                    ) : (
                      <Plus className="mt-2 h-4" />
                    )}
                  </div>
                </button>

                {subjectNav ? (
                  <div className="">
                    <Link
                      to="/dashboard/subjects"
                      className={`flex items-center rounded-lg px-3 py-1 mb-1 ml-3 text-muted-foreground transition-all hover:text-white hover:bg-primary ${
                        selectedMenu === "subjects"
                          ? "bg-primary text-primary-foreground"
                          : ""
                      }`}
                      onClick={() => setSelectedMenu("subjects")}
                    >
                      <Dot className="h-8 w-8 hover:bg-[#f2f2f2]" />
                      View Subject
                    </Link>
                    <Link
                      to="/dashboard/add-subjects"
                      className={`flex items-center rounded-lg px-3 py-1 ml-3 text-muted-foreground transition-all hover:text-white hover:bg-primary ${
                        selectedMenu === "add-subjects"
                          ? "bg-primary text-primary-foreground"
                          : ""
                      }`}
                      onClick={() => setSelectedMenu("add-subjects")}
                    >
                      <Dot className="h-8 w-8 hover:bg-[#f2f2f2]" />
                      Add Subject
                    </Link>
                  </div>
                ) : (
                  ""
                )}

                {/* class */}

                <button className="" onClick={classNavHandler}>
                  <div className="flex items-center justify-between">
                    <a
                      //onClick={navHandler}
                      href="#"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 mt-2 text-muted-foreground transition-all `}
                      //onClick={() => setSelectedMenu("teachers")}
                    >
                      {/* <PersonStanding className="h-4 w-4" /> */}
                      <Users className="h-4 w-4" />
                      Class
                    </a>
                    {classNav ? (
                      <Minus className="mt-2 h-4" />
                    ) : (
                      <Plus className="mt-2 h-4" />
                    )}
                  </div>
                </button>

                {classNav ? (
                  <div className="">
                    <Link
                      to="/dashboard/classes"
                      className={`flex items-center rounded-lg px-3 py-1 mb-1 ml-3 text-muted-foreground transition-all hover:text-white hover:bg-primary ${
                        selectedMenu === "classes"
                          ? "bg-primary text-primary-foreground"
                          : ""
                      }`}
                      onClick={() => setSelectedMenu("classes")}
                    >
                      <Dot className="h-8 w-8 hover:bg-[#f2f2f2]" />
                      View Class
                    </Link>
                    <Link
                      to="/dashboard/add-classes"
                      className={`flex items-center rounded-lg px-3 py-1 ml-3 text-muted-foreground transition-all hover:text-white hover:bg-primary ${
                        selectedMenu === "add-classes"
                          ? "bg-primary text-primary-foreground"
                          : ""
                      }`}
                      onClick={() => setSelectedMenu("add-classes")}
                    >
                      <Dot className="h-8 w-8 hover:bg-[#f2f2f2]" />
                      Add Class
                    </Link>
                  </div>
                ) : (
                  ""
                )}

                <Link
                  to="/dashboard/sections"
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 mt-2 text-muted-foreground transition-all hover:text-white hover:bg-primary ${
                    selectedMenu === "sections"
                      ? "bg-primary text-primary-foreground"
                      : ""
                  }`}
                  onClick={() => setSelectedMenu("sections")}
                >
                  {/* <PersonStanding className="h-4 w-4" /> */}
                  <LayoutPanelTop className="h-4 w-4" />
                  Section
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------------------------------- */}
        {/* ---------------------------------------------------------------------------- */}

        <div className="flex flex-col">
          <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col">
                <nav className="grid gap-2 text-lg font-medium">
                  <Link
                    to="/dashboard"
                    className="flex items-center gap-2 text-lg font-semibold"
                  >
                    <Package2 className="h-6 w-6" />
                    <span className="sr-only">Acme Inc</span>
                  </Link>
                  <Link
                    to="/dashboard"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <Home className="h-5 w-5" />
                    Dashboard
                  </Link>
                </nav>
                <div className="mt-auto">
                  <Card>
                    <CardHeader>
                      <CardTitle>Upgrade to Pro</CardTitle>
                      <CardDescription>
                        Unlock all features and get unlimited access to our
                        support team.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button size="sm" className="w-full">
                        Upgrade
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </SheetContent>
            </Sheet>
            <div className="w-full flex-1">
              <form>
                <div className="relative">
                  <h1>Welcome To SMS</h1>
                </div>
              </form>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  <CircleUser className="h-5 w-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
