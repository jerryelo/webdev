function handleFileSelect(e) {
    var files = e.target.files;
    var output = '';

    for (var i = 0, x = files.length; i < x; ++i) {
       var name = escape(files[i].name);
       var type = files[i].type || 'n/a';
       var size = files[i].size;
       var lastModDate = files[i].lastModifiedDate ? files[i].
       lastModifiedDate.toLocaleDateString() : 'n/a';

       output += '<li><strong>' + name + '</strong> (' + type +
       ') - ' +
         size + ' bytes, last modified: ' + lastModDate +
 '</li>';
       }
   document.getElementById('list').innerHTML = '<ul>' + output +
 '</ul>';
   }

 document.getElementById('files').addEventListener('change',
 handleFileSelect);