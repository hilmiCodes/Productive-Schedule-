const inputBox = document.getElementById('inputBox');
const listJadwal = document.getElementById('listJadwal');
function addTask() {
  if (inputBox.value === '') {
    alert('Tidak dapat menambahkan data kosong, mohon isi terlebih dahulu');
  } else {
    var li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listJadwal.appendChild(li);
    var span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }
  inputBox.value = ''; //kondisi ini diberikan agar dalam input box selalu bernilai kosong setelah dikirim/di add
}

listJadwal.addEventListener('click', function(e){
  if(e.target.tagName === 'LI'){
    e.target.classList.toggle('checked')
  } else if(e.target.tagName ==='SPAN'){
    e.target.parentElement.remove()
  }
})