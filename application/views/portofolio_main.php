      <?php if($this->session->userdata('role') == "student") { ?>
      <form class="form-inline text-center" id="formTambah" action="" method="post">
        <input type="text" id="datepicker" name="tanggal" value="<?php echo date('Y-m-d'); ?>" class="form-control" placeholder="Tanggal"/>
        <input type="text" name="nama" value="" class='form-control' placeholder="Nama pasien" />
        <input type="text" name="usia" value="" class='form-control' placeholder="Usia" />
        <input type="text" name="nrm" value="" class='form-control' placeholder="NRM" />
        <input type="text" name="diagnosis" value="" class='form-control' placeholder="Diagnosis" />
        <select class='form-control' name='lokasi' placeholder='Lokasi'>
          <option value="poliklinik">Poliklinik</option>
          <option value="ok">Ruang Operasi</option>
          <option value="igd">Instalasi Gawat Darurat</option>
          <option value="icu">Intensive Care Unit</option>
        </select>
        <input type="text" name="tindakan" value="" class='form-control' placeholder="Tindakan" />
        <select class='form-control' name='kode'>
          <option value="1">Observasi</option>
          <option value="2">Asistensi</option>
          <option value="3">Operator dalam Pengawasan</option>
          <option value="4">Operator Mandiri</option>
          <option value="5">Konsultasi</option>
        </select>
        <select class='form-control' name='verifikator'>
            <option value="" > --- PILIH VERIFIKATOR --- </option>
          <?php foreach($verificators as $vid => $vname) { ?>
            <option value="<?php echo $vid; ?>"><?php echo $vname; ?></option>
          <?php } ?>
        </select>
        <input  type="button" data-toggle="modal" data-target="#modalKonfirmasiTambah" value="Tambah" class="btn btn-primary" />
      </form>
      <?php } ?>

      <div class="row"> <!-- untuk tabel -->
        <table class='table'>
          <thead>
            <?php
            $tabel = array(
              "id" => "#",
              "tanggal" => "Tanggal",
              "lokasi" => "Tempat",
              "nama" => "Nama Pasien",
              "usia" => "Usia",
              "nrm" => "NRM",
              "diagnosis" => "Diagnosis",
              "tindakan" => "Tindakan",
              "kode" => "Achievement",
              "verifikator" => "Verifikator",
              "created_at" => "Diinput Tanggal"
            );

            if($this->session->userdata('role') == "admin") {
              $tabel = array(
                "id" => "#",
                'user_id' => "Oleh",
                "tanggal" => "Tanggal",
                "lokasi" => "Tempat",
                "nama" => "Nama Pasien",
                "usia" => "Usia",
                "nrm" => "NRM",
                "diagnosis" => "Diagnosis",
                "tindakan" => "Tindakan",
                "kode" => "Achievement",
                "verifikator" => "Verifikator",
                "created_at" => "Diinput Tanggal"
              );
            }

            foreach($tabel as $key => $heading) {
              echo "<th>$heading</th>\n";
            }
            ?>
          </thead>

          <?php

          foreach($allEntry as $entry) {
            // tombol delete
            if( !$entry['verified'] )
              $entry['id'] .=
                "<br/><a href='#' data-toggle='modal' data-target='#modalKonfirmasiHapus' onClick='delete_confirmation(\"" .
                base_url("portofolio/delete/".$entry['id']) .
                "\", this)'<i class=\"fa fa-trash-o fa-fw\"></i></a>";

            echo "<tr>";
            foreach($tabel as $key => $heading) {
              echo "<td>{$entry[$key]}</td>";
            }

            // TODO: styling!
            echo "<td>";
            if (!$entry['verified']) echo '<i style="color:yellow">
              Menunggu Verifikasi </i> ';
            else {
              if ($entry['verified'] > 0) echo '<p style="color:green"> Terverifikasi pada  </p> ';
              else echo '<p style="color:red"> Verifikasi ditolak pada  </p> ';
              echo date( 'Y-m-d H:i:s', $entry['verified_at'] );
            }
            echo "</td>";

            echo "</tr>";
          }
          ?>
        </table>
      </div>
    </div> <!-- end of container-fluid -->

    <!-- Modal -->
    <div class="modal fade" id="modalKonfirmasiHapus" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title" id="exampleModalLabel">Konfirmasi Hapus Entri</h3>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <a type="button" class="btn btn-secondary" data-dismiss="modal">Batal</a>
            <a type="button" class="btn btn-danger verifikasi">Hapus Entri</a>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="modalKonfirmasiTambah" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title" id="exampleModalLabel">Konfirmasi Menambahkan Entri</h3>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Yakin data yang Anda masukkan sudah benar?</p>
            <p><strong>Catatan:</strong> Data yang sudah diinput tidak dapat diubah kembali</p>
          </div>
          <div class="modal-footer">
            <a type="button" class="btn btn-secondary" data-dismiss="modal">Batal</a>
            <button type="button" class="btn btn-danger verifikasi" onclick='$("#formTambah").submit();'>Tambah Entri</button>
          </div>
        </div>
      </div>
    </div>

    <script src="<?php echo base_url("assets/js/modal_verifikasi.js"); ?>" ></script>
    <script type="text/javascript">

    function delete_confirmation(url, elem) {
      modal_confirmation(
          "#modalKonfirmasiHapus",
          "<p>Yakin akan menghapus entri ini? </p><br/>\n",
          url, elem);
    }

    </script>

    <script type="text/javascript">
      $(document).ready(function() {
        $("#datepicker").datepicker({dateFormat: 'yy-mm-dd'});
      });
    </script>
  </body>
</html>
