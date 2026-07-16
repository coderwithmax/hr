"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Sidebar() {

  const router = useRouter();


  const logout = async()=>{

    await fetch("/api/auth/logout",{
      method:"POST"
    });

    router.push("/login");

  };


  return (

    <aside className="sidebar">

      <h2 className="logo">
        HRM System
      </h2>


      <nav>

        <Link href="/dashboard">
          Dashboard
        </Link>


        <Link href="/dashboard/employees">
          Employees
        </Link>


        <Link href="/dashboard/users">
          Users
        </Link>


        <Link href="/dashboard/departments">
          Departments
        </Link>


        <Link href="/dashboard/attendance">
          Attendance
        </Link>


        <Link href="/dashboard/payroll">
          Payroll
        </Link>


        <Link href="/dashboard/settings">
          Settings
        </Link>


      </nav>


      <button 
        className="logout"
        onClick={logout}
      >
        Logout
      </button>


    </aside>

  );

}