(function ( $ ) {
 
    $.fn.browser = function () 
    {
        var browser = searchString(dataBrowser) || "Other";
        var version = searchVersion(navigator.userAgent) || searchVersion(navigator.appVersion) || "Unknown";
        var noie = (browser != "ie") ? "no-ie" : "";

        this.addClass(browser+" "+browser+version+" "+noie);

        return this;
    };

    var searchString = function (data){
        for (var i=0 ; i < data.length ; i++)   
        {
            var dataString = data[i].string;
            versionSearchString = data[i].subString;

            if (dataString.indexOf(data[i].subString) != -1)
            {
                return data[i].identity;
            }
        }
    };

    var searchVersion = function (dataString) 
    {
        var index = dataString.indexOf(versionSearchString);
        if (index == -1) return;
        return parseFloat(dataString.substring(index+versionSearchString.length+1));
    };

    var dataBrowser = [
        { string: navigator.userAgent, subString: "Chrome",  identity: "Chrome" },
        { string: navigator.userAgent, subString: "MSIE",    identity: "ie" },
        { string: navigator.userAgent, subString: "Firefox", identity: "Firefox" },
        { string: navigator.userAgent, subString: "Safari",  identity: "Safari" },
        { string: navigator.userAgent, subString: "Opera",   identity: "Opera" },
    ];

 
}( jQuery ));