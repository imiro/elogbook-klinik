<?php if($this->session->userdata('role') == 'admin') { ?>
<div class="row text-center">
  <a href="<?php echo base_url('portofolio/csv'); ?>" class="btn btn-primary"><i class="fa fa-download fa-fw"></i>Unduh sebagai .csv</a>
</div>
<?php }

// assume role = 'student'
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

if($this->session->userdata('role') == "teacher") {
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
}

?>

<?php if(isset($title)): ?>
<div class="row">
  <h2 style="text-align: center"><?php echo $title; ?></h2>
</div>
<?php endif; ?>

<div class="row hidden-xs"> <!-- untuk tabel -->
  <div class="col-md-12">
    <table class='table'>
      <thead>
        <?php
        foreach($tabel as $key => $heading) {
          echo "<th>$heading</th>\n";
        }
        ?>
        <th>Dokumentasi</th>
        <th>Status</th>
      </thead>

      <?php

      foreach($allEntry as $entry) {
        echo "<tr>";
        foreach($tabel as $key => $heading) {
          echo "<td>{$entry[$key]}</td>";
        }

        // TODO: styling! _the date_

        $url = base_url("pics/index/{$entry['id']}");
        // 'Dokumentasi'

        echo <<<"EOD"
        <td>
        <a href="{$url}"><i class='fa fa-fw fa-pencil'> </i> lihat/tambah</a>
        </td>
EOD;


        // 'Status' column
        if($this->session->userdata('role') == "teacher") {
          echo "<td class='action_cell'>";

          if($entry['verified'] == 0) {
            echo "<a href='#' onclick=\"verify_confirmation('" . base_url("verifikasi/acc/{$entry["id"]}") . "', this)\" class='btn btn-primary' data-toggle='modal' data-target='#modalKonfirmasiVerifikasi'>Verifikasi</a>";
            echo "<a href='#' onclick=\"tolak_confirmation('" . base_url("verifikasi/tolak/{$entry["id"]}") . "', this)\" class='btn btn-danger' data-toggle='modal' data-target='#modalKonfirmasiTolak'>Tolak Verifikasi</a>";
          }
          else {
            if ($entry['verified'] > 0) echo "<span class='label label-success'><i class='glyphicon glyphicon-ok'> </i> Terverifikasi</span> pada ";
            else echo "<span class='label label-danger'><i class='glyphicon glyphicon-remove'> </i> Verifikasi ditolak</span> pada ";
            echo date( 'Y-m-d H:i:s', $entry['verified_at'] );
          }

          echo "</td>";
        } else {
          echo "<td>";
          if (!$entry['verified']) {
            echo '<span class="label label-warning">
              <i class="glyphicon glyphicon-time"> </i> Menunggu Verifikasi </span> ';
            echo  "<span><a href='#' data-toggle='modal' data-target='#modalKonfirmasiHapus' onClick='delete_confirmation(\"" .
              base_url("portofolio/delete/".$entry['id']) .
              "\", this)'<i class=\"fa fa-trash-o fa-fw\"></i> </a></span>";
          } else {
            if ($entry['verified'] > 0) echo '<p> <span class="label label-success"><i class="glyphicon glyphicon-ok"> </i> Terverifikasi</span> pada  </p> ';
            else echo '<p> <span class="label label-danger"><i class="glyphicon glyphicon-remove"> </i> Verifikasi ditolak</span> pada  </p> ';
            echo date( 'Y-m-d H:i:s', $entry['verified_at'] );
          }
          echo "</td>";
        }

        echo "</tr>";
      }
      ?>
    </table>
  </div>
</div> <!-- end of .row hidden-xs -->
<div class="row visible-xs">
  <?php
  $entry_counter = 0;
  foreach($allEntry as $entry) {
  $prevId = $entry_counter != 0 ? $allEntry[$entry_counter-1]['id'] : -1;
  $nextId = $entry_counter+1 != count($allEntry) ? $allEntry[$entry_counter+1]['id'] : -1;
  ?>
  <div class="col-xs-10">
    <div class="panel panel-default" id='<?php echo "entri_{$entry['id']}"; ?>'>
      <div class="panel-heading"><?php echo "#{$entry['id']}"; ?></div>
      <table class="table">
        <?php
        foreach($tabel as $key => $heading) {
          if($heading != "#")
          echo "<tr><td>{$heading}</td><td>{$entry[$key]}</td></td>";
        }
        ?>
        <tr>
          <td>Dokumentasi</td>
          <td><a href="<?=$url;?>"><i class='fa fa-fw fa-pencil'> </i> lihat/tambah</a></td>
        </tr>
        <tr>
          <td>Status</td>
          <td>
            <?php
            if (!$entry['verified']) echo '<span class="label label-warning">
              <i class="glyphicon glyphicon-time"> </i> Menunggu Verifikasi </span> ';
            else {
              if ($entry['verified'] > 0) echo '<p> <span class="label label-success"><i class="glyphicon glyphicon-ok"> </i> Terverifikasi</span> pada  </p> ';
              else echo '<p> <span class="label label-danger"><i class="glyphicon glyphicon-remove"> </i> Verifikasi ditolak</span> pada  </p> ';
              echo date( 'Y-m-d H:i:s', $entry['verified_at'] );
            }
            ?>
          </td>
        </tr>
      </table>
    </div>
  </div>
  <div class="col-xs-2">
    <div class="btn-group-vertical" role="group">
       <?php if($this->session->userdata('role') != "student" && !$entry['verified']) { ?>
       <a href="#" class="btn btn-success" alt="Setujui Verifikasi" data-toggle='modal' data-target='#modalKonfirmasiVerifikasi' onclick="verify1_confirmation('<?= base_url("verifikasi/acc/{$entry['id']}");?>')"><i class="fa fa-check fa-fw"></i></a>
       <a href="#" class="btn btn-danger" alt="Tolak Verifikasi" data-toggle='modal' data-target='#modalKonfirmasiTolak' onclick="tolak1_confirmation('<?= base_url("verifikasi/tolak/{$entry['id']}");?>')" ><i class="fa fa-times fa-fw"></i></a>
     <?php } if($this->session->userdata('role') != "teacher" && !$entry['verified']) { ?>
       <a href='#' class="btn btn-default" data-toggle='modal' data-target='#modalKonfirmasiHapus' onClick='delete1_confirmation(<?=base_url("portofolio/delete/".$entry['id']);?>' ><i class="fa fa-trash fa-fw"></i></a>
     <?php } ?>
     </div>

     <div class="btn-group-vertical" role="group">
        <button type="button" class="btn btn-default<?php if ($prevId==-1) echo ' btn-disabled'; ?>" alt="Sebelumnya" <?php if ($prevId==-1) echo "disabled='disabled'"; ?> >
          <a <?php if($prevId!=-1) echo "href='#entri_$prevId';";?> ><i class="fa fa-caret-up fa-fw"></i></a>
        </button>
        <button type="button" class="btn btn-default<?php if ($nextId==-1) echo ' btn-disabled'; ?>" alt="Sesudah" <?php if ($nextId==-1) echo "disabled='disabled'"; ?> >
          <a <?php if($nextId!=-1) echo "href='#entri_$nextId';";?> ><i class="fa fa-caret-down fa-fw"></i></a>
        </button>
      </div>
  </div>
  <?php
  ++$entry_counter;
  } // end FOREACH ?>
</div> <!-- end of .row visible-xs -->
<script type="text/javascript">
// DATA!!

<?php
  $allEntryObj = array();
  foreach($allEntry as $entry) {
    $obj = new \stdClass;
    foreach($tabel as $key => $heading) {
      $obj->{$key} = $entry[$key];
    }
    array_push($allEntryObj, $obj);
  }
  echo "// OKE";
?>

var temp = JSON.parse('<?php echo json_encode($allEntryObj); ?>');
for(let t of temp) {
  allEntry[ t.id ] = t;
}
</script>
