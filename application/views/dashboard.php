
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

<!-- DASHBOARD -->

<div class="page-layout" id="page_layout">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 text-center">
                    <div class="row">
                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <div class="single-preview">
                                <div class="preview-content">
                                    <a href="<?=base_url('portofolio')?>" target="_blank">
                                        <div class="preview-content-thumb" style="background-image: url(assets/images/portfolio.png)"></div>
                                    </a>
                                </div>
                                <div class="thumb-title">
                                    <h2><a href="<?=base_url('portofolio')?>" target="_blank"> PORTOFOLIO </a></h2>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <div class="single-preview">
                                <div class="preview-content">
                                    <a href="<?=base_url('Refleksi')?>" target="_blank">
                                        <div class="preview-content-thumb" style="background-image: url(assets/images/reflection.jpg)"></div>
                                    </a>
                                </div>
                                <div class="thumb-title">
                                    <h2><a href="<?=base_url('Refleksi')?>" target="_blank"> REFLEKSI DIRI </a></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

<!-- DASHBORAD BERAKHIR -->


        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- wrapper -->

    <!-- Footer -->
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
