$(document).ready(function(){

	'use strict';

	var app = {

		init: function(){

			$('form').on('submit',this.recupInput.bind(this));

		},
		recupInput: function(event){

			event.preventDefault();

			var email = $('#email').val();
			var mdp = $('#mdp').val();
			this.submitForm({email:email,mdp:mdp});

		},
		verifier: function(data){

			if(data.err === true){
				$('#error').show();
				$('#email').css('border' , '2px solid #ff7473');
				$('#mdp').css('border' , '2px solid #ff7473');
			}else{
				 document.location.href="http://localhost:3451/login.html";
			}
		},
		submitForm : function(data){

			console.log(data);

			$.ajax({

				type :'POST',
				url : $("form").attr("action"),
				data : data,
				success : this.verifier
			});
		}
	}
	app.init();
});