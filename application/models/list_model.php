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

          return $rowId;
        }

        public function drop_entry($rowId) {
          $this->load->dbforge();

          // delete entry tsb berdasarkan id
          $this->db->delete('kegiatan', array('id' => $rowId));
        }

        public function get_entries($user_id) {
          // TODO: limit to top 10
          $query = $this->db->get_where('kegiatan', array('user_id' => $user_id));
          return $query->result_array();
        }

        public function bulkVerify($verifikator, $rowIds, $table = 'kegiatan') {
          foreach($rowIds as $id)
            $this->verifyById($verifikator, $id, $table);
        }

        public function verifyById($verifikator, $rowId, $table = 'kegiatan') {
          $query = $this->db->get_where($table, array('id' => $rowId, 'verifikator' => $verifikator));

          if( count($query->result()) == 1 ) {
            $this->db->set('verified', 1);
            $this->db->where('id', $rowId);
            $this->db->update($table);
          }
        }

        public function ubahVerifikator($rowIds, $verifikator, $table = 'kegiatan')
        {
          foreach($rowIds as $id) {
            $this->db->set('verifikator', $verifikator);
            $this->db->where('id', $id);
            $this->db->update($table);
          }
        }

        public function changeCategoryTitleById($idKategori, $judul) {
          $this->db->set('title', $judul);
          $this->db->where('id', $idKategori);
          $this->db->update('categories');
        }


        public function get_voters()
        {
            $query = $this->db->get('user_details');
            return $query->result();
        }

        public function set_voter_legit($username, $val)
        {
          $this->db->where('username', $username);
          $this->db->set('is_legit', $val ? 1 : 0);
          $this->db->update('user_details');

          $this->db->where('username', $username);
          $this->db->set('is_legit', $val ? 1 : 0);
          $this->db->update('users');
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
