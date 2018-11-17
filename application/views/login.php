<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="shortcut icon" href="<?=base_url()?>assets/images/FKUI2.png" type="image/x-icon">

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

  <div class="limiter">
    <div class="container-login100">
      <div class="wrap-login100">
        <div class="login100-form-title" style="background-image: url(assets/images/IMERI.jpeg);">
          <span class="login100-form-title-1">
            Divisi Onkologi Ginekologi Departemen Obsgyn RSCM-FKUI
          </span>
        </div>

        <form class="login100-form validate-form">
          <div class="wrap-input100 validate-input m-b-26" data-validate="Username is required">
            <span class="label-input100">Username</span>
            <input class="form-control" id="email" placeholder="E-mail" name="email" type="email" autofocus>
            <span class="focus-input100"></span>
          </div>

          <div class="wrap-input100 validate-input m-b-18" data-validate = "Password is required">
            <span class="label-input100">Password</span>
            <input class="form-control" id="password" placeholder="Password" name="password" type="password" value="">
            <span class="focus-input100"></span>
          </div>

          <div class="flex-sb-m w-full p-b-30">
            <div class="contact100-form-checkbox">
              <br>
              <!-- BELUM JADI FUNCTIONNYA, MASIH DIPIKIRIN YANG PENTING ADA DULU-->
              <label class="label-checkbox100" for="ckb1">
                Remember me
              </label>
            </div>

          <br>
            
            <a href="#" onclick="alert('Please contact the administrator to reset your password!')"> Forgot Password? </a><br><br>

          </div>

          <div class="container-login100-form-btn">
            <input id="login-submit" type="submit" value="Login" class="btn btn-lg btn-success btn-block">
          </div>

        </form>
      </div>
    </div>
  </div>


</center>

<!-- Footer -->
<section class="py-5" style="background-color:white"; background-size:cover; color:black; border-top:2px SOLID "black">
        <div class="container give_margin_top">
    <footer class="bg-dark">
      <div class="container text-white">
        <div class="row">
          <div class="col-sm-12">
            <h4 class="m-0" style="border-bottom:1px solid #ccc; padding-bottom:5px">For Question and Assistance</h4>
            <div class="row" style="padding-top:1px">
              <div class="col-sm-6"> <a href="https://api.whatsapp.com/send?phone=6282229248611&teks=Halo+boleh+bantu+soal+website+onkogyn"> <img src="assets/images/phone.png" width="20" height="20"> Aji Muharrom </a> </div>
              <div class="col-sm-6"> <a href="https://api.whatsapp.com/send?phone=6285860337688&teks=Halo+boleh+bantu+soal+website+onkogyn"> <img src="assets/images/phone.png" width="20" height="20"> Kevin Yonathan </a> </div>
            </div>
          </div>

          <div class="col-sm-12">
            <br>
            <p class="m-0 text-center text-white" style="text-align:right"><strong>Sekolah Spesialis 2 Onkologi Ginekologi Dept Obsgin RSCM-FKUI</strong></p>

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
