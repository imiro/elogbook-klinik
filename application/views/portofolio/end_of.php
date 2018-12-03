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

// function verify_confirmation(url, elem) {
//
//   $("#modalKonfirmasiVerifikasi .modal-body").html(
//     "<p>Yakin akan memverifikasi entri ini? </p><br/>\n" +
//     generate_body(elem)
//   );
//
//   $("#modalKonfirmasiVerifikasi .verifikasi").attr("href", url);
// } // ASLI

// function tolak_confirmation(url, elem) {
//   $("#modalKonfirmasiTolak .modal-body").html(
//     "<p>Yakin akan <b>menolak verifikasi</b> entri ini? </p><br/>\n" +
//     generate_body(elem)
//   );
//
//   $("#modalKonfirmasiTolak .verifikasi").attr("href", url);
// }
</script>

<script src="<?php echo base_url("assets/js/modal_verifikasi.js"); ?>" ></script>
<script type="text/javascript">

var modal_labels = {
  konfirmasi: {
    modal_id: "#modalKonfirmasiVerifikasi",
    title: "<p>Yakin akan memverifikasi entri ini? </p><br/>\n"
  },
  tolak: {
    modal_id: "#modalKonfirmasiTolak",
    title: "<p>Yakin akan <b>menolak verifikasi</b> entri ini? </p><br/>\n"
  },
  delete: {
    modal_id: "#modalKonfirmasiHapus",
    title: "<p>Yakin akan menghapus entri ini? </p><br/>\n"
  }
};

function verify_confirmation(url, elem) {
  modal_confirmation(
      modal_labels.konfirmasi.modal_id,
      modal_labels.konfirmasi.title,
      url, generate_body(elem));
}

function tolak_confirmation(url, elem) {
modal_confirmation(
      modal_labels.tolak.modal_id,
      modal_labels.tolak.title,
      url, generate_body(elem));
}

function delete_confirmation(url, elem) {
  modal_confirmation(
      modal_labels.delete.modal_id,
      modal_labels.delete.title,
      url, generate_body(elem));
}

function verify1_confirmation(url) {
  modal_confirmation(
      modal_labels.konfirmasi.modal_id,
      modal_labels.konfirmasi.title,
      url, "");
}

function tolak1_confirmation(url) {
modal_confirmation(
      modal_labels.tolak.modal_id,
      modal_labels.tolak.title,
      url, "");
}

function delete1_confirmation(url) {
  modal_confirmation(
      modal_labels.delete.modal_id,
      modal_labels.delete.title,
      url, "");
}

</script>

<script type="text/javascript">
  $(document).ready(function() {
    $("#datepicker").datepicker({dateFormat: 'yy-mm-dd'});
  });
</script>
</body>
</html>
