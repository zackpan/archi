load(__DIR__ + "papaparse.js");
$CSV = {};

(function () {
    $CSV.open = function (filePath) {
        if (filePath) {
            var FileReader = Java.type("java.io.FileReader");
            var Types = Java.type("java.nio.charset.StandardCharsets");
            var theCSVFile = new FileReader(filePath,Types.UTF_8);
        
            var theCSV ="";
            
            var data = theCSVFile.read();
            console.log("> Please Wait...");
            while(data != -1) {
                var theCharacter = String.fromCharCode(data);
                theCSV+=theCharacter;
                data = theCSVFile.read();
            }
            theCSVFile.close();
        
            console.log("> File Loaded");
            theDataFile = Papa.parse(theCSV);
        
            theData = theDataFile.data;
            return theData;
        }
        return null;

    }

})();