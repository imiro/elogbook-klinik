
        <div id="page-wrapper">
            <?php if($this->session->flashdata('success')):?>
                &nbsp;<div class="alert alert-success">
                <a href="#" class="close" data-dismiss="alert">&times;</a>
                <strong><?php echo $this->session->flashdata('success'); ?></strong>
                </div>
            <?php elseif($this->session->flashdata('error')):?>
                &nbsp;<div class="alert alert-warning">
                <a href="#" class="close" data-dismiss="alert">&times;</a>
                <strong><?php echo $this->session->flashdata('error'); ?></strong>
                </div>
            <?php endif;?>
            <div class="row">
                <div class="col-lg-12">
                    <h3 class="page-header">Dashboard</h3>
                </div>
                <div class="col-lg-12">
                    <div class="row text-center">
                        Selamat datang di Website Sekolah Sp2 Onkologi Ginekologi Departemen Obstetri dan Ginekologi RSCM! Semua pengumuman akan ditampilkan pada halaman ini. Namun, untuk sekarang Anda dapat memulai menggunakan website ini dengan memilih salah satu pilihan tindakan di sebelah kiri. </div>
                </div>
                <!-- /.col-lg-12 -->
            </div>
            <!-- /.row -->

        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- wrapper -->

    <!-- Footer -->
<section class="py-5" style="background:url('img/grey.jpeg'); background-size:cover; color:black; border-top:2px SOLID "black">
        <div class="container give_margin_top">
    <footer class="bg-dark">
      <div class="container text-white">
        <div class="row">
          <div class="col-sm-12">
            <h4 class="m-0" style="border-bottom:1px solid #ccc; padding-bottom:5px">For Question and Assistance</h4>
            <div class="row" style="padding-top:1px">
              <div class="col-sm-6"><img src="img/phone.png" width="20" height="20"> Aji Muharrom</div>
              <div class="col-sm-6"><img src="img/phone.png" width="20" height="20"> Kevin Yonathan</div>
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
            






