const tombol = document.getElementById('tombol');
const input = document.getElementById('nama')

tombol.addEventListener('click', () => {
  const nama = input.value.trim();
  if (nama) {
    alert(`Halo, ${nama}! Selamat belajar.`)
  } else {
    alert('Silahkan masukkan namamu dulu.')
  }
})