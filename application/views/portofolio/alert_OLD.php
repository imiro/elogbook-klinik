      <!-- ALERTS -->
      <?php if($this->session->flashdata('success')):?>
          &nbsp;<div class="alert alert-success">
          <a href="#" class="close" data-dismiss="alert">&times;</a>
          <?php echo $this->session->flashdata('success'); ?>
          </div>
      <?php endif; if($this->session->flashdata('error')):?>
          &nbsp;<div class="alert alert-warning">
          <a href="#" class="close" data-dismiss="alert">&times;</a>
          <strong><?php echo $this->session->flashdata('error'); ?></strong>
          </div>
      <?php endif;?>
