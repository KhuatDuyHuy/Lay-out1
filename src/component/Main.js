import React from "react";
import "../component/main.css";
import "bootstrap/dist/css/bootstrap.min.css"

function Main() {
  return (
    <div class="wrapper col-2">
      <div class="wrapper d-flex">
	<div class="sidebar">
		<small class="text-muted pl-3">WIDR PAY</small>
		<ul>
			<li><a href="#">Dashboard</a></li>
			<li><a href="#">Payment Page</a></li>
			<li><a href="#">Invoices </a></li>
		</ul>
		<small class="text-muted px-3">PRODUCTIVITY TOOLS</small>
		<ul>
			<li><a href="#">Online Scheduler</a></li>
			<li><a href="#">Video Meeting</a></li>
			<li><a href="#">Public Profile</a></li>
		</ul>
		<small class="text-muted px-3">GROW YOUR CLIENT BASE</small>
		<ul>
			<li><a href="#">Share</a></li>
			<li><a href="#">Add to Website</a></li>
		</ul>
	</div>
</div>
      </div>
      
  );
}
export default Main;
