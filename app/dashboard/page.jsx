import DashboardCard from "@/components/DashboardCard";


export default function Dashboard(){


return(

<div>


<h1>
HRM Dashboard
</h1>


<div className="cards">


<DashboardCard
title="Total Employees"
value="250"
icon="👨‍💼"
/>



<DashboardCard
title="Departments"
value="12"
icon="🏢"
/>



<DashboardCard
title="Present Today"
value="220"
icon="✅"
/>



<DashboardCard
title="Payroll"
value="$45,000"
icon="💰"
/>


</div>



</div>

)


}