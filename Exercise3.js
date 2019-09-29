var nama = 'Mikael';
var peran = 'Ksatria';
var peran1 = ['Ksatria','Penyihir', 'Tabib'];

Array.prototype.contains = function(element){
    return this.indexOf(element) > -1;
};

if (nama === ''){
  console.log('Nama harus diisi!');
} else if (nama !== '' && peran1.contains(peran)) {
  console.log("Selamat datang di Dunia Proxytia," + nama)
  console.log("Halo " + peran+ ' ' + nama +", ciptakan keajaiban yang membantu kemenanganmu!)")
} else if (nama !== '' && peran === '') {
  console.log("Halo " + nama + ", Pilih peranmu untuk memulai game!");
} 

