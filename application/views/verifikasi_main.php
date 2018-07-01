        <?php
        // Array yang mencocokkan label _heading_ yang ingin ditampilkan dengan 'key' pada kolom database yang sesuai
        // $key => $heading
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
          "user_id" => "Oleh",
          "created_at" => "Diinput Tanggal"
        );

      ?>
      <!-------------------------------------------------------------------->
      <div class="row">
        <h2 style="text-align: center"><?php echo $title; ?></h2>
      </div>
      <div class="row"> <!-- untuk tabel -->
        <table class='table'>
          <thead>
            <?php
            foreach($tabel as $key => $heading) {
              echo "<th>$heading</th>\n";
            }
            ?>
            <th><?php echo $lastheading; ?></th>
          </thead>

          <?php

          foreach($allEntry as $entry) {
            echo "<tr>";
            foreach($tabel as $key => $heading) {
                if($key == "kode" || $key == "lokasi") {
                  $arr = array();
                  if($key == "lokasi")
                    $arr = array(
                      "poliklinik" => "Poliklinik",
                      "ok" => "Ruang Operasi",
                      "igd" => "Instalasi Gawat Darurat",
                      "icu" => "Intensive Care Unit"
                    );
                  else {
                    $arr = array(
                      "1" => "Observasi",
                      "2" => "Asistensi",
                      "3" => "Operator dalam Pengawasan",
                      "4" => "Operator Mandiri",
                      "5" => "Konsultasi"
                    );
                  }
                  echo "<td>{$arr[$entry[$key]]}</td>";
                } else
                  echo "<td>{$entry[$key]}</td>";
            }

            // TODO: styling!
            // semua yang muncul di sini harusnya $entry['verified'] === 0
            echo "<td>";

            if($entry['verified'] == 0) {
              echo "<a href='" . base_url("verifikasi/acc/{$entry["id"]}") . "' class='btn btn-primary'>Verifikasi</a>";
              echo "<a href='" . base_url("verifikasi/tolak/{$entry["id"]}") . "' class='btn btn-danger'>Tolak Verifikasi</a>";
            }
            else {
              if ($entry['verified'] > 0) echo "Terverifikasi pada ";
              else echo "Verifikasi ditolak pada ";
              echo date( 'Y-m-d H:i:s', $entry['verified_at'] );
            }

            echo "</td>";

            echo "</tr>";
          }
          ?>
        </table>
      </div>
