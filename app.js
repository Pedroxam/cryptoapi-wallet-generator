/*
  * By Pedram
  * Email: pedroxam@gmail.com
*/
	$(document).ready(function(){
		/**
		* Generate Code
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
			
			$('#waiting').show();
				
			$.ajax({
				type:'GET',
				url: API
			})
			.done(function(data){
				$('#waiting').hide();
				$('#result').show();
				$('#response').html("New address for deposit : " + data.address_in);
				$(that).removeClass('disabled');
			})
		})
	});
