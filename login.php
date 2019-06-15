<!DOCTYPE HTML>
<!--
	Road Trip by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
-->
<html>
	<head>
		<title>Daily quotations</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="stylesheet" href="assets/css/main.css" />
		<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
	</head>
	<body class="subpage">

		<!-- Header -->
			<header id="header" class="alt">
				<a href="#menu"><span>Menu</span></a>
			</header>

		<!-- Nav -->
			<nav id="menu">
				<ul class="links">
					<li><a href="index.html">Home</a></li>
					<li><a href="generic1.html">1. Positive quotations</a></li>
					<li><a href="generic2.html">2. Negative quotations</a></li>
					<li><a href="generic3.html">3. Celebrities' quotations</a></li>
					<li><a href="generic4.html">4. Engineers' quotations</a></li>
					<li><a href="elements.html">login</a></li>
				</ul>
			</nav>

		<!-- Main -->
			<?php
			$account=$_POST['account'];
			$password=$_POST['password'];
			
			$conn = new mysqli("localhost","root","nofulai0626","final");

			if($conn->connect_error){
				die("Connection failed: ".$conn->connect_error);
			}

			$sql="SELECT * FROM `member` WHERE `account` = '$account' AND `password` = '$password'";
			$result = $conn->query($sql);
			$sum0 = 0;
			$sum1 = 0;
			$sum2 = 0;
			$sum3 = 0;
			$sum4 = 0;
			if ($result->num_rows > 0) {
				$show= "SELECT * FROM `booking`";
				
				$result2 = $conn->query($show) ;
				$num = array();
				$productType = array();
				
				if ($result2->num_rows >0)
				{
					print("<table><tr>
					<td>姓名</td>
					<td>email</td>
					<td>電話</td>
					<td>種類</td>
					<td>數量</td>
					<td>圖片</td>
					</tr>");
					while($row= $result2 ->fetch_assoc())
					{
						print("<tr>");
						foreach ($row as $value)
						print( "<td>$value</td>" );
						print("</tr>");
						array_push($num, $row['number']);
						array_push($productType, $row['productType']);
						 
						 //$row['number'];
						 //$row['productType']
						 
						if ($row['productType'] == 0){
							$sum0 += $row['number'];
						}
						else if ($row['productType'] == 1){
							$sum1 += $row['number'];
						}
						else if ($row['productType'] == 2){
							$sum2 += $row['number'];
						}
						else if ($row['productType'] == 3){
							$sum3 += $row['number'];
						}
						else if ($row['productType'] == 4){
							$sum4 += $row['number'];
						}
					}
					print("</table>");
				}
				
				
				print('
				<div id="columnchart_values"></div>
				<script type="text/javascript">
				google.charts.load("current", {packages:["corechart"]});
				google.charts.setOnLoadCallback(drawChart);
				function drawChart() {
				  var data = google.visualization.arrayToDataTable([
					["商品", "數量", { role: "style" } ],
					["帆布袋", '.$sum0.', "red"],
					["手機殼", '.$sum1.', "orange"],
					["明信片", '.$sum2.', "yellow"],
					["水瓶", '.$sum3.', "yellowgreen"],
					["抱枕", '.$sum4.', "yellow green"]
				  ]);

				  var view = new google.visualization.DataView(data);
				  view.setColumns([0, 1,
								   { calc: "stringify",
									 sourceColumn: 1,
									 type: "string",
									 role: "annotation" },
								   2]);

				  var options = {
					title: "商品種類數量統計",
					width: 600,
					height: 400,
					bar: {groupWidth: "95%"},
					legend: { position: "none" },
				  };
				  var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
				  chart.draw(view, options);
				}
				</script>');
			
			} 
			else {
				echo "<div>Login failed</div>";
			}
			$conn->close();
			?>
			

		<!-- Scripts -->
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.scrolly.min.js"></script>
			<script src="assets/js/jquery.scrollex.min.js"></script>
			<script src="assets/js/skel.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>

</body>
</html>