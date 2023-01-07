const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

function notFoundEx()
{
    document.getElementById("results").innerHTML = "<div class=\"boxc\" style=\"min-height: 80%;\"><div style=\"padding-top: 64px; padding-bottom: 64px; margin: 0 auto; width: 420px;\"><h1>There are no articles here</h1><p>Try with a different topic</p></div></div>";
}

function addResEl(id, article)
{
    document.getElementById("results").innerHTML += `<div class=\"boxc\"><button class=\"btn-box\" onclick=\"location.href = '../../article/?id=${id}'\"><h2>${article.title}</h2><p>Uploaded on ${article.uploaded.m}/${article.uploaded.d}/${article.uploaded.y} by ${article.auth}</p></button></div>`
}

function processResult(article)
{
        //console.log(i + "/" + topic.linked.length);
        //if(i > 1000) break;
        fetch("../../article/articles/" + article + ".json").then(response => response.json()).then(data =>
        {
            try
            {
                ///console.log(id + ", " + data.title);
                //console.log(topic.linked[i]);
                addResEl(article, data);
            }
            catch(e)
            {
                console.log(e);
            }
        }).catch(error => console.log("err"));
}

fetch("./docuplex.json").then(response => response.json()).then(data =>
{
    document.getElementById("topic-indicator").innerHTML = "Topic: " + urlParams.get("t");
    try
    {
        const topic = data[urlParams.get("t")];
        document.getElementById("topic-info").innerHTML = topic.info;
        if(topic.linked.length == 0) notFoundEx();
        for (let i = 0; i < topic.linked.length; i++) processResult(topic.linked[i])
          
    }
    catch(e)
    {
        console.log(e);
        notFoundEx()
    }
}).catch(error => notFoundEx());