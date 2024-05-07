// import { Activity, ArrowUpRight, Users } from "lucide-react";

// import { TbCurrencyTaka } from "react-icons/tb";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Link } from "react-router-dom";

// const StudentProfile = () => {
//   return (
//     <div className="container mx-auto px-4">
//       <div className="">
//         <div className="flex justify-between flex-col-reverse md:flex-row gap-6">
//           <div className="w-full md:w-[67%]">
//             <div className="flex gap-4">
//               {/* card 1 */}
//               <div className="bg-white p-6 rounded-lg border">
//                 <h2 className="text-2xl font-bold mb-2 text-gray-800">
//                   Card with no image
//                 </h2>
//                 <p className="text-gray-700">
//                   This is my cool new card! Lorem ipsum dolor sit amet
//                   consectetur adipisicing elit. Obcaecati, id!
//                 </p>
//               </div>
//               {/* card 2 */}
//               <div className="bg-white p-6 rounded-lg border">
//                 <h2 className="text-2xl font-bold mb-2 text-gray-800">
//                   Card with no image
//                 </h2>
//                 <p className="text-gray-700">
//                   This is my cool new card! Lorem ipsum dolor sit amet
//                   consectetur adipisicing elit. Maiores, facere.
//                 </p>
//               </div>
//             </div>

//             {/* container */}
//             <div className="border mt-4 rounded-md">
//               <CardHeader className="flex flex-row items-center">
//                 <div className="grid gap-2">
//                   <CardTitle>Transactions</CardTitle>
//                   <CardDescription>
//                     Recent transactions from your organization.
//                   </CardDescription>
//                 </div>
//                 <Button asChild size="sm" className="ml-auto gap-1">
//                   <Link to="#">
//                     View All
//                     <ArrowUpRight className="h-4 w-4" />
//                   </Link>
//                 </Button>
//               </CardHeader>
//               <CardContent>
//                 <Table>
//                   <TableHeader>
//                     <TableRow>
//                       <TableHead>Customer</TableHead>
//                       <TableHead className="hidden xl:table-column">
//                         Type
//                       </TableHead>
//                       <TableHead className="hidden xl:table-column">
//                         Status
//                       </TableHead>
//                       <TableHead className="hidden xl:table-column">
//                         Date
//                       </TableHead>
//                       <TableHead className="text-right">Amount</TableHead>
//                     </TableRow>
//                   </TableHeader>
//                   <TableBody>
//                     <TableRow>
//                       <TableCell>
//                         <div className="font-medium">Liam Johnson</div>
//                         <div className="hidden text-sm text-muted-foreground md:inline">
//                           liam@example.com
//                         </div>
//                       </TableCell>
//                       <TableCell className="hidden xl:table-column">
//                         Sale
//                       </TableCell>
//                       <TableCell className="hidden xl:table-column">
//                         <Badge className="text-xs" variant="outline">
//                           Approved
//                         </Badge>
//                       </TableCell>
//                       <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
//                         2023-06-23
//                       </TableCell>
//                       <TableCell className="text-right">৳250.00</TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell>
//                         <div className="font-medium">Olivia Smith</div>
//                         <div className="hidden text-sm text-muted-foreground md:inline">
//                           olivia@example.com
//                         </div>
//                       </TableCell>
//                       <TableCell className="hidden xl:table-column">
//                         Refund
//                       </TableCell>
//                       <TableCell className="hidden xl:table-column">
//                         <Badge className="text-xs" variant="outline">
//                           Declined
//                         </Badge>
//                       </TableCell>
//                       <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
//                         2023-06-24
//                       </TableCell>
//                       <TableCell className="text-right">৳150.00</TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell>
//                         <div className="font-medium">Noah Williams</div>
//                         <div className="hidden text-sm text-muted-foreground md:inline">
//                           noah@example.com
//                         </div>
//                       </TableCell>
//                       <TableCell className="hidden xl:table-column">
//                         Subscription
//                       </TableCell>
//                       <TableCell className="hidden xl:table-column">
//                         <Badge className="text-xs" variant="outline">
//                           Approved
//                         </Badge>
//                       </TableCell>
//                       <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
//                         2023-06-25
//                       </TableCell>
//                       <TableCell className="text-right">৳350.00</TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell>
//                         <div className="font-medium">Emma Brown</div>
//                         <div className="hidden text-sm text-muted-foreground md:inline">
//                           emma@example.com
//                         </div>
//                       </TableCell>
//                       <TableCell className="hidden xl:table-column">
//                         Sale
//                       </TableCell>
//                       <TableCell className="hidden xl:table-column">
//                         <Badge className="text-xs" variant="outline">
//                           Approved
//                         </Badge>
//                       </TableCell>
//                       <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
//                         2023-06-26
//                       </TableCell>
//                       <TableCell className="text-right">৳450.00</TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell>
//                         <div className="font-medium">Liam Johnson</div>
//                         <div className="hidden text-sm text-muted-foreground md:inline">
//                           liam@example.com
//                         </div>
//                       </TableCell>
//                       <TableCell className="hidden xl:table-column">
//                         Sale
//                       </TableCell>
//                       <TableCell className="hidden xl:table-column">
//                         <Badge className="text-xs" variant="outline">
//                           Approved
//                         </Badge>
//                       </TableCell>
//                       <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
//                         2023-06-27
//                       </TableCell>
//                       <TableCell className="text-right">৳550.00</TableCell>
//                     </TableRow>
//                   </TableBody>
//                 </Table>
//               </CardContent>
//             </div>
//           </div>

//           <div className="md:w-[33%] w-full border rounded-md p-4">
//             <div className="rounded-full flex justify-center">
//               <img
//                 src="https://i.ibb.co/NVV2k1T/joshua-hanson-e616t35-Vbeg-unsplash.jpg"
//                 className="rounded-full w-[150px] h-[150px]"
//                 alt=""
//               />
//             </div>
//             <div className="flex flex-col justify-center items-center mt-4 mb-6">
//               <h2 className="text-2xl font-bold ">Sharif Hasan</h2>
//               <p>username@gmail.com</p>
//             </div>
//             <hr />
//             <div className="mt-6">
//               <h3 className="text-lg font-bold">Sharif Hasan</h3>
//               <p className="text-justify">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
//                 rerum hic iste, adipisci dolorem perferendis cum aliquid,
//                 officia veniam nam omnis quae similique nihil. Rem, id. Ad
//                 repellendus modi dignissimos?
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentProfile;

const StudentProfile = () => {
  return (
    <div>
      <div className="mx-auto">
        <h1 className="text-3xl font-bold text-center">
          UDAY NARAYAN SIKHSAN SANSTHAN
        </h1>
        <div className="flex justify-between  mx-auto items-center">
          <img
            src="https://i.ibb.co/vwdqddp/joshua-hanson-e616t35-Vbeg-unsplash.jpg"
            alt="Image"
            className="h-[150px] w-[150px] rounded-full"
          />

          <div className="text-center">
            <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor</p>
            <p>Lorem ipsum dolor sit amet. Lorem, </p>
            <p>Lorem ipsum dolor sit.</p>
            <p>Academic Report</p>
            <p>Academic Session: 2019-2020</p>
            <p>class: 4</p>
          </div>
          <img
            src="https://i.ibb.co/vwdqddp/joshua-hanson-e616t35-Vbeg-unsplash.jpg"
            alt=""
            className="h-[150px] w-[150px] "
          />
        </div>

        <div className="flex justify-between  mt-4">
          <div className="w-[50%]">
            <table className="w-full">
              <tr>
                <td>Name of the Student</td>
                <th className="text-start">: Mr. Shahbaz</th>
              </tr>
              <tr>
                <td>Father&rsquo;s Name</td>
                <th className="text-start">: Mr. Alam</th>
              </tr>
              <tr>
                <td>Mother&rsquo;s Name</td>
                <th className="text-start">: Ms. Parveen</th>
              </tr>
              <tr>
                <td>Address</td>
                <th className="text-start">: Rangpur, Bangladesh</th>
              </tr>
            </table>
          </div>
          <div className="w-[50%]">
            <table className="w-full">
              <tr>
                <td>Roll No.</td>
                <th className="text-start">: N01</th>
              </tr>
              <tr>
                <td>Admission NO.</td>
                <th className="text-start">: 111</th>
              </tr>
              <tr>
                <td>Date of Birth</td>
                <th className="text-start">: 24/04/14</th>
              </tr>
            </table>
          </div>
        </div>
        {/* table */}
        <div className="">
          <div>
            <table className="border-collapse border border-black w-full mt-10 text-center">
              <tr className="">
                <th className="border border-black">Scholastic Areas</th>
                <th className="border border-black" colSpan="2">
                  Term 1
                </th>
                <th className="border border-black" colSpan="2">
                  Overall
                </th>
              </tr>
              <tr className="font-bold">
                <td rowSpan="2" className="border border-black">
                  Subject
                </td>
                <td className="border border-black">Half Yearly</td>
                <td className="border border-black">Total</td>
                <td className="border border-black text-center">Grand Total</td>
                <td rowSpan="2" className="border border-black">
                  Grade
                </td>
              </tr>
              <tr>
                <td className="border border-black">60</td>
                <td className="border border-black">60</td>
                <td className="border border-black">60</td>
              </tr>
              <tr>
                <td className="border border-black">Bangla</td>
                <td className="border border-black text-center">50</td>
                <td className="border border-black text-center">55</td>
                <td className="border border-black text-center">52</td>
                <td className="border border-black text-center">B</td>
              </tr>
              <tr>
                <td className="border border-black">Bangla</td>
                <td className="border border-black text-center">50</td>
                <td className="border border-black text-center">55</td>
                <td className="border border-black text-center">52</td>
                <td className="border border-black text-center">B</td>
              </tr>
              <tr>
                <td className="border border-black">Bangla</td>
                <td className="border border-black text-center">50</td>
                <td className="border border-black text-center">55</td>
                <td className="border border-black text-center">52</td>
                <td className="border border-black text-center">B</td>
              </tr>
              <tr className="w-full">
                <td className="border border-black">Bangla</td>
                <td className="border border-black text-center">50</td>
                <td className="border border-black text-center">55</td>
                <td className="border border-black text-center">52</td>
                <td className="border border-black text-center">B</td>
              </tr>
            </table>
            <table className="border-collapse border border-black w-full">
              <tr className="font-bold text-center">
                <td className="border border-black">Attendance</td>
                <td className="border border-black">0/160</td>
                <td className="border border-black">Total Marks</td>
                <td className="border border-black">303/350</td>
                <td className="border border-black">Percentage</td>
                <td className="border border-black">85%</td>
                <td className="border border-black">Grade</td>
                <td className="border border-black px-4">B</td>
              </tr>
            </table>
          </div>
          <div>
            <table className="border-collapse border border-black w-full mt-10 text-center">
              <tr>
                <th className="border border-black">
                  Lorem ipsum dolor sit amet.
                </th>
                <th className="border border-black">Term-1</th>
                <th className="border border-black">Term-2</th>
              </tr>
              <tr>
                <td className="border border-black">Uniform</td>
                <td className="border border-black">A+</td>
                <td className="border border-black"></td>
              </tr>
              <tr>
                <td className="border border-black ">Uniform</td>
                <td className="border border-black">A+</td>
                <td className="border border-black"></td>
              </tr>
              <tr>
                <td className="border border-black">Uniform</td>
                <td className="border border-black">A+</td>
                <td className="border border-black"></td>
              </tr>
              <tr>
                <td className="border border-black">Uniform</td>
                <td className="border border-black">A+</td>
                <td className="border border-black"></td>
              </tr>
            </table>
          </div>
          <div className="h-10 mt-4 bg-black w-full">
            <h3 className="text-2xl font-bold text-white text-center">
              To Get This Exam Result Visit: www.com
            </h3>
          </div>
          <div className="flex justify-between font-medium mt-8">
            <p>Sign of Class Teacher</p>
            <p>Sign of Principle</p>
            <p>Sign of Manager</p>
          </div>
          <div>
            <p className="border-t-4 border-black text-center mt-4 font-medium">
              Instructions
            </p>
          </div>
          <div>
            <p>
              Grading scale for scholastic areas: Grades are awarded on a
              5-point grading scale as follows-
            </p>
            <table className="w-full text-center">
              <tr>
                <td className="border border-black font-medium">
                  Marks Range In(%)
                </td>
                <td className="border border-black">91-100</td>
                <td className="border border-black">81-90</td>
                <td className="border border-black">71-80</td>
                <td className="border border-black">61-70</td>
                <td className="border border-black">51-60</td>
                <td className="border border-black">41-50</td>
                <td className="border border-black">32-40</td>
              </tr>
              <tr>
                <td className="border border-black font-medium">Grade</td>
                <td className="border border-black">A+</td>
                <td className="border border-black">A</td>
                <td className="border border-black">A-</td>
                <td className="border border-black">B+</td>
                <td className="border border-black">B</td>
                <td className="border border-black">C</td>
                <td className="border border-black">D</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
