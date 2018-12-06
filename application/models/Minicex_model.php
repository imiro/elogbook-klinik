<?php

define('TABLE_NAME', 'minicex');

class Minicex_model extends CI_Model {

        public function __construct()
        {
                $this->load->database();

                if( !$this->db->table_exists( TABLE_NAME ) ) {
                  // create
                  $this->load->dbforge();
                  $this->dbforge->add_field('id');

                  $defaults = new \stdClass;
                  $defaults->string = array('type' => 'VARCHAR', 'constraint' => '256');
                  $defaults->int = array('type' => 'INT', 'constraint' => '9');

                  $this->dbforge->add_field(
                    array(
                      'student_id' => array('type' => 'INT'),
                      'spv_id' => array('type' => 'INT'),
                      'tanggal' =>  array('type' => 'DATE'),
                      'rotasi' => $defaults->string,
                      'kasus' => $defaults->string,
                      'kasus_barulama' => array('type' => 'ENUM("baru", "lama")'),
                      'fokus_klinis' => array(
                        'type' => 'SET("anam", "diagnosis", "tatalaksana", "edukasi")',
                        'null' => TRUE ),
                      'tingkat_kesulitan'  => array(
                          'type' => 'ENUM("mudah", "sedang", "sulit")',
                          'null' => TRUE ),
                      'nilai_anam' => $defaults->int,
                      'nilai_pf' => $defaults->int,
                      'nilai_komunikasi' => $defaults->int,
                      'nilai_diagnosis' => $defaults->int,
                      'nilai_profesionalism' => $defaults->int,
                      'nilai_organisasi' => $defaults->int,
                      'nilai_perawatan' => $defaults->int,
                      'nilai_akhir' => $defaults->int,
                      'kemampuan_khusus' => array('type' => 'TEXT'),
                      'saran' => array('type' => 'TEXT'),
                      'komentar' => array('type' => 'TEXT'),
                      'waktu_total' => $defaults->int,
                      'waktu_diskusi' => $defaults->int,
                      'waktu_feedback' => $defaults->int,
                      'created_at' => array('type' => 'TIMESTAMP')
                  ));
                  $this->dbforge->create_table(TABLE_NAME);
                }

                // LABELS
                $this->labels = array(
                    'student_id' => "Peserta Didik",
                    'spv_id' => "Supervisor",
                    'tanggal' =>  "Tanggal",
                    'rotasi' => "Rotasi",
                    'kasus' => "Kasus",
                    'kasus_barulama' => "Kasus Baru/Lama",
                    'fokus_klinis' => "Fokus Klinis",
                    'tingkat_kesulitan'  => "Tingkat Kesulitan",
                    'nilai' => array(
                      "anam" => "Anamnesis",
                      "pf" => "Pemeriksaan Fisis",
                      "komunikasi" => "Komunikasi Verbal",
                      "diagnosis" => "Diagnosis",
                      "profesionalism" => "Profesionalisme",
                      "organisasi" => "Organisasi/Efisiensi",
                      "perawatan" => "Perawatan Umum",
                      "akhir" => "Akhir" ),
                    'kemampuan_khusus' => "Kemampuan Khusus",
                    'saran' => "Saran Perbaikan",
                    'komentar' => "Komentar",
                    'waktu_total' => "Waktu (menit)",
                    'waktu_diskusi' => "Waktu Diskusi",
                    'waktu_feedback' => "Waktu Umpan Balik"
                );
        }

        public function getLabels() {
          return $this->labels;
        }

        /*
         * @func newEntry
         * Menambahkan entri 'row' baru ke tabel
         *
         * @param $data array - of ($key => $value) where ($key) sesuai dengan ($key) pada $this->labels
                  $data = ('student_id, 'spv_id', 'tanggal', 'rotasi' ...)
         * @returns integer : id row baru di database jika operasi berhasil
         */
        public function newEntry( $data ) {
          if($data['fokus_klinis']) // TODO: THIS IF SHOULDN'T BE NECESSARY BECAUSE $data SHOULD'VE BEEN VALID AND fokus_klinis NOT EMPTY
            $data['fokus_klinis'] = implode(',',$data['fokus_klinis']);
          $this->db->insert(TABLE_NAME, $data);

          $rowId = $this->db->insert_id();

          if( $rowId )
            $this->session->set_flashdata('success', "Berhasil menambahkan entri baru! <strong>#{$rowId}</strong>");

          return $rowId;
        }

        public function dropEntry($id) {

        }

        public function getEntryById() {

        }

        /*
         * @func getEntries
         * Diberikan id student atau id supervisor, mengembalikan result array rows yang sesuai dengan query
         *
         * @param $studentId integer
         * @param $spvId     integer
         *
         * @returns array - result_array() | array of array dari rows yang match dengan kriteria
         */
        public function getEntries($studentId, $spvId) {
          $this->db->select('*')->from(TABLE_NAME)
                   ->where('student_id', $studentId)
                   ->where('spv_id', $spvId);

          $query = $this->db->get();

          return $query->result_array();
        }

        public function getStudents() {
          $this->db->select('*')
                   ->from('user')
                   ->where('role', 'student');

          $query = $this->db->get();

          $ret = array();
          foreach($query->result() as $row) {
            $ret[$row->user_id] = $row->name;
          }

          return $ret;
        }
}

?>
