

document.querySelectorAll('.box-wrapper img').forEach(image => {
  image.onclick = () => {
    document.querySelector('.btn_img').style.display = 'block';
    document.querySelector('.btn_img img').src = image.getAttribute('src');

    // Una nueva pagina [+]
    //document.querySelector('.btn_img .btn_pag').setAttribute('target', '_blank');
  };
});

/*  Cerrar [X] */
document.querySelector('.btn_img .cerrar').onclick = () => {
  document.querySelector('.btn_img').style.display = 'none';
};

/*abrir [+] */
document.querySelector('.btn_pag').onclick = () => {
  window.open(document.querySelector('.btn_img img').src,'_blank');
};

/*

Una nueva pagina [+]
document.querySelectorAll('.btn_img .btn_pag').forEach(image => {
  image.onclick = () => {
    const imageUrl = image.getAttribute('src');
    window.open(imageUrl, '_blank');
  };
});

*/