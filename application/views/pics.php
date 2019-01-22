<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Uppy</title>
    <link href="https://transloadit.edgly.net/releases/uppy/v0.29.0/dist/uppy.min.css" rel="stylesheet">
  </head>
  <body>
    <!-- <div id="loading-block" style="display: block;z-index: 99;position: fixed;background: white;" width="100%">
      <img src='<?=base_url("assets/img/ping-loader.gif")?>' width="100%" style="display: block;">
    </div> -->
    <div id="drag-drop-area" style='text-align: center;'></div>
    <script>
    const accessToken = '<?=$accessToken;?>'
    const folderId = '<?=$folderId;?>'
    const base_url = '<?=base_url()?>'
    </script>
    <script src="<?=base_url('assets/js/my-uppy/dist/main.js')?>" ></script>
  </body>
</html>
