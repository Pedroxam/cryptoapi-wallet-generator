<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Cryptapi Wallet Generator</title>
<link rel='stylesheet' href='./bootstrap.min.css'>
<script src="./jquery.min.js"></script>
<style>#result, #waiting{display: none}</style>
</head>
<body class="my-3" style="background:#EEE;">
<div class="container">


<div class="card">
	<div class="card-body">
		<h3 class="text-center mb-4">Cryptapi Wallet Generator</h3>
		<div class="row">
			<div class="col-md-6">
				<label>Coin</label>
				<select id="coin" class="form-control">
					<option value="btc">BTC</option>
					<option value="eth">ETH</option>
					<option value="bch">BCH</option>
					<option value="ltc">LTC</option>
					<option value="usdt">USDT</option>
				</select>
			</div>
			<div class="col-md-6">
				<label>Wallet Address</label>
				<input type="text" id="wallet" class="form-control" placeholder="...">
			</div>
			<div class="col-md-6">
				<label class="mt-3">Callback URL</label>
				<input type="url" id="callback" class="form-control" placeholder="http://">
			</div>
			<div class="col-md-6">
				<label class="mt-3">Email (optional)</label>
				<input type="email" id="email" class="form-control" placeholder="name@example.com">
			</div>
			<div class="col-md-12 text-center">
				<button id="generate" class="btn btn-danger mt-4">Generate</button>
			</div>
		</div>
	</div>
</div>

<hr/>

<div class="card" id="result">
	<div class="card-body">
		<h3 class="text-center mb-4">Result</h3>
		<div class="text-center" id="waiting">Please Wait</div>
		<div id="response"></div>
	</div>
</div>
</div><!-- container -->
<script src="./bootstrap.min.js"></script>
<script src="./app.js"></script>
</body>
</html>
