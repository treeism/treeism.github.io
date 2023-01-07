//import data from './articles/testd.json' assert { type: 'json' };
//console.log(data);
//compileArticle();

/*function compileArticle()
{
    try
    {
        if(data.protection == "none")
        {
            console.log(data.title);
            document.getElementById("doc-ttl").innerHTML = "<h1>" + data.title + "</h1>";
            document.getElementById("doc-txt").innerHTML = data.text.p.replace(/(?:\r\n|\r|\n)/g, '<br>');;
            document.getElementById("doc-crd").innerHTML = `by ${data.auth}<br>Uploaded on ${data.uploaded.m}/${data.uploaded.d}/${data.uploaded.y}, edited on ${data.last.m}/${data.last.d}/${data.last.y}`;
            //document.getElementById("doc-ttl").innerHTML = data.title;
            document.getElementById("doc-ex").innerHTML = "";
        }
        else
        {
            document.getElementById("doc-ttl").innerHTML = "<h2>Loading article...</h2>";
            document.getElementById("doc-txt").innerHTML = "";
            document.getElementById("doc-crd").innerHTML = ``;
            document.getElementById("doc-ex").innerHTML = "<div style=\"padding-top: 64px; margin: 0 auto; width: 420px;\"><h1>This content is protected</h1><p>This article is currently unavaible</p></div>";
        }
    }
    catch
    {
        document.getElementById("doc-ttl").innerHTML = "<h2>Loading article...</h2>";
        document.getElementById("doc-txt").innerHTML = "";
        document.getElementById("doc-crd").innerHTML = ``;
        document.getElementById("doc-ex").innerHTML = "<div style=\"padding-top: 64px; margin: 0 auto; width: 420px;\"><h1>This article doesn't exist</h1><p>Please double check the article ID</p></div>";
    }
}*/
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
fetch("./articles/" + urlParams.get("id") + ".json")
  .then(response => response.json())
  .then(data =>
    {
    try
    {
        if(data.protection == "none")
        {
            console.log(data.title);
            document.getElementById("doc-ttl").innerHTML = "<h1>" + data.title + "</h1>";
            document.getElementById("doc-txt").innerHTML = data.text.p.replace(/(?:\r\n|\r|\n)/g, '<br>');;
            document.getElementById("doc-crd").innerHTML = `by ${data.auth}<br>Uploaded on ${data.uploaded.m}/${data.uploaded.d}/${data.uploaded.y}, edited on ${data.last.m}/${data.last.d}/${data.last.y}<br>Article ID: ${urlParams.get("id")}`;
            //document.getElementById("doc-ttl").innerHTML = data.title;
            document.getElementById("doc-ex").innerHTML = "";
        }
        else
        {
            document.getElementById("doc-ttl").innerHTML = "<h2>Loading article...</h2>";
            document.getElementById("doc-txt").innerHTML = "";
            document.getElementById("doc-crd").innerHTML = ``;
            document.getElementById("doc-ex").innerHTML = "<div style=\"padding-top: 64px; margin: 0 auto; width: 420px;\"><h1>This content is protected</h1><p>This article is currently unavaible</p></div>";
        }
    }
    catch
    {
        document.getElementById("doc-ttl").innerHTML = "<h2>Loading article...</h2>";
        document.getElementById("doc-txt").innerHTML = "";
        document.getElementById("doc-crd").innerHTML = ``;
        document.getElementById("doc-ex").innerHTML = "<div style=\"padding-top: 64px; margin: 0 auto; width: 420px;\"><h1>This article doesn't exist</h1><p>Please double check the article ID</p></div>";
    }
    }).catch
    (error => {
        document.getElementById("doc-ttl").innerHTML = "<h2>Loading article...</h2>";
        document.getElementById("doc-txt").innerHTML = "";
        document.getElementById("doc-crd").innerHTML = ``;
        document.getElementById("doc-ex").innerHTML = "<div style=\"padding-top: 64px; margin: 0 auto; width: 420px;\"><h1>This article doesn't exist</h1><p>Please double check the article ID</p></div>";
    
    });
  