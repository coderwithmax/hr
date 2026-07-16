export default function DashboardCard({
 title,
 value,
 icon
}){


return(

<div className="card">

<div>

<h4>
{title}
</h4>


<h2>
{value}
</h2>

</div>


<div className="icon">

{icon}

</div>


</div>

)


}