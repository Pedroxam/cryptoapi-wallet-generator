/*
  * By Pedram
  * Email: pedroxam@gmail.com
*/
	$(document).ready(function(){
		/**
		* Generate Wallet
		*/
		$('#generate').click(function(){
			
			if($('#wallet').val() == "") {
				return alert('Please Enter Wallet Address');
			}
			
			if($('#callback').val() == "") {
				return alert('Please Enter Callback URL');
			}
			
			var that = this;
			
			$(that).addClass('disabled');
			
			let coin = $('#coin').val()
			let myAddress = $('#wallet').val()
			let email = $('#email').val()
			
			let myCallBack = encodeURIComponent($('#callback').val());
			
			let API = `https://api.cryptapi.io/${coin}/create/?callback=${myCallBack}&address=${myAddress}&pending=1`;
			
			if(email !== "")
				API = `https://api.cryptapi.io/${coin}/create/?callback=${myCallBack}&address=${myAddress}&pending=1&email=${email}`;
			
			if(coin === 'doge' || coin === 'ada' || coin === 'xrp' || coin === 'bnb'){
				API = `https://api.cryptapi.io/bep20/${coin}/create/?callback=${myCallBack}&address=${myAddress}&pending=1`;
			}
			
			if(coin === 'usdt'){
				API = `https://api.cryptapi.io/erc20/${coin}/create/?callback=${myCallBack}&address=${myAddress}&pending=1`;
			}
			
			$('#waiting').show();
			$('#url_result').hide();
			// $('#u_r').html("");
			$('#result').show();
			
			$.ajax({
				url: API,
				method: "GET",
				dataType: 'json',
				success: function (data) {
					$('#waiting').hide();
					$('#result').show();
					
					if(data.status === 'error'){
						$('#response').html(data.error);
					}
					else {
						$('#response').html("New address for deposit : " + data.address_in);
					}
				},
				error: function (e) {
					$('#response').html("");
					e.forEach((a, i) => {
						$('#response').append("ERROR: " + a + "\n");
					});
				}
			});
			
			$('#url_result').show();
			$('#u_r').html("URL Generated: " + API);

			setTimeout(() => {
				$(that).removeClass('disabled');
			}, 2000);
		})
		
		/**
		* Callback Checker
		*/
		$('#callback_check').click(function(){
			
			if($('#callback_c').val() == "") {
				return alert('Please Enter Callback URL');
			}
			if($('#amount').val() == "") {
				return alert('Please Enter Amount value');
			}
			if($('#txid_in').val() == "") {
				return alert('Please Enter txid');
			}
			if($('#confirmations').val() == "") {
				return alert('Please Enter confirmations');
			}
			
			var callback = $('#callback_c').val();
			var amount = $('#amount').val();
			var coin = $('#coin_c').val();
			var txid_in = $('#txid_in').val();
			var confirmations = $('#confirmations').val();
			
			let and = "?";
			
			if(callback.includes("?")){
				and = "&";
			}
			
			let callbackURL = `${callback}${and}value_coin=${amount}&coin=${coin}&txid_in=${txid_in}&confirmations=${confirmations}`;
			
			var that = this;
			
			$(that).addClass('disabled');
			$('#waiting_c').show();
			
			$.ajax({
				type:'GET',
				url: callbackURL
			})
			.done(function(response){
				$('#result_c').show();
				$('#waiting_c').hide();
				$('#response_c').html(response);
				$(that).removeClass('disabled');
			})
		})
	});
