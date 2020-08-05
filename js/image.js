function changeImage(id){

    let imagePacth = document.getElementById(id).getAttribute('src');
    document.getElementById("img-main").setAttribute('src',imagePacth);
}