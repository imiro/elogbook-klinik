<?php

defined('BASEPATH') OR exit('No direct script access allowed');

// require_once('vendor/SSO/SSO.php');

use SSO\SSO;

class Logout extends CI_Controller {

  public function index() {
    SSO::logout(base_url());
  }
}
