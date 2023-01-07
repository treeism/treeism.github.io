function download(content, fileName, contentType)
{
    const a = document.createElement("a");
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

function onDownload()
{
    download(JSON.stringify(jsonData), "yourfile.json", "text/plain");
}

function checkReuiredString(string)
{
    return string.replace(/\s/g, '').trim() != "";
}

function jsonOutput()
{
    if(document.getElementById("agreement").checked && checkReuiredString(document.getElementById("in-auth").value))
    {
        document.getElementById("compile-ex").innerHTML = "";
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        
        var obj = 
        {
            version: "1.0",
            title: document.getElementById("in-ttl").value,
            auth: document.getElementById("in-auth").value,
            uploaded:
            {
                d: dd,
                m: mm,
                y: yyyy
            },
            last:
            {
                d: 0,
                m: 0,
                y: 0
            },
            vl: "none",
            protection: "none",
            text:
            {
                p: document.getElementById("in-txt").value
            }
        };
        //var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));
        download(JSON.stringify(obj), "article.json", "text/plain");
    }
    else
    {
        document.getElementById("compile-ex").innerHTML = "Fields marked with '*' are required";
    }
}

function jsonDistr()
{
    try
    {
        let str = event.target.result;
        let data = JSON.parse(str);
        document.getElementById("in-ttl").value = data.title;
        document.getElementById("in-auth").value = data.auth;
        document.getElementById("in-txt").value = data.text.p;
        document.getElementById("load-ex").innerHTML = "";
    }
    catch
    {
        document.getElementById("load-ex").innerHTML = "Couldn't read that file";
    }
}

function jsonLoad()
{
    // Stop the form from reloading the page
	event.preventDefault();
    try
    {
	    // If there's no file, do nothing
	    if (!file.value.length) return false;

	    // Create a new FileReader() object
	    let reader = new FileReader();

	    // Setup the callback event to run when the file is read
	    reader.onload = jsonDistr;
        reader.readAsText(file.files[0]);

	    // Read the file
        return true;
    }
    catch
    {
        document.getElementById("load-ex").innerHTML = "Couldn't read that file";
        return false;
    }
}

$(document).on('dragover', function(e)
{
    var dt = e.originalEvent.dataTransfer;
    if (dt.types && (dt.types.indexOf ? dt.types.indexOf('Files') != -1 : dt.types.contains('Files')))
    {
        document.getElementById("file").style.backgroundColor = "#64CCFF77";
        window.clearTimeout(dragTimer);
    }
});
$(document).on('dragleave', function(e)
{
    dragTimer = window.setTimeout(function()
    {
        document.getElementById("file").style.backgroundColor = "#0000";
    }, 25);
});
$(document).on("focusout", function(e)
{
    dragTimer = window.setTimeout(function()
    {
        document.getElementById("file").style.backgroundColor = "#0000";
    }, 25);
});

/*function editorOutput()
{

}

function compileOut()
{
    var obj = {a: 123, b: "4 5 6"};
    var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));
}

function downloadOut()
{
    $('<a href="data:' + data + '" download="data.json">download JSON</a>').appendTo('#container');
}*/