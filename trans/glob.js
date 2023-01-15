function resizePageBody()
{
    //console.log("c");
    let vh = (window.innerHeight * 0.01) -.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
resizePageBody()

addEventListener("resize", (event) => {});

onresize = (event) => resizePageBody();