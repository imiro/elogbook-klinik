<?php


if (!defined('BASEPATH')) {
    exit('No direct script access allowed');
}

class egfr extends CI_Controller {

    public function __Construct() {
        parent::__Construct();
        // if(!$this->session->userdata('logged_in')) {
        //     redirect(base_url());
        // }
    }
    public function index() {
        $this->load->view('egfr');
    }


}

/* End of file */
