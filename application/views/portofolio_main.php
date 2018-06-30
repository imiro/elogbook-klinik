      <form class="form-inline text-center" action="" method="post">
        <input type='hidden' name='user_id' value='<?php echo $this->session->userdata('user_id'); ?>' />
        <input type="text" name="nama" value="" class='form-control' placeholder="Nama pasien" />
        <input type="text" name="usia" value="" class='form-control' placeholder="Usia" />
        <input type="text" id="datepicker" name="tanggal" value="" class="form-control" placeholder="mm/dd/yyyy"/><!-- TODO datetime-picker -->
        <input type="text" name="diagnosis" value="" class='form-control' placeholder="Diagnosis" />
        <input type="text" name="tindakan" value="" class='form-control' placeholder="Tindakan" />
        <select class='form-control' name='kode'>
          <option value="1">Observasi</option>
          <option value="2">Asistensi</option>
          <option value="3">Operator dalam Pengawasan</option>
          <option value="4">Operator Mandiri</option>
          <option value="5">Konsultasi</option>
        </select>
        <input type='text' name='verifikator' value="" class="form-control" placeholder="Pengajar" />
        <input type="submit" value="Tambah" class="btn btn-primary" />
      </form>

      <div class="row"> <!-- untuk tabel -->
        <table class='table'>
          <thead>
            <th>No.</th>
            <th>Nama</th>
            <th>Usia</th>
            <th>Tanggal Tindakan</th>
            <th>Diagnosis</th>
            <th>Achievement</th>
            <th>Kode</th>
            <th>Verifikator</th>
            <th>Ditambahkan pada</th>
            <th>Status</th>
          </thead>

          <?php
          foreach($allEntry as $entry) {
            echo "<tr>";
            foreach($entry as $k => $v) {
              if($k != 'user_id' && $k != 'verified' && $k != 'verified_at' )
                echo "<td>$v</td>";
            }

            // TODO: styling!
            echo "<td>";
            if (!$entry['verified']) echo 'Menunggu verifikasi';
            else if ($entry['verified'] > 0) echo "Terverifikasi pada {$entry['verified_at']}";
            else echo "Verifikasi ditolak pada {$entry['verified_at']}";
            echo "</td>";

            echo "</tr>";
          }
          ?>
        </table>
      </div>
    </div> <!-- end of container-fluid -->
    <script type="text/javascript">
      $(document).ready(function() {
        $("#datepicker").datepicker();
      });
    </script>
  </body>
</html>
