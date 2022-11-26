/**
 * Fetches the given page and replaces the ID.
 * Will insert a 404 image if not found.
 * @param {string} documentName - The document to fetch
 * @param {string} elementIDToInsert - The element on the page to replace
 */
function InsertDocument(documentName, elementIDToInsert)
{
    if(!document.getElementById(elementIDToInsert))
    {
        console.log("[InsertDocument]: ID not found. ID: " + elementIDToInsert);
        return;
    }
    let documentInsert = document.getElementById(elementIDToInsert);

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function()
    {
        if(xhttp.status === 200)
        {
            documentInsert.innerHTML = this.responseText;
        }
        else
        {
            documentInsert.innerHTML = "<h2>Content not found?</h2>" +
                "<img src='https://legendforetold.dev/images/dazedpug.png'>";
        }
    }
    xhttp.open("GET", documentName, true);
    xhttp.send();
}

/**
 * Uses the current URL to fetch the main body contents.
 * @param {string} elementIDToInsertTo - The element on the page to replace
 */
function InsertCurrentPage(elementIDToInsertTo)
{
    let pageName = window.location.pathname;
    let justPageName = pageName.replace('.html','');

    let regexForwardSlash = /(\/)*/g;
    justPageName = pageName.replace(regexForwardSlash,'');

    console.log("pageName: " + pageName);
    console.log("justPageName: " + justPageName);

    if(justPageName === "")
    {
        justPageName = "index";
    }

    InsertDocument("pagecontent/"+justPageName+".html", elementIDToInsertTo);
}