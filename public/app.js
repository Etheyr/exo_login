$(document).ready(function(){

	'use strict';

	var app = {

		email : null,
		mdp : null,

		init: function(){

			app.recupInput();
			$('form').on('submit',this.recupInput.bind(this));

		},
		recupInput: function(){

			$('#email').val();
			$('#mdp').val();

		},
		verifier: function(){


		},
		submitForm : function(data){

			$.ajax({

				type :'POST',
				url : "localhost:3451/login",
				data : data,
				success : this.success
			});
		},
		success: function() {
			alert('Gg rumble'); 
		},



	}
	app.init();
});