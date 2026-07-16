import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import "./dashboard.module.css";


export default function DashboardLayout({
children
}){


return (

<div className="layout">


<Sidebar />


<div className="main">


<Header />


<main>

{children}

</main>


</div>


</div>

)


}