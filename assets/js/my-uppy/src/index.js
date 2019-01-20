const Uppy = require('@uppy/core')
const XHRUpload = require('@uppy/xhr-upload')
const Dashboard = require('@uppy/dashboard')
const generateFileID = require('@uppy/utils/lib/generateFileID')

window.uppy =  Uppy()
.use(Dashboard, {
  inline: true,
  target: '#drag-drop-area'
})
// .use(Uppy.Tus, {endpoint: 'https://master.tus.io/files/'})
.use(XHRUpload, {
  endpoint: 'https://www.googleapis.com/upload/drive/v3/files?uploadType=media',
  formData: false,
  headers: {
    'Authorization': 'Bearer ' + accessToken
    // 'Content-Type': 'image/jpeg' /* FIXED! with file.xhrUpload.headers property.. :) {exist, but undocumented} TO DO: FIX THIS! It has to be different for every different filetype, so how? */
  }
})
.on('upload-success', function(file, response, uploadURL) {
  console.log('File uploaded! Now updating meta-data...')
  // we have file.name, response.id

  const url = 'https://www.googleapis.com/drive/v3/files/' + response.id + '?addParents=' + folderId;

  const fileRes = {
    name: file.name
  }

  fetch(url, {
    method: 'PATCH',
    headers: {
      'Authorization': 'Bearer ' + accessToken,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(fileRes)
  }).then(response => response.json())
  .then(function (json) {
    console.log('Finished updating metadata!', json)
  })

}).on('file-added', function(file) {
  console.log("added file of type: ", file.type)
  file.xhrUpload.headers = {
    'Content-Type': file.type
  }

  this.setState({
    files: Object.assign({}, this.getState().files, {
      [fileID]: newFile
    })
  })
})

uppy.on('complete', (result) => {
console.log('Upload complete! We’ve uploaded these files:', result.successful)
})

// START FILE LISTING

let url = 'https://www.googleapis.com/drive/v3/files?q=\'' + folderId + '\' in parents';
url = encodeURI(url);
fetch(url, {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer ' + accessToken
  }
})
.then(response => response.json())
.then( function (json) {
    console.log(json)

    let filePromises = []
    json.files.forEach((file) => {
      filePromises.push(
        fetch('https://www.googleapis.com/drive/v3/files/' + file.id + "?fields=thumbnailLink,mimeType,id,name,fileExtension,size,modifiedTime", {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ' + accessToken
          }
        }).then(resp => resp.json())
      )
    })
    return Promise.all( filePromises )
  })
.then( function (files) {
    links = files.map(a => a.thumbnailLink)
    console.log("links", links)

    let filesList = {}
    files.forEach( (file) => {
      const newFile = {
        source: '',
        id: generateFileID({...file, data: {size: file.size, lastModified: file.modifiedTime}}),
        name: file.name,
        extension: file.fileExtension || '',
        meta: Object.assign({}, uppy.getState().meta, {name: file.name, type: file.mimeType}),
        type: file.mimeType,
        data: {
          size: parseInt(file.size),
          lastModified: file.modifiedTime
        },
        progress: {
          percentage: 100,
          bytesUploaded: file.size,
          bytesTotal: file.size || 0,
          uploadComplete: true,
          uploadStarted: true
        },
        size: file.size || 0,
        // isRemote: true,
        // remote: file.remote || '',
        preview: file.thumbnailLink
      }
      filesList[newFile.id] = newFile
    })

    uppy.setState({
      files: {
        ...uppy.getState().files,
        ...filesList
      }
    })
})
