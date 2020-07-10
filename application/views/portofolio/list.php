<?php if($this->session->userdata('role') == 'admin') { ?>
<div class="row text-center">
  <a href="<?php echo base_url('portofolio/csv'); ?>" class="btn btn-primary"><i class="fa fa-download fa-fw"></i>Unduh sebagai .csv</a>
</div>
<?php }

// assume role = 'student'
$tabel = array(
  "id" => "#",
  "stase" => "Stase",
  "tanggal" => "Tanggal",
  "lokasi" => "Tempat",
  "nama" => "Identitas",
  "nrm" => "NRM",
  "diagnosis" => "Diagnosis",
  "kegiatan" => "Kegiatan",
  "created_at" => "Diinput Tanggal"
);
//
// if($this->session->userdata('role') == "admin") {
//   $tabel = array(
//     "id" => "#",
//     'user_id' => "Oleh",
//     "tanggal" => "Tanggal",
//     "lokasi" => "Tempat",
//     "nama" => "Nama Pasien",
//     "usia" => "Usia",
//     "nrm" => "NRM",
//     "diagnosis" => "Diagnosis",
//     "tindakan" => "Tindakan",
//     "kode" => "Achievement",
//     "verifikator" => "Verifikator",
//     "created_at" => "Diinput Tanggal"
//   );
// }
//
// if($this->session->userdata('role') == "teacher") {
//   $tabel = array(
//     "id" => "#",
//     "tanggal" => "Tanggal",
//     "lokasi" => "Tempat",
//     "nama" => "Nama Pasien",
//     "usia" => "Usia",
//     "nrm" => "NRM",
//     "diagnosis" => "Diagnosis",
//     "tindakan" => "Tindakan",
//     "kode" => "Achievement",
//     "user_id" => "Oleh",
//     "created_at" => "Diinput Tanggal"
//   );
// }


function kontenKegiatan($entry, $key) {
  $kode = array("", "Observasi", "Asistensi", "Operator dalam Supervisi Tidak Langsung",
                "Operator dalam Supervisi Langsung", "Operator Mandiri");
  if($entry[$key] == "tindakan") {
    $ret = "Tindakan: <br/>" . $entry['tindakan'] . "<br/>";
    $ret .= "({$kode[$entry['kode']]})";
  } else
    $ret = "Anamnesis / PF / Edukasi";
  return $ret;
}

function kontenLokasi($str) {
  $dict = array(
    "poliklinik" => "Poliklinik",
    "ok" => "Ruang Operasi",
    "igd" => "Instalasi Gawat Darurat",
    "icu" => "ICU/HCU/ICCU",
    "ranap" => "Rawat Inap"
  );
  if (in_array($str, array_keys($dict)))
    return $dict[$str];
  else return "";
}

function kontenIdentitas($entry) {
  $gender = $entry['gender'] == "pr" ? "Perempuan" : "Laki-laki";
  return
  "{$entry['nama']} ({$gender}, {$entry['usia']} {$entry['satuanusia']})";
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
      </thead>

      <?php

      foreach($allEntry as $entry) {
        echo "<tr>";
        foreach($tabel as $key => $heading) {
          if($key == "kegiatan") {
            echo "<td>";
            echo kontenKegiatan($entry, $key);
            echo "</td>";
          } else if ($key == "lokasi") {
            echo "<td>". kontenLokasi($entry[$key]) ."</td>";
          } else if($key == "nama") {
            echo "<td>" . kontenIdentitas($entry) . "</td>";
          } else if($key == "stase") {
            echo "<td>" . $stase[$entry[$key]] . "</td>";
          } else
            echo "<td>{$entry[$key]}</td>";
        }

        echo "</tr>";
      }
      ?>
    </table>
  </div>
</div> <!-- end of .row hidden-xs -->

<div class="row visible-xs" style='margin-top: 10px;'>
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
          if ($key == "kegiatan") {
            echo "<tr><td>Kegiatan</td><td>".kontenKegiatan($entry, $key)."</td></tr>";
          } else if($key == "lokasi")
            echo "<tr><td>{$heading}</td><td>".kontenLokasi($entry[$key])."</td></tr>";
          else if($key == "nama")
            echo "<tr><td>{$heading}</td><td>".kontenIdentitas($entry)."</td></tr>";
          else if($key == "stase")
            echo "<tr><td>{$heading}</td><td>".$stase[$entry[$key]]."</td></tr>";
          else if($heading != "#")
            echo "<tr><td>{$heading}</td><td>{$entry[$key]}</td></tr>";
        }
        ?>
      </table>
    </div>
  </div>
  <div class="col-xs-2">

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
