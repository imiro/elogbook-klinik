<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="shortcut icon" href="<?=base_url()?>assets/images/codeigniter_logo.png" type="image/x-icon">

    <title>Sekolah OnkoGin - Login</title>

    <!-- Bootstrap Core CSS -->
    <link href="<?=base_url()?>assets/css/bootstrap.min.css" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="<?=base_url()?>assets/css/metisMenu.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="<?=base_url()?>assets/css/sb-admin-2.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="<?=base_url()?>assets/css/font-awesome.min.css" rel="stylesheet" type="text/css">


</head>

<body>
<center>           

<section class="py-5" style="background:url('assets/images/grey.jpeg'); background-size:cover; color:black; border-top:2px SOLID "black">

        <div class="container-fluid">
            <div class="row">
            <div class="col-sm-3"> <img src="assets/images/FKUI.png" width=100%> </div>
            <div class="col-sm-6"> <center>
                <h1 class="league-spartan">Sekolah Spesialis 2 Onkologi Ginekologi Departemen Obstetri dan Ginekologi RSCM</h1></center></div>
            <div class="col-sm-3"> <img src="assets/images/RSCM.png" width=100%> </div>
           </table>
     	</div>

</section>



<section class="py-5" style="background:url('assets/images/grey.jpeg'); background-size:cover; color:black; border-top:2px SOLID "black">

        <div class="container give_margin_top">
            <br>
            <p style="font-weight:bold"><strong>CARA PEMAKAIAN</strong></p>
            <p align=center style="font-size:0.9em">Pada website ini, anda dapat menuliskan portofolio dan logbook hasil pencapaian klinik anda secara online.</p>
        </div>
</section>
<section class="py-5" style="background:url('assets/images/grey.jpeg'); background-size:cover; color:black; border-top:2px SOLID "black"><div class="container give_margin_top"> </div></section>

<div class="container">
	    <div class="row">
	        <div class="col-md-4 col-md-offset-4">
	            <div class="login-panel panel panel-default">
	                <div class="panel-heading">
	                    <h3 class="panel-title">Silakan Sign In</h3>
	                </div>
	                <div class="panel-body">
	                	<small id="login-empty-input" class="error">email or password cannot be empty <br>&nbsp;</small>
	                	<?php if($alert): ?>
	                		<small id="login-invalid-input" class="error">invalid email or password<br>&nbsp;</small>
	                	<?php endif; ?>

	                    <form role="form" method="post" onsubmit="return checkEmptyInput();" action="<?=base_url()?>authentication/login/">
	                        <fieldset>
	                            <div class="form-group">
	                                <input class="form-control" id="email" placeholder="E-mail" name="email" type="email" autofocus>
	                            </div>
	                            <div class="form-group">
	                                <input class="form-control" id="password" placeholder="Password" name="password" type="password" value="">
	                            </div>
	                            <div class="form-group">
	                                <small><a href="#" onclick="alert('Please contact the administrator to reset your password!')">Forgot Password?</a></small>
	                            </div>
	                            <input id="login-submit" type="submit" value="Login" class="btn btn-lg btn-success btn-block">
	                        </fieldset>
	                    </form>
	                </div>
	            </div>
	        </div>
	    </div>
	</div>

</center>

<!-- Footer -->
<section class="py-5" style="background:url('assets/images/grey.jpeg'); background-size:cover; color:black; border-top:2px SOLID "black">
        <div class="container give_margin_top">
    <footer class="bg-dark">
      <div class="container text-white">
        <div class="row">
          <div class="col-sm-12">
            <h4 class="m-0" style="border-bottom:1px solid #ccc; padding-bottom:5px">For Question and Assistance</h4>
            <div class="row" style="padding-top:1px">
              <div class="col-sm-6"><a href="https://api.whatsapp.com/send?phone=6282229248611&teks=Halo+boleh+bantu+soal+website+onkogyn"> <img src="assets/images/phone.png" width="20" height="20"> Aji Muharrom </a> </div>
              <div class="col-sm-6"><a href="https://api.whatsapp.com/send?phone=6285860337688&teks=Halo+boleh+bantu+soal+website+onkogyn"><img src="assets/images/phone.png" width="20" height="20"> Kevin Yonathan</div>
            </div>
          </div>

          <div class="col-sm-12">
            <br>
            <p class="m-0 text-center text-white" style="text-align:right"><strong>Sekolah Sp2 Onkologi Ginekologi Dept Obsgin RSCM</strong></p>

          </div>
        </div>
      </div>
</section>
      <!-- /.container -->
	


    <!-- jQuery -->
    <script src="<?=base_url()?>assets/js/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="<?=base_url()?>assets/js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="<?=base_url()?>assets/js/metisMenu.min.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="<?=base_url()?>assets/js/sb-admin-2.js"></script>

    <script>
    	window.onload = hideLoginErrors();
    	function hideLoginErrors(){
    		$("#login-empty-input").hide();
    	}

		function checkEmptyInput(){
			hideLoginErrors();
			$("#login-invalid-input").hide();
			if( $("#email").val() == '' || $("#password").val() == '' ){
				$("#login-empty-input").show();
				return false;
			}
		}
	</script>

</body>

</html>
