<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>E-Logbook</title>

    <!-- Bootstrap -->
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>

  </head>
  <body>
    <div class="container-fluid">
			<div class="row">
				<div class="col-md-12">
					<nav class="navbar navbar-default" role="navigation">
						<div class="navbar-header">

							<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
								 <span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>
							</button>
              <a class="navbar-brand" href="<?php echo base_url(); ?>">E-Logbook</a>
						</div>

						<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

							<ul class="nav navbar-nav navbar-right">
                <?php if(!isset($user) || !$user) { ?>
								<li>
                <a href="<?php echo base_url('login'); ?>"> Login </a>
								</li>

                <?php } else { ?>
                <li>
                <a style="color: black;">
                Logged in as <strong><?php echo $user; ?></strong>.
                </a>
                </li>
                <li>
                  <a href="<?php echo base_url('logout'); ?>"> Logout </a>
                </li>
                <?php } ?>
							</ul>
						</div>

					</nav>
				</div>
			</div> <!-- end of .row -->

      <form class="form-inline text-center" action="" method="post">
        <input type='hidden' name='user_id' value='student' />
        <input type="text" name="nama" value="" class='form-control' placeholder="Nama pasien" />
        <input type="text" name="usia" value="" class='form-control' placeholder="Usia" />
        <input type="text" name="diagnosis" value="" class='form-control' placeholder="Diagnosis" />
        <input type="text" name="tindakan" value="" class='form-control' placeholder="Tindakan" />
        <select class='form-control' name='kode'>
          <option value="1">Diskusi</option>
          <option value="2">Anamnesis &amp; PF</option>
          <option value="3">Observasi</option>
          <option value="4">Asisten</option>
          <option value="5">Operator</option>
        </select>
        <input type='text' name='verifikator' value="" class="form-control" placeholder="Pengajar" />
        <input type="submit" value="Tambah" class="btn btn-primary" />
      </form>

      <div class="row"> <!-- untuk tabel -->
        <table class='table'>
          <thead>
            <th>#</th>
            <th>Tanggal</th>
            <th>Nama</th>
            <th>Usia</th>
            <th>Diagnosis</th>
            <th>Tindakan</th>
            <th>Kode</th>
            <th>Verifikator</th>
            <th>Status</th>
          </thead>

          <?php
          foreach($allEntry as $entry) {
            echo "<tr>";
            foreach($entry as $k => $v) {
              if($k != 'user_id' && $k != 'verified')
                echo "<td>$v</td>";
            }
            echo "<td>" . (!$entry['verified'] ? 'Menunggu verifikasi' : 'Terverifikasi') . "</td>";
            echo "</tr>";
          }
          ?>
        </table>
      </div>
    </div> <!-- end of container-fluid -->
  </body>
</html>
