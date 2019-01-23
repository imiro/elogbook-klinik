<!-- FORM to ADD ITEM -->
<form class="form-horizontal" id="formMinicex" action="" method="post">


  <div class='form-group'>
    <label class='col-sm-3 control-label' for="tanggal">Tanggal</label>
    <div class='col-sm-9'>
      <input type="text" id="datepicker" name="tanggal" value="<?php echo date('Y-m-d'); ?>" class="col-xs-6 form-control col-sm-6" placeholder="Tanggal"/>
    </div>
  </div>

  <div class='form-group'>
    <label class='col-sm-3 control-label' for="student_id">Peserta Didik</label>
    <div class='col-sm-9'>
      <select class='form-control' name='student_id'>
          <option value="" > --- PILIH PESERTA DIDIK --- </option>
        <?php foreach($students as $sid => $sname) { ?>
          <option value="<?php echo $sid; ?>"><?php echo $sname; ?></option>
        <?php } ?>
      </select>
    </div>
  </div>

  <div class='form-group form-group-lg'>
    <label class='col-sm-3 control-label' for="rotasi">Rotasi</label>
    <div class='col-sm-9'>
      <input type="text" name="rotasi" value="" class='form-control' placeholder="Rotasi" />
    </div>
  </div>

  <div class='form-group form-group-lg'>
    <label class='col-sm-3 control-label' for="kasus">Kasus</label>
    <div class='col-sm-9'>
      <input type="text" name="kasus" value="" class='form-control' placeholder="Kasus" />
    </div>
  </div>

  <div class="form-group">
    <label for="kasus_barulama" class='col-sm-3 control-label'>Kasus baru/lama</label>
    <div class='col-sm-9 btn-group btn-group-custom'>
      <label class='btn btn-default'>
          <input type="radio" name="kasus_barulama" value="baru" /> Baru
      </label>
      <label class='btn btn-default'>
          <input type="radio" name="kasus_barulama" value="lama" /> Lama
      </label>
    </div>
  </div>

  <div class="form-group">
    <label class='col-sm-3 control-label' for="fokus_klinis">Fokus klinis</label>
    <div class='col-sm-9 btn-group btn-group-custom'>
      <label class='btn btn-default'><input type="checkbox" name="fokus_klinis[]" value="anam" class='optradio' /> Anamnesis</label>
      <label class='btn btn-default'><input type="checkbox" name="fokus_klinis[]" value="diagnosis" class='optradio' /> Diagnosis</label>
      <label class='btn btn-default'><input type="checkbox" name="fokus_klinis[]" value="tatalaksana" class='optradio' /> Tatalaksana</label>
      <label class='btn btn-default'><input type="checkbox" name="fokus_klinis[]" value="edukasi" class='optradio' /> Edukasi</label>
    </div>
  </div>

  <div class="form-group">
    <label for="tingkat_kesulitan" class='col-sm-3 control-label'>Tingkat kesulitan</label>
    <div class='col-sm-9 btn-group btn-group-custom'>
      <label class='btn btn-default'>
          <input type="radio" name="tingkat_kesulitan" value="mudah" /> Mudah
      </label>
      <label class='btn btn-default'>
          <input type="radio" name="tingkat_kesulitan" value="sedang" /> Sedang
      </label>
      <label class='btn btn-default'>
          <input type="radio" name="tingkat_kesulitan" value="sulit" /> Sulit
      </label>
    </div>
  </div>
  <hr class='separator'></hr>

  <table class='table'>
    <thead>
      <tr>
        <td class='text-right'>Komponen</td>
        <td colspan='2'>Di bawah batas lulus</td>
        <td>Batas lulus</td>
        <td>Cukup</td>
        <td colspan='2'>Di atas rata-rata</td>
        <td>U/C*</td>
      </tr>
      <tr>
        <td></td>
        <td>50</td>
        <td>60</td>
        <td>70</td>
        <td>80</td>
        <td>90</td>
        <td>100</td>
        <td>*</td>
      </tr>
    </thead>
    <tbody id='nilai'>
      <?php
        // TODO: buat fungsi dari Minicex_model buat dapetin value ini.. dan di-pass-on dari Minicex_controller

        $nilai_labels = array(
          "anam" => "Anamnesis",
          "pf" => "Pemeriksaan Fisis",
          "komunikasi" => "Komunikasi Verbal",
          "diagnosis" => "Diagnosis",
          "profesionalism" => "Profesionalisme",
          "organisasi" => "Organisasi/Efisiensi",
          "perawatan" => "Perawatan Umum"
        );

        foreach($nilai_labels as $var => $heading):
      ?>
      <tr>
        <th class='text-right'><?=$heading;?></th>
        <?php for($i=50;$i <= 100;$i += 10): ?>
        <td><input type='radio' name='<?="nilai_$var";?>' value='<?=$i;?>'></td>
        <? endfor; ?>
        <td><input type='radio' name='<?="nilai_$var";?>' value='-1' checked="checked"></td>

      </tr>
      <?php endforeach; ?>
    </tbody>
  </table>

  <hr class='separator'></hr>

  <div class='form-group'>
    <label class='col-sm-3 control-label'>Nilai akhir</label>
    <div class='col-sm-9'>
      <input type='text' class='form-control' id='nilai_akhir' readonly='readonly' name='nilai_akhir' value='' />
    </div>
  </div>

  <div class='form-group'>
    <label class='col-sm-3 control-label'>Kemampuan khusus?</label>
    <div class='col-sm-9'>
      <textarea name='kemampuan_khusus' class='form-control'></textarea>
    </div>
  </div>

  <div class='form-group'>
    <label class='col-sm-3 control-label'>Saran untuk pengembangan</label>
    <div class='col-sm-9'>
      <textarea name='saran' class='form-control'></textarea>
    </div>
  </div>
  <div class='form-group'>
    <label class='col-sm-3 control-label'>Komentar</label>
    <div class='col-sm-9'>
      <textarea name='komentar' class='form-control'></textarea>
    </div>
  </div>

  <div class='form-group'>
    <div class='col-sm-offset-3 col-sm-9'>
      <input type='submit' value='Kirim' class='btn btn-primary' />
    </div>
  </div>
</form>

<script type='text/javascript'>
$(document).ready(function() {
  $('.btn-group-custom').children('label.btn').children('input').change(function(e) {
      if( $(this).prop('type') == 'radio' ) {
        $(this).parent().siblings().removeClass('btn-primary').addClass('btn-default');
      }
      $(this).parent().toggleClass('btn-primary').toggleClass('btn-default');
  });

  $('#nilai').find(':radio').change(function(e) {
    // selalu recount!

    var n = 0, tot = 0;
    $('#nilai').find('input[type=radio]:checked').each(function(id) {
      console.log($(this).val());
      var x = parseInt( $(this).val() );
      if( x == -1 ) return;
      ++n;
      tot += x;
    });

    console.log('total, n = %d, %d', tot, n);

    $('#nilai_akhir').val(n == 0 ? 0 : Math.floor(tot / n))
  })
});
</script>
<!-- END OF: FORM to ADD ITEM -->
