/**
 * Fetches the given page and replaces the ID.
 * Will insert a 404 image if not found.
 * @param {string} documentName - The document to fetch
 * @param {string} elementIDToInsert - The element on the page to replace
 * @param {function} callback - I called if successful
 */
function InsertDocument(documentName, elementIDToInsert, callback = null)
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
            if(callback != null)
            {
                callback();
            }
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
    let justPageName = pageName;

    if(pageName.search("SITE-LegendDevelopment") > -1)
    {
        let regexEverythingToPage = /.*\//g;
        justPageName = pageName.replace(regexEverythingToPage,'');
    }

    let regexEverythingAfterHtml = /.html(.*)/g;
    justPageName = justPageName.replace(regexEverythingAfterHtml,'');

    let regexForwardSlash = /(\/)*/g;
    justPageName = justPageName.replace(regexForwardSlash,'');

    if(justPageName === "")
    {
        justPageName = "index";
    }

    InsertDocument("pagecontent/"+justPageName+".html", elementIDToInsertTo);
}