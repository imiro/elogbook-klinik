<?php

if (!defined('BASEPATH')) {
    exit('No direct script access allowed');
}

define('USER_TABLE_NAME', 'users');

class User_model extends CI_Model {

    function __construct() {
        parent::__construct();

        $this->load->database();

        if( !$this->db->table_exists(USER_TABLE_NAME) )
        {
          // create
          $this->load->dbforge();

          $defaults = array('type' => 'VARCHAR', 'constraint' => '256');
          $this->dbforge->add_field(array(
              'user_id' => $defaults,
              'name' => $defaults,
              'role' => $defaults,
              'npm' => array('type' => 'VARCHAR', 'constraint' => '16', 'null' => TRUE),
              'nip' => array('type' => 'VARCHAR', 'constraint' => '16', 'null' => TRUE),
              'created_at timestamp default current_timestamp'
          ));
          $this->dbforge->add_key('username', TRUE);
          $this->dbforge->create_table(USER_TABLE_NAME);
        }
    }

    function retrieve_or_add_user($user) {
      $this->db->where('user_id', $user->username);

      $query = $this->db->get(USER_TABLE_NAME);
      if($query->num_rows()) {
        return $query->result();
      } else {
        $this->db->set('user_id', $user->username);
        if( $loc = strpos('#', $user->name) )
    		{
          $this->db->set('name', substr($this->session->userdata('name'),0,$loc));
    		} else {
          $this->db->set('name', $user->name);
        }
        $this->db->set('role', $user->role);
        if($user->role == 'mahasiswa')
          $this->db->set('npm', $user->npm);
        else
          $this->db->set('nip', $user->nip);

        return $this->db->insert(USER_TABLE_NAME);
      }
    }

    function change_password($postData){
        $this->load->model('admin_model');
        $validate = false;

        $oldData = $this->admin_model->get_user_by_id($this->session->userdata('user_id'));

        if($oldData[0]['password'] == md5($postData['currentPassword']))
            $validate = true;

        if($validate){
            $data = array(
                'password' => md5($postData['newPassword']),
            );
            $this->db->where('user_id', $this->session->userdata('user_id'));
            $this->db->update('user', $data);

            $module = "Change Password";
            $activity = "change its own password";
            $this->admin_model->insert_log($activity, $module);
            return array('status' => 'success', 'message' => '');
        }else{
            return array('status' => 'invalid', 'message' => '');
        }

    }
}

/* End of file  */
