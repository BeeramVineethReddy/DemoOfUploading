function redirectToNext()
{
    //console.log(4865312);
    var x = document.getElementById('datatype').value;
    //console.log(x);

    // var z = document.getElementById("none");
    //     console.log(z.innerHTML);

    if(x.localeCompare('none')==0)
    {
        var z = document.getElementById("none");
        //console.log(z.innerHTML);
        z.style.display="block";
    }

    else if(x.localeCompare('slide')==0)
    {
        window.location.replace("../wsi format/wsi format.html");
    }
    else if(x.localeCompare('anno')==0)
    {
        window.location.replace("../anno format/anno format.html");
    }
    else if(x.localeCompare('hm')==0)
    {
        window.location.replace("../hm format/hm format.html");
    }
    else if(x.localeCompare('patches')==0)
    {
        window.location.replace("../patches format/patches format.html");
    }
}