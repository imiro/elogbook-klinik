      <h2 style='text-align: center'>Antrian Verifikasi</h2>
        <?php
        // Array yang mencocokkan label _heading_ yang ingin ditampilkan dengan 'key' pada kolom database yang sesuai
        // $key => $heading
        $tabel = array(
          "id" => "#",
          "tanggal" => "Tanggal",
          "rs" => "Tempat",
          "nama" => "Nama Pasien",
          "usia" => "Usia",
          "diagnosis" => "Diagnosis",
          "tindakan" => "Tindakan",
          "kode" => "Kode",
          "user_id" => "Oleh",
          "created_at" => "Diinput Tanggal"
        );

      ?>
      <div class="row"> <!-- untuk tabel -->
        <table class='table'>
          <thead>
            <?php
            foreach($tabel as $key => $heading) {
              echo "<th>$heading</th>\n";
            }
            ?>
            <!-- <th>#</th>
            <th>Tanggal</th>
            <th>Tempat</th>
            <th>Nama</th>
            <th>Usia</th>
            <th>Diagnosis</th>
            <th>Tindakan</th>
            <th>Kode</th>
            <th>Oleh</th>
            <th>Ditambahkan pada</th> -->
            <th>Aksi</th>
          </thead>

          <?php

          foreach($allEntry as $entry) {
            echo "<tr>";
            foreach($tabel as $key => $heading) {
                echo "<td>{$entry[$key]}</td>";
            }

            // TODO: styling!
            // semua yang muncul di sini harusnya $entry['verified'] === 0
            echo "<td>";

            if($entry['verified'] == 0) {
              echo "<a href='" . base_url("verifikasi/acc/{$entry["id"]}") . "' class='btn btn-primary'>Verifikasi</a>";
              echo "<a href='" . base_url("verifikasi/tolak/{$entry["id"]}") . "' class='btn btn-danger'>Tolak Verifikasi</a>";
            }
            else if ($entry['verified'] > 0) echo "Terverifikasi pada {$entry['verified_at']}";
            else echo "Verifikasi ditolak pada {$entry['verified_at']}";

            echo "</td>";

            echo "</tr>";
          }
          ?>
        </table>
      </div>

      <!-------------------------------------------------------------------->
      <div class="row">
        <h2 style="text-align: center">Lainnya</h2>
      </div>
      <div class="row"> <!-- untuk tabel -->
        <table class='table'>
          <thead>
            <?php
            foreach($tabel as $key => $heading) {
              echo "<th>$heading</th>\n";
            }
            ?>
            <th>Status</th>
          </thead>

          <?php

          foreach($noEntry as $entry) {
            echo "<tr>";
            foreach($tabel as $key => $heading) {
                echo "<td>{$entry[$key]}</td>";
            }

            // TODO: styling!
            // semua yang muncul di sini harusnya $entry['verified'] === 0
            echo "<td>";

            if($entry['verified'] == 0) {
              echo "<a href='" . base_url("verifikasi/acc/{$entry["id"]}") . "' class='btn btn-primary'>Verifikasi</a>";
              echo "<a href='" . base_url("verifikasi/tolak/{$entry["id"]}") . "' class='btn btn-danger'>Tolak Verifikasi</a>";
            }
            else if ($entry['verified'] > 0) echo "Terverifikasi pada {$entry['verified_at']}";
            else echo "Verifikasi ditolak pada {$entry['verified_at']}";

            echo "</td>";

            echo "</tr>";
          }
          ?>
        </table>
      </div>
