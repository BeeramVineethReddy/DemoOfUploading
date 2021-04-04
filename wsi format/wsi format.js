function redirectToNext()
{
    console.log(4865312);
    var x = document.getElementById('format').value;
    console.log(x);

    // var z = document.getElementById("none");
    //     console.log(z.innerHTML);

    if(x.localeCompare('none')==0)
    {
        var z = document.getElementById("none");
        //console.log(z.innerHTML);
        z.style.display="block";
    }

    else if(x.localeCompare('jpg')==0)
    {
        window.location.replace("../file upload/jpg.html");
    }
    else if(x.localeCompare('png')==0)
    {
        window.location.replace("../file upload/png.html");
    }
    else if(x.localeCompare('svs')==0)
    {
        window.location.replace("../file upload/svs.html");
    }
    else if(x.localeCompare('tiff')==0)
    {
        window.location.replace("../file upload/tiff.html");
    }
}