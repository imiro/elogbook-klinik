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
            echo "<td class='action_cell'>";

            if($entry['verified'] == 0) {
              echo "<a href='#' onclick=\"verify_confirmation('" . base_url("verifikasi/acc/{$entry["id"]}") . "', this)\" class='btn btn-primary' data-toggle='modal' data-target='#modalKonfirmasiVerifikasi'>Verifikasi</a>";
              echo "<a href='#' onclick=\"tolak_confirmation('" . base_url("verifikasi/tolak/{$entry["id"]}") . "', this)\" class='btn btn-danger' data-toggle='modal' data-target='#modalKonfirmasiTolak'>Tolak Verifikasi</a>";
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

      <!-- Modal -->
      <div class="modal fade" id="modalKonfirmasiVerifikasi" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title" >Konfirmasi Verifikasi</h3>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <a type="button" class="btn btn-secondary" data-dismiss="modal">Batal</a>
              <a type="button" class="btn btn-primary verifikasi">Verifikasi</a>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="modalKonfirmasiTolak" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title" id="exampleModalLabel">Konfirmasi Tolak Verifikasi</h3>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <a type="button" class="btn btn-secondary" data-dismiss="modal">Batal</a>
              <a type="button" class="btn btn-danger verifikasi">Tolak Verifikasi</a>
            </div>
          </div>
        </div>
      </div>

      <script type="text/javascript">

      function generate_body(elem) {
        var konten = [], heading = [];
        $(elem).closest('tr').find('td').not('.action_cell').each(function() {
          konten.push( $(this).html() );
        });
        $(elem).closest('table').find('th').not('.action_cell').each(function() {
          heading.push( $(this).html() );
        })

        var ret = "<p>";
        for(var i = 0;i < konten.length;++i) {
          ret += "<b>" + heading[i] + ": </b>" + konten[i] + "<br/>";
        }
        ret += "</p>";

        return ret;
      }

      function verify_confirmation(url, elem) {

        $("#modalKonfirmasiVerifikasi .modal-body").html(
          "<p>Yakin akan memverifikasi entri ini? </p><br/>\n" +
          generate_body(elem)
        );

        $("#modalKonfirmasiVerifikasi .verifikasi").attr("href", url);
      }

      function tolak_confirmation(url, elem) {
        $("#modalKonfirmasiTolak .modal-body").html(
          "<p>Yakin akan <b>menolak verifikasi</b> entri ini? </p><br/>\n" +
          generate_body(elem)
        );

        $("#modalKonfirmasiTolak .verifikasi").attr("href", url);
      }
      </script>
