<?php
class List_model extends CI_Model {

        public function __construct()
        {
                $this->load->database();

                if( !$this->db->table_exists('kegiatan') ) {
                  // create
                  $this->load->dbforge();
                  $this->dbforge->add_field('id');

                  $defaults = array('type' => 'VARCHAR', 'constraint' => '256');
                  $this->dbforge->add_field(array(
                      'user_id' => $defaults,
                      'tanggal' =>  array('type' => 'DATE'),
                      'nama' => $defaults,
                      'usia' => $defaults,
                      'diagnosis' => $defaults,
                      'tindakan' => $defaults,
                      'kode'  => array(
                          'type' => 'INT',
                          'constraint' => '10'
                      ),
                      'verifikator' => $defaults,
                      'verified' => array(
                          'type' => 'BOOL'
                      )
                  ));
                  $this->dbforge->create_table('kegiatan');
                }
        }

        public function new_entry($data) {

          /*****
          $data harusnya berisi
              'user_id',
              'nama', 'usia',
              'diagnosis', 'tindakan',
              'kode',
              'verifikator'
          *****/

          // lengkapi $data
          $data['verified'] = 0; // pastinya belum verified dong.
          // tambahkan
          $this->db->insert('kegiatan', $data);

          $rowId = $this->db->insert_id();

          if( $rowId )
            $this->session->set_flashdata('success', "Berhasil menambahkan entri baru! <strong>#{$rowId}</strong>");

          return $rowId;
        }

        public function drop_entry($rowId, $userId) {
          $this->load->dbforge();

          // delete entry tsb berdasarkan id
          $this->db->where('id', $rowId)
                   ->where('user_id', $userId);

          if( !$this->db->delete('kegiatan') )
            return false;
          else
            return true;
        }

        public function get_entries($user_id) {
          // TODO: limit to top 10 ?
          $this->db->select('*')->from('kegiatan')
                   ->where('user_id',$user_id)
                   ->order_by('verified','ASC');
          $query = $this->db->get();
          // $query = $this->db->get_where('kegiatan', array('user_id' => $user_id));
          return $query->result_array();
        }

        public function getAllEntries() {
          $this->db->select('*');
          $this->db->from('kegiatan');
          $query = $this->db->get();
          return $query->result_array();
        }

        public function getEntryById($rowId) {
          $query = $this->db->get_where('kegiatan', array('id' => $rowId));

          if( $query->num_rows() != 1 ) return false;
          return $query->result_array();
        }

        public function getNameById($user_id) {
          $query = $this->db->get_where('user', array('user_id' => $user_id));
          if( !$query->num_rows() )
            return false;
          $result = $query->result_array();
          return $result[0]['name']; // should be equivalent to: $query->row()->name
        }

        public function bulkVerify($verifikator, $rowIds, $table = 'kegiatan') {
          foreach($rowIds as $id)
            $this->verifyById($verifikator, $id, $table);
        }

        /*
         * Diberikan sebuah entri dengan id=$rowId, mengubah kolom "verified" menjadi:
         *    positif(1): = Terverifikasi
         *    negatif(-1): = Menolak verifikasi
         * Fungsi ini mengubah database.
         *
         * @param integer       $rowId  id dari entri
         * @param integer(-1..1) $value  setuju/tolak verifikasi ## harusnya tidak mungkin jadi 0 lagi, once touched by verificator
         */
        public function verifyById($rowId, $verifikator, $value, $table = 'kegiatan') {
          $query = $this->db->get_where($table, array('id' => $rowId, 'verifikator' => $verifikator));

          if( count($query->result()) == 1 ) {
            $arr = array('verified' => $value,
                  'verified_at' => time() );
            error_log(print_r($arr,1));
            $this->db->set($arr);
            $this->db->where('id', $rowId);
            $this->db->update($table);
            return true;
          }

          return false;
        }

        public function ubahVerifikator($rowIds, $verifikator, $table = 'kegiatan')
        {
          foreach($rowIds as $id) {
            $this->db->set('verifikator', $verifikator);
            $this->db->where('id', $id);
            $this->db->update($table);
          }
        }

        /*
         * Given a verificator's Id, mengembalikan array berisi daftar entri kegiatan yang belum diverifikasi olehnya
         *
         * @param integer $verifikatorId  - id verifikator
         * @param integer $start - mulai dari entri dengan indeks >= $start (default: 0)
         * @param integer $n     - berapa banyak row yang dikembalikan (default: 0 = unlimited)
         *
         * @returns array result_array() terkait
         *
         * ## THIS IS A GOOD PRACTICE FOLLOWING phpDocumentor's guidelines
         */
         // TODO: limit hasil!
        public function dapatkanAntrianVerifikasi($verifikatorId, $start = 0, $n = 0) {
          $this->db->select('*');
          $this->db->where('verifikator', $verifikatorId);
          $this->db->where('verified', 0); // dapatkan yang belum diverifikasi saja
          $this->db->from('kegiatan');

          $query = $this->db->get();
          // $query = $this->db->get_where('kegiatan', array('verifikator' => $verifikatorId));
          if(!$query->num_rows())
            return false;
          else {
            return $query->result_array();
          }
        }

        // TODO: limit hasil! kalau tabelnya banyak, jebol ini
        /*
         * Diberikan id verifikator, mengembalikan array berisi semua row kegiatan yang sudah terverifikasi yang berhubungan dengan verifikator tersebut
         *
         * @returns array result_array() terkait
         * @returns boolean false jika data tidak ditemukan
         */
        public function dapatkanSudahVerifikasi($verifikatorId) {
          $this->db->select('*');
          $this->db->where('verifikator', $verifikatorId);
          $this->db->where('verified !=', 0); // dapatkan yang sudah pernah diverifikasi/ditolak saja
          $this->db->from('kegiatan');

          $query = $this->db->get();
          // $query = $this->db->get_where('kegiatan', array('verifikator' => $verifikatorId));
          if(!$query->num_rows())
            return false;
          else {
            return $query->result_array();
          }
        }

        /*
         * Diberikan id seorang verifikator, mengembalikan daftar semua row dari tabel 'kegiatan' yang berasosiasi dengan verifikator tersebut.
         *
         * @param integer $verfikatorId - id dari verifikator terkait
         *
         * @returns array "result_array()" berisikan data semua row terkait
         * @returns boolean false jika data tidak ditemukan
         */
        public function dapatkanSemuaEntriVerifikator($verifikatorId) {
          $this->db->select('*');
          $this->db->where('verifikator', $verifikatorId);
          $this->db->from('kegiatan');

          $query = $this->db->get();

          if(!$query->num_rows())
            return false;
          else {
            return $query->result_array();
          }
        }

        /*
         * Mendapatkan daftar semua Verifikator.
         * Mengembalikan sebuah array berisi daftar nama semua verifikator, dengan user_id sebagai key.
         *
         * (no param)
         *
         * @returns array [$key => $value] = [$id => $nama]
         */
        public function listVerificators() {
          $query = $this->db->get_where('user', array('role' => 'teacher'));

          if( !$query->num_rows() )
            return NULL;

          $ret = array();
          $results = $query->result_array();

          foreach($results as $row) {
            $ret[$row["user_id"]] = $row["name"];
          }

          return $ret;
        }

        public function changeCategoryTitleById($idKategori, $judul) {
          $this->db->set('title', $judul);
          $this->db->where('id', $idKategori);
          $this->db->update('categories');
        }

        /*
         * @func hapus
         * ONLY a helper function
         */
        private function hapus($src) {
          if( $src != 'default.jpg' &&
              file_exists('./assets/img/' . $src) ) {
               unlink('./assets/img/' . $src);
          }
        }
}
?>
