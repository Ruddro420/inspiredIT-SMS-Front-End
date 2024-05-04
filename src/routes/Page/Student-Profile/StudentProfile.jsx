import { Activity, ArrowUpRight, Users } from "lucide-react";

import { TbCurrencyTaka } from "react-icons/tb";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";

const StudentProfile = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="">
        <div className="flex flex-col-reverse md:flex-row gap-6">
          <div className="w-full md:w-[66%]">
            <div className="flex gap-4">
              {/* card 1 */}
              <div className="bg-white p-6 rounded-lg border">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">
                  Card with no image
                </h2>
                <p className="text-gray-700">
                  This is my cool new card! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Obcaecati, id!
                </p>
              </div>
              {/* card 2 */}
              <div className="bg-white p-6 rounded-lg border">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">
                  Card with no image
                </h2>
                <p className="text-gray-700">
                  This is my cool new card! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Maiores, facere.
                </p>
              </div>
            </div>

            {/* container */}
            <div className="border mt-4 rounded-md">
              <CardHeader className="flex flex-row items-center">
                <div className="grid gap-2">
                  <CardTitle>Transactions</CardTitle>
                  <CardDescription>
                    Recent transactions from your organization.
                  </CardDescription>
                </div>
                <Button asChild size="sm" className="ml-auto gap-1">
                  <Link to="#">
                    View All
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead className="hidden xl:table-column">
                        Type
                      </TableHead>
                      <TableHead className="hidden xl:table-column">
                        Status
                      </TableHead>
                      <TableHead className="hidden xl:table-column">
                        Date
                      </TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Liam Johnson</div>
                        <div className="hidden text-sm text-muted-foreground md:inline">
                          liam@example.com
                        </div>
                      </TableCell>
                      <TableCell className="hidden xl:table-column">
                        Sale
                      </TableCell>
                      <TableCell className="hidden xl:table-column">
                        <Badge className="text-xs" variant="outline">
                          Approved
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                        2023-06-23
                      </TableCell>
                      <TableCell className="text-right">৳250.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Olivia Smith</div>
                        <div className="hidden text-sm text-muted-foreground md:inline">
                          olivia@example.com
                        </div>
                      </TableCell>
                      <TableCell className="hidden xl:table-column">
                        Refund
                      </TableCell>
                      <TableCell className="hidden xl:table-column">
                        <Badge className="text-xs" variant="outline">
                          Declined
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                        2023-06-24
                      </TableCell>
                      <TableCell className="text-right">৳150.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Noah Williams</div>
                        <div className="hidden text-sm text-muted-foreground md:inline">
                          noah@example.com
                        </div>
                      </TableCell>
                      <TableCell className="hidden xl:table-column">
                        Subscription
                      </TableCell>
                      <TableCell className="hidden xl:table-column">
                        <Badge className="text-xs" variant="outline">
                          Approved
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                        2023-06-25
                      </TableCell>
                      <TableCell className="text-right">৳350.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Emma Brown</div>
                        <div className="hidden text-sm text-muted-foreground md:inline">
                          emma@example.com
                        </div>
                      </TableCell>
                      <TableCell className="hidden xl:table-column">
                        Sale
                      </TableCell>
                      <TableCell className="hidden xl:table-column">
                        <Badge className="text-xs" variant="outline">
                          Approved
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                        2023-06-26
                      </TableCell>
                      <TableCell className="text-right">৳450.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Liam Johnson</div>
                        <div className="hidden text-sm text-muted-foreground md:inline">
                          liam@example.com
                        </div>
                      </TableCell>
                      <TableCell className="hidden xl:table-column">
                        Sale
                      </TableCell>
                      <TableCell className="hidden xl:table-column">
                        <Badge className="text-xs" variant="outline">
                          Approved
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                        2023-06-27
                      </TableCell>
                      <TableCell className="text-right">৳550.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </div>
          </div>

          <div className="md:w-[33%] w-full border rounded-md p-4">
            <div className="rounded-full flex justify-center">
              <img
                src="https://i.ibb.co/NVV2k1T/joshua-hanson-e616t35-Vbeg-unsplash.jpg"
                className="rounded-full w-[150px] h-[150px]"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center items-center mt-4 mb-6">
              <h2 className="text-2xl font-bold ">Sharif Hasan</h2>
              <p>username@gmail.com</p>
            </div>
            <hr />
            <div className="mt-6">
              <h3 className="text-lg font-bold">Sharif Hasan</h3>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                rerum hic iste, adipisci dolorem perferendis cum aliquid,
                officia veniam nam omnis quae similique nihil. Rem, id. Ad
                repellendus modi dignissimos?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
